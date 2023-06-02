import React from 'react';
import { isCustomWizardFooter, isWizardSubStep } from './types';
import { getActiveStep } from './utils';
import { WizardFooter } from './WizardFooter';
export const WizardContext = React.createContext({});
export const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, activeStepIndex, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [currentSteps, setCurrentSteps] = React.useState(initialSteps);
    const [currentFooter, setCurrentFooter] = React.useState(typeof initialFooter !== 'function' ? initialFooter : undefined);
    // Combined initial and current state steps
    const steps = React.useMemo(() => currentSteps.map((currentStepProps, index) => (Object.assign(Object.assign({}, currentStepProps), initialSteps[index]))), [initialSteps, currentSteps]);
    const activeStep = React.useMemo(() => getActiveStep(steps, activeStepIndex), [activeStepIndex, steps]);
    const close = React.useCallback(() => onClose === null || onClose === void 0 ? void 0 : onClose(null), [onClose]);
    const goToNextStep = React.useCallback(() => onNext(null, steps), [onNext, steps]);
    const goToPrevStep = React.useCallback(() => onBack(null, steps), [onBack, steps]);
    const footer = React.useMemo(() => {
        const wizardFooter = (activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer) || currentFooter || initialFooter;
        if (isCustomWizardFooter(wizardFooter)) {
            const customFooter = wizardFooter;
            return typeof customFooter === 'function'
                ? customFooter(activeStep, goToNextStep, goToPrevStep, close)
                : customFooter;
        }
        return (React.createElement(WizardFooter, Object.assign({ activeStep: activeStep, onNext: goToNextStep, onBack: goToPrevStep, onClose: close, isBackDisabled: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.index) === 1 || (isWizardSubStep(activeStep) && (activeStep === null || activeStep === void 0 ? void 0 : activeStep.index) === 2) }, wizardFooter)));
    }, [currentFooter, initialFooter, activeStep, goToNextStep, goToPrevStep, close]);
    const getStep = React.useCallback((stepId) => steps.find(step => step.id === stepId), [steps]);
    const setStep = React.useCallback((step) => setCurrentSteps(prevSteps => prevSteps.map(prevStep => {
        if (prevStep.id === step.id) {
            return Object.assign(Object.assign({}, prevStep), step);
        }
        return prevStep;
    })), []);
    return (React.createElement(WizardContext.Provider, { value: {
            steps,
            activeStep,
            footer,
            close,
            getStep,
            setStep,
            goToNextStep,
            goToPrevStep,
            setFooter: setCurrentFooter,
            goToStepById: React.useCallback(id => goToStepById(steps, id), [goToStepById, steps]),
            goToStepByName: React.useCallback(name => goToStepByName(steps, name), [goToStepByName, steps]),
            goToStepByIndex: React.useCallback((index) => goToStepByIndex(null, steps, index), [
                goToStepByIndex,
                steps
            ])
        } }, children));
};
WizardContextProvider.displayName = 'WizardContextProvider';
export const useWizardContext = () => React.useContext(WizardContext);
//# sourceMappingURL=WizardContext.js.map