"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Menu_1 = require("../../../components/Menu");
const DropdownGroup = (_a) => {
    var { children, className, label, labelHeadingLevel = 'h1' } = _a, props = tslib_1.__rest(_a, ["children", "className", "label", "labelHeadingLevel"]);
    return (react_1.default.createElement(Menu_1.MenuGroup, Object.assign({ className: (0, react_styles_1.css)(className), label: label, labelHeadingLevel: labelHeadingLevel }, props), children));
};
exports.DropdownGroup = DropdownGroup;
exports.DropdownGroup.displayName = 'DropdownGroup';
//# sourceMappingURL=DropdownGroup.js.map