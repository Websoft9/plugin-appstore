"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOption = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Menu_1 = require("../../../components/Menu");
const SelectOption = (_a) => {
    var { children, className } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (react_1.default.createElement(Menu_1.MenuItem, Object.assign({ className: (0, react_styles_1.css)(className) }, props), children));
};
exports.SelectOption = SelectOption;
exports.SelectOption.displayName = 'SelectOption';
//# sourceMappingURL=SelectOption.js.map