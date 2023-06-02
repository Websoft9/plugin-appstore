import { __rest } from "tslib";
import React from 'react';
import { isWizardParentStep } from './types';
import { useWizardContext } from './WizardContext';
export const WizardStep = (_a) => {
    var { children, steps: _subSteps } = _a, props = __rest(_a, ["children", "steps"]);
    const { activeStep, setStep } = useWizardContext();
    const { id, name, body, isDisabled, isHidden, navItem, footer, status } = props;
    const isParentStep = isWizardParentStep(activeStep);
    // Update step in context when props change or when the step is active has yet to be marked as visited.
    React.useEffect(() => {
        setStep(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ id,
            name }, (body && { body })), (isDisabled && { isDisabled })), (isHidden && { isHidden })), (navItem && { navItem })), (footer && { footer })), (status && { status })), (!isParentStep && id === (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) && !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.isVisited) && { isVisited: true })));
    }, [
        body,
        footer,
        id,
        isDisabled,
        isHidden,
        name,
        navItem,
        status,
        isParentStep,
        setStep,
        activeStep === null || activeStep === void 0 ? void 0 : activeStep.id,
        activeStep === null || activeStep === void 0 ? void 0 : activeStep.isVisited
    ]);
    return React.createElement(React.Fragment, null, children);
};
WizardStep.displayName = 'WizardStep';
//# sourceMappingURL=WizardStep.js.map