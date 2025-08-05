import axios from 'axios';
import cockpit from 'cockpit';

// content type
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

// 配置缓存对象
const configCache = {
    apiKey: null,
    nginxPort: null,
    fetching: new Set()
};

const getNginxConfig = async () => {
    // 检查缓存
    if (configCache.nginxPort) {
        return configCache.nginxPort;
    }

    // 防止并发重复请求
    if (configCache.fetching.has('nginx')) {
        return new Promise((resolve, reject) => {
            const checkCache = () => {
                if (configCache.nginxPort) {
                    resolve(configCache.nginxPort);
                } else if (!configCache.fetching.has('nginx')) {
                    reject(new Error("Failed to get nginx config"));
                } else {
                    setTimeout(checkCache, 100);
                }
            };
            checkCache();
        });
    }

    configCache.fetching.add('nginx');

    try {
        var script = "docker exec -i websoft9-apphub apphub getconfig --section nginx_proxy_manager";
        let content = (await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" })).trim();
        content = JSON.parse(content);
        let listen_port = content.listen_port;

        if (!listen_port) {
            throw new Error("Nginx Listen Port Not Set");
        }

        // 缓存结果
        configCache.nginxPort = listen_port;
        return listen_port;
    }
    catch (error) {
        const errorText = [error.problem, error.reason, error.message]
            .filter(item => typeof item === 'string')
            .join(' ');

        if (errorText.includes("permission denied")) {
            throw new Error("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>");
        }
        else {
            throw new Error(errorText || "Get Nginx Listen Port Error");
        }
    } finally {
        configCache.fetching.delete('nginx');
    }
}

const getApiKey = async () => {
    // 检查缓存
    if (configCache.apiKey) {
        return configCache.apiKey;
    }

    // 防止并发重复请求
    if (configCache.fetching.has('apikey')) {
        return new Promise((resolve, reject) => {
            const checkCache = () => {
                if (configCache.apiKey) {
                    resolve(configCache.apiKey);
                } else if (!configCache.fetching.has('apikey')) {
                    reject(new Error("Failed to get api key"));
                } else {
                    setTimeout(checkCache, 100);
                }
            };
            checkCache();
        });
    }

    configCache.fetching.add('apikey');

    try {
        var script = "docker exec -i websoft9-apphub apphub getconfig --section api_key --key key";
        const api_key = (await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" })).trim();
        if (!api_key) {
            throw new Error(" Api Key Not Set");
        }

        // 缓存结果
        configCache.apiKey = api_key;
        return api_key;
    }
    catch (error) {
        const errorText = [error.problem, error.reason, error.message]
            .filter(item => typeof item === 'string')
            .join(' ');

        if (errorText.includes("permission denied")) {
            throw new Error("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>");
        }
        else {
            throw new Error(errorText || "Get The Apphub's Api Key Error");
        }
    } finally {
        configCache.fetching.delete('apikey');
    }
}

// 检查是否为配置错误并清除相应缓存
const handleConfigError = (error) => {
    const status = error.response?.status;
    const details = error.response?.data?.details;

    // API Key 无效 - 后端返回 400 + "Invalid API Key"
    if (status === 400 && details === "Invalid API Key") {
        console.warn('[Config Error] Invalid API Key detected, clearing cache');
        configCache.apiKey = null;
        return true;
    }

    // Nginx 端口/连接错误
    if (status === 404 || status === 502 || status === 503 ||
        error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        console.warn('[Config Error] Nginx connection error detected, clearing cache');
        configCache.nginxPort = null;
        return true;
    }

    return false;
};

class APICore {
    constructor() {
        this.axiosInstance = null;
    }

    // 创建带缓存配置的 axios 实例
    async getAxiosInstance() {
        if (!this.axiosInstance) {
            // 并行获取配置，避免串行等待
            const [apiKey, nginxPort] = await Promise.all([
                getApiKey(),
                getNginxConfig()
            ]);

            this.axiosInstance = axios.create({
                baseURL: `${window.location.protocol}//${window.location.hostname}:${nginxPort}/api`,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'x-api-key': apiKey
                },
                timeout: 30000
            });

            // 只为这个实例设置拦截器，不影响全局
            this.setupInstanceInterceptors();
        }
        return this.axiosInstance;
    }

    // 为当前实例设置拦截器
    setupInstanceInterceptors() {
        // 响应拦截器
        this.axiosInstance.interceptors.response.use(
            (response) => {
                // 成功响应，返回数据
                return response.status === 200 ? response.data : response;
            },
            (error) => {
                // 检查并处理配置错误
                const isConfigError = handleConfigError(error);
                if (isConfigError) {
                    // 标记为配置错误，调用方可以选择重试
                    error.configError = true;
                }

                error.message = error.response?.data?.details || error.message || "Unknown Error";
                return Promise.reject(error);
            }
        );
    }

    // 重置实例（配置错误时使用）
    resetInstance() {
        this.axiosInstance = null;
    }

    // 带重试的请求方法
    async requestWithRetry(method, url, data = null, params = null) {
        let lastError;

        // 最多重试一次
        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const instance = await this.getAxiosInstance();

                let response;
                switch (method.toLowerCase()) {
                    case 'get':
                        response = await instance.get(url, { params });
                        break;
                    case 'post':
                        response = await instance.post(url, data, { params });
                        break;
                    case 'put':
                        response = await instance.put(url, data, { params });
                        break;
                    case 'delete':
                        response = await instance.delete(url, { params });
                        break;
                    default:
                        throw new Error(`Unsupported method: ${method}`);
                }

                // 直接返回拦截器处理后的结果
                return response;
            } catch (error) {
                lastError = error;

                // 如果是配置错误且是第一次尝试，重置实例并重试
                if (error.configError && attempt === 0) {
                    console.info(`[API Retry] Config error detected, resetting instance and retrying...`);
                    this.resetInstance();
                    await new Promise(resolve => setTimeout(resolve, 200)); // 短暂等待
                    continue;
                }

                // 其他情况直接抛出错误
                break;
            }
        }

        throw lastError;
    }

    get = async (url, params) => {
        return this.requestWithRetry('get', url, null, params);
    };

    post = async (url, data, params) => {
        return this.requestWithRetry('post', url, data, params);
    };

    put = async (url, data, params) => {
        return this.requestWithRetry('put', url, data, params);
    };

    delete = async (url, params) => {
        return this.requestWithRetry('delete', url, null, params);
    };
}

export { APICore, getNginxConfig, getApiKey };
