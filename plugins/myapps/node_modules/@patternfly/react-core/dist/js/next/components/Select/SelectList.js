"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectList = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Menu_1 = require("../../../components/Menu");
const SelectList = (_a) => {
    var { children, className, isAriaMultiselectable = false } = _a, props = tslib_1.__rest(_a, ["children", "className", "isAriaMultiselectable"]);
    return (react_1.default.createElement(Menu_1.MenuList, Object.assign({ isAriaMultiselectable: isAriaMultiselectable, className: (0, react_styles_1.css)(className) }, props), children));
};
exports.SelectList = SelectList;
exports.SelectList.displayName = 'SelectList';
//# sourceMappingURL=SelectList.js.map