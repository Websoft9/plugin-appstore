"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardBody = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const react_styles_1 = require("@patternfly/react-styles");
const WizardBody = ({ children, hasNoPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, component: WrapperComponent = 'div' }) => (react_1.default.createElement(WrapperComponent, { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: (0, react_styles_1.css)(wizard_1.default.wizardMain) },
    react_1.default.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardMainBody, hasNoPadding && wizard_1.default.modifiers.noPadding) }, children)));
exports.WizardBody = WizardBody;
exports.WizardBody.displayName = 'WizardBody';
//# sourceMappingURL=WizardBody.js.map