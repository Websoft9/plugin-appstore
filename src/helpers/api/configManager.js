import { getFullConfig } from './apiCore';

class ConfigManager {
    constructor() {
        this.config = null;
        this.configPromise = null;
        this.cacheTimeout = 24 * 60 * 60 * 1000; // 24小时缓存
    }

    async initialize() {
        // 如果已有有效配置，直接返回
        if (this.config && this._isCacheValid()) {
            return this.config;
        }

        // 如果正在初始化，等待现有的Promise
        if (this.configPromise) {
            return this.configPromise;
        }
        this.configPromise = this._fetchConfig();

        try {
            this.config = await this.configPromise;
            return this.config;
        } finally {
            this.configPromise = null;
        }
    }

    async _fetchConfig() {
        try {
            // 检查本地存储中的有效缓存
            const cachedConfig = this._getCachedConfig();
            if (cachedConfig && this._isCacheValid(cachedConfig)) {
                return cachedConfig.config;
            }

            // 一次性获取所有配置（优化：减少从2次docker调用到1次）
            const fullConfig = await getFullConfig();
            const config = this._buildConfig(fullConfig.nginxPort, fullConfig.apiKey);

            // 缓存到本地存储
            this._saveToCache(config);

            return config;
        } catch (error) {
            console.error('[ConfigManager] Config initialization failed:', error);

            // 尝试使用过期缓存作为fallback
            const cachedConfig = this._getCachedConfig();
            if (cachedConfig) {
                console.warn('[ConfigManager] Using expired cache as fallback');
                return cachedConfig.config;
            }

            // 最后使用默认配置
            console.warn('[ConfigManager] Using default config as last resort');
            const defaultConfig = this._getDefaultConfig();
            console.timeEnd('[ConfigManager] Config fetch');
            return defaultConfig;
        }
    }

    _buildConfig(nginxPort, apiKey) {
        const timestamp = Date.now();
        const { hostname, protocol } = window.location;

        return {
            nginxPort,
            apiKey,
            baseURL: `${protocol}//${hostname}:${nginxPort}`,
            apiURL: `${protocol}//${hostname}:${nginxPort}/api`,
            timestamp
        };
    }

    _getCachedConfig() {
        try {
            const cached = localStorage.getItem('websoft9_app_config_cache');
            return cached ? JSON.parse(cached) : null;
        } catch (error) {
            console.warn('[ConfigManager] Failed to read cache:', error);
            return null;
        }
    }

    _isCacheValid(cachedData = this.config) {
        return cachedData?.timestamp && (Date.now() - cachedData.timestamp) < this.cacheTimeout;
    }

    _saveToCache(config) {
        try {
            const cacheData = { config, timestamp: Date.now() };
            localStorage.setItem('websoft9_app_config_cache', JSON.stringify(cacheData));
        } catch (error) {
            console.warn('[ConfigManager] Failed to save cache:', error);
        }
    }

    _getDefaultConfig() {
        return this._buildConfig(9000, null);
    }

    getConfig() {
        return this.config || this._getDefaultConfig();
    }

    // 清除缓存
    clearCache() {
        try {
            localStorage.removeItem('websoft9_app_config_cache');
            this.config = null;
            this.configPromise = null;
        } catch (error) {
            console.warn('[ConfigManager] Failed to clear cache:', error);
        }
    }

    // 预加载配置
    async preload() {
        if (!this.config && !this.configPromise) {
            this.initialize().catch(error => {
                console.warn('[ConfigManager] Preload failed:', error);
            });
        }
    }

    // 简化的配置获取方法
    async getBaseURL() {
        const config = await this.initialize();
        return config.baseURL;
    }

    async getApiURL() {
        const config = await this.initialize();
        return config.apiURL;
    }

    async getNginxPort() {
        const config = await this.initialize();
        return config.nginxPort;
    }
}

// 单例实例
const configManager = new ConfigManager();

// 开发环境下暴露到全局，方便调试
if (process.env.NODE_ENV === 'development') {
    window.configManager = configManager;
}

export default configManager;
