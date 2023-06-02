"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContextConsumer = exports.PageContextProvider = exports.PageContext = exports.pageContextDefaults = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const util_1 = require("../../helpers/util");
exports.pageContextDefaults = {
    isManagedSidebar: false,
    isNavOpen: false,
    onNavToggle: () => null,
    width: null,
    height: null,
    getBreakpoint: util_1.getBreakpoint,
    getVerticalBreakpoint: util_1.getVerticalBreakpoint
};
exports.PageContext = React.createContext(exports.pageContextDefaults);
exports.PageContextProvider = exports.PageContext.Provider;
exports.PageContextConsumer = exports.PageContext.Consumer;
//# sourceMappingURL=PageContext.js.map