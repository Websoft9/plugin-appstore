"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardNav = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const react_styles_1 = require("@patternfly/react-styles");
const WizardNav = ({ children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isExpanded = false, isInnerList = false }) => {
    if (isInnerList) {
        return React.createElement("ol", { className: (0, react_styles_1.css)(wizard_1.default.wizardNavList) }, children);
    }
    return (React.createElement("nav", { className: (0, react_styles_1.css)(wizard_1.default.wizardNav, isExpanded && wizard_1.default.modifiers.expanded), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy },
        React.createElement("ol", { className: (0, react_styles_1.css)(wizard_1.default.wizardNavList) }, children)));
};
exports.WizardNav = WizardNav;
exports.WizardNav.displayName = 'WizardNav';
//# sourceMappingURL=WizardNav.js.map