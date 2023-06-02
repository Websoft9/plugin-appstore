"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Menu_1 = require("../../../components/Menu");
const SelectGroup = (_a) => {
    var { children, className, label } = _a, props = tslib_1.__rest(_a, ["children", "className", "label"]);
    return (react_1.default.createElement(Menu_1.MenuGroup, Object.assign({ className: (0, react_styles_1.css)(className), label: label }, props), children));
};
exports.SelectGroup = SelectGroup;
exports.SelectGroup.displayName = 'SelectGroup';
//# sourceMappingURL=SelectGroup.js.map