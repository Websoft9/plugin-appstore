import cockpit from 'cockpit';
import { getNginxConfig, getApiKey } from './apiCore';

class ConfigManager {
    constructor() {
        this.config = null;
        this.initializing = false;
        this.initPromise = null;
        this.cacheTimeout = 24 * 60 * 60 * 1000; // 24小时缓存
    }

    async initialize() {
        if (this.config) {
            console.log('[ConfigManager] Using cached config:', this.config);
            return this.config;
        }

        if (this.initializing) {
            console.log('[ConfigManager] Initialization in progress, waiting...');
            return this.initPromise;
        }

        console.log('[ConfigManager] Starting config initialization...');
        this.initializing = true;
        this.initPromise = this._fetchConfig();

        try {
            this.config = await this.initPromise;
            return this.config;
        } finally {
            this.initializing = false;
        }
    }

    async _fetchConfig() {
        console.time('[ConfigManager] Total config fetch time');

        try {
            // 先尝试从本地缓存获取（如果最近获取过且未过期）
            const cachedConfig = this._getCachedConfig();
            if (cachedConfig && this._isCacheValid(cachedConfig)) {
                console.log('[ConfigManager] Using valid cache from localStorage');
                console.timeEnd('[ConfigManager] Total config fetch time');
                return cachedConfig.config;
            }

            console.log('[ConfigManager] Fetching fresh config...');

            // 并行获取所有配置（利用apiCore中已有的缓存机制）
            console.time('[ConfigManager] Config fetch');
            const [nginxPort, apiKey] = await Promise.all([
                getNginxConfig(),
                getApiKey().catch(() => null) // API key 可选，失败时返回 null
            ]);
            console.timeEnd('[ConfigManager] Config fetch');

            const config = {
                nginxPort,
                apiKey,
                baseURL: `${window.location.protocol}//${window.location.hostname}:${nginxPort}`,
                apiURL: `${window.location.protocol}//${window.location.hostname}:${nginxPort}/api`,
                timestamp: Date.now()
            };

            // 缓存到本地存储
            this._saveToCache(config);

            console.log('[ConfigManager] Config initialized successfully:', config);
            console.timeEnd('[ConfigManager] Total config fetch time');

            return config;
        } catch (error) {
            console.error('[ConfigManager] Config initialization failed:', error);

            // 尝试使用过期的缓存作为fallback
            const cachedConfig = this._getCachedConfig();
            if (cachedConfig) {
                console.warn('[ConfigManager] Using expired cache as fallback');
                return cachedConfig.config;
            }

            // 最后的fallback：默认配置
            console.warn('[ConfigManager] Using default config as last resort');
            const defaultConfig = this._getDefaultConfig();
            console.timeEnd('[ConfigManager] Total config fetch time');
            return defaultConfig;
        }
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

    _isCacheValid(cachedData) {
        if (!cachedData || !cachedData.timestamp) {
            return false;
        }
        return (Date.now() - cachedData.timestamp) < this.cacheTimeout;
    }

    _saveToCache(config) {
        try {
            const cacheData = {
                config,
                timestamp: Date.now()
            };
            localStorage.setItem('websoft9_app_config_cache', JSON.stringify(cacheData));
            console.log('[ConfigManager] Config saved to cache');
        } catch (error) {
            console.warn('[ConfigManager] Failed to save cache:', error);
        }
    }

    _getDefaultConfig() {
        return {
            nginxPort: 9000,
            apiKey: null,
            baseURL: `${window.location.protocol}//${window.location.hostname}:9000`,
            apiURL: `${window.location.protocol}//${window.location.hostname}:9000/api`,
            timestamp: Date.now()
        };
    }

    getConfig() {
        return this.config || this._getDefaultConfig();
    }

    // 清除缓存（用于调试或强制刷新）
    clearCache() {
        try {
            localStorage.removeItem('websoft9_app_config_cache');
            this.config = null;
            this.initializing = false;
            this.initPromise = null;
            console.log('[ConfigManager] Cache cleared');
        } catch (error) {
            console.warn('[ConfigManager] Failed to clear cache:', error);
        }
    }

    // 预加载配置（可选，用于进一步优化首次加载）
    async preload() {
        if (!this.config && !this.initializing) {
            // 后台预加载，不阻塞UI
            this.initialize().catch(error => {
                console.warn('[ConfigManager] Preload failed:', error);
            });
        }
    }

    // 获取配置的简化方法
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
