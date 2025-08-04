const { override, addWebpackExternals } = require('customize-cra');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = override(
    addWebpackExternals({ "cockpit": "cockpit" }),
    (config, env) => {
        config.devtool = false;
        // 添加 CompressionPlugin
        config.plugins.push(
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css)$/,
                threshold: 10240,
                minRatio: 0.8,
            })
        );
        return config;
    }
);