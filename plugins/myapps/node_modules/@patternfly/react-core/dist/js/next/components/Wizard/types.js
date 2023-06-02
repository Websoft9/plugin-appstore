"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWizardParentStep = exports.isWizardSubStep = exports.isWizardBasicStep = exports.isCustomWizardFooter = exports.isCustomWizardNavItem = exports.isCustomWizardNav = exports.WizardStepChangeScope = exports.WizardNavItemStatus = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
var WizardNavItemStatus;
(function (WizardNavItemStatus) {
    WizardNavItemStatus["Default"] = "default";
    WizardNavItemStatus["Error"] = "error";
})(WizardNavItemStatus = exports.WizardNavItemStatus || (exports.WizardNavItemStatus = {}));
var WizardStepChangeScope;
(function (WizardStepChangeScope) {
    WizardStepChangeScope["Next"] = "next";
    WizardStepChangeScope["Back"] = "back";
    WizardStepChangeScope["Nav"] = "nav";
})(WizardStepChangeScope = exports.WizardStepChangeScope || (exports.WizardStepChangeScope = {}));
function isCustomWizardNav(nav) {
    return typeof nav === 'function' || react_1.default.isValidElement(nav);
}
exports.isCustomWizardNav = isCustomWizardNav;
function isCustomWizardNavItem(navItem) {
    return typeof navItem === 'function' || react_1.default.isValidElement(navItem);
}
exports.isCustomWizardNavItem = isCustomWizardNavItem;
function isCustomWizardFooter(footer) {
    return typeof footer === 'function' || react_1.default.isValidElement(footer);
}
exports.isCustomWizardFooter = isCustomWizardFooter;
function isWizardBasicStep(step) {
    return (step === null || step === void 0 ? void 0 : step.subStepIds) === undefined && !isWizardSubStep(step);
}
exports.isWizardBasicStep = isWizardBasicStep;
function isWizardSubStep(step) {
    return (step === null || step === void 0 ? void 0 : step.parentId) !== undefined;
}
exports.isWizardSubStep = isWizardSubStep;
function isWizardParentStep(step) {
    return (step === null || step === void 0 ? void 0 : step.subStepIds) !== undefined;
}
exports.isWizardParentStep = isWizardParentStep;
//# sourceMappingURL=types.js.map