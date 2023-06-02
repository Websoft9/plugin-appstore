import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { Button, ButtonVariant } from '../../../components/Button';
import { isCustomWizardFooter } from './types';
export const WizardFooterWrapper = ({ children }) => (React.createElement("footer", { className: css(styles.wizardFooter) }, children));
export const WizardFooter = (_a) => {
    var { activeStep } = _a, internalProps = __rest(_a, ["activeStep"]);
    const activeStepFooter = !isCustomWizardFooter(activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer) && (activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer);
    return React.createElement(InternalWizardFooter, Object.assign({}, internalProps, activeStepFooter));
};
const InternalWizardFooter = ({ onNext, onBack, onClose, isNextDisabled, isBackDisabled, isBackHidden, isCancelHidden, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel' }) => (React.createElement(WizardFooterWrapper, null,
    React.createElement(Button, { variant: ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: isNextDisabled }, nextButtonText),
    !isBackHidden && (React.createElement(Button, { variant: ButtonVariant.secondary, onClick: onBack, isDisabled: isBackDisabled }, backButtonText)),
    !isCancelHidden && (React.createElement("div", { className: styles.wizardFooterCancel },
        React.createElement(Button, { variant: ButtonVariant.link, onClick: onClose }, cancelButtonText)))));
WizardFooterWrapper.displayName = 'WizardFooterWrapper';
WizardFooter.displayName = 'WizardFooter';
//# sourceMappingURL=WizardFooter.js.map