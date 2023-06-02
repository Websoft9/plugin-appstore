"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardFooter = exports.WizardFooterWrapper = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const Button_1 = require("../../../components/Button");
const types_1 = require("./types");
const WizardFooterWrapper = ({ children }) => (react_1.default.createElement("footer", { className: (0, react_styles_1.css)(wizard_1.default.wizardFooter) }, children));
exports.WizardFooterWrapper = WizardFooterWrapper;
const WizardFooter = (_a) => {
    var { activeStep } = _a, internalProps = tslib_1.__rest(_a, ["activeStep"]);
    const activeStepFooter = !(0, types_1.isCustomWizardFooter)(activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer) && (activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer);
    return react_1.default.createElement(InternalWizardFooter, Object.assign({}, internalProps, activeStepFooter));
};
exports.WizardFooter = WizardFooter;
const InternalWizardFooter = ({ onNext, onBack, onClose, isNextDisabled, isBackDisabled, isBackHidden, isCancelHidden, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel' }) => (react_1.default.createElement(exports.WizardFooterWrapper, null,
    react_1.default.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: isNextDisabled }, nextButtonText),
    !isBackHidden && (react_1.default.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.secondary, onClick: onBack, isDisabled: isBackDisabled }, backButtonText)),
    !isCancelHidden && (react_1.default.createElement("div", { className: wizard_1.default.wizardFooterCancel },
        react_1.default.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.link, onClick: onClose }, cancelButtonText)))));
exports.WizardFooterWrapper.displayName = 'WizardFooterWrapper';
exports.WizardFooter.displayName = 'WizardFooter';
//# sourceMappingURL=WizardFooter.js.map