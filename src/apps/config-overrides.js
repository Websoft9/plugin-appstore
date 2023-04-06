const CockpitRsyncPlugin = require("./src/lib/cockpit-rsync-plugin");
const { useCracoPlugin } = require("craco-plugin-scoped-css");

const {
    override,
    addWebpackPlugin,
    addWebpackExternals,
} = require('customize-cra')

module.exports = override(
    addWebpackExternals({
        "cockpit": "cockpit"
    }),
    addWebpackPlugin(new CockpitRsyncPlugin()),
    useCracoPlugin()
)