"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWizardContext = exports.WizardContextProvider = exports.WizardContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const WizardFooter_1 = require("./WizardFooter");
exports.WizardContext = react_1.default.createContext({});
const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, activeStepIndex, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [currentSteps, setCurrentSteps] = react_1.default.useState(initialSteps);
    const [currentFooter, setCurrentFooter] = react_1.default.useState(typeof initialFooter !== 'function' ? initialFooter : undefined);
    // Combined initial and current state steps
    const steps = react_1.default.useMemo(() => currentSteps.map((currentStepProps, index) => (Object.assign(Object.assign({}, currentStepProps), initialSteps[index]))), [initialSteps, currentSteps]);
    const activeStep = react_1.default.useMemo(() => (0, utils_1.getActiveStep)(steps, activeStepIndex), [activeStepIndex, steps]);
    const close = react_1.default.useCallback(() => onClose === null || onClose === void 0 ? void 0 : onClose(null), [onClose]);
    const goToNextStep = react_1.default.useCallback(() => onNext(null, steps), [onNext, steps]);
    const goToPrevStep = react_1.default.useCallback(() => onBack(null, steps), [onBack, steps]);
    const footer = react_1.default.useMemo(() => {
        const wizardFooter = (activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer) || currentFooter || initialFooter;
        if ((0, types_1.isCustomWizardFooter)(wizardFooter)) {
            const customFooter = wizardFooter;
            return typeof customFooter === 'function'
                ? customFooter(activeStep, goToNextStep, goToPrevStep, close)
                : customFooter;
        }
        return (react_1.default.createElement(WizardFooter_1.WizardFooter, Object.assign({ activeStep: activeStep, onNext: goToNextStep, onBack: goToPrevStep, onClose: close, isBackDisabled: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.index) === 1 || ((0, types_1.isWizardSubStep)(activeStep) && (activeStep === null || activeStep === void 0 ? void 0 : activeStep.index) === 2) }, wizardFooter)));
    }, [currentFooter, initialFooter, activeStep, goToNextStep, goToPrevStep, close]);
    const getStep = react_1.default.useCallback((stepId) => steps.find(step => step.id === stepId), [steps]);
    const setStep = react_1.default.useCallback((step) => setCurrentSteps(prevSteps => prevSteps.map(prevStep => {
        if (prevStep.id === step.id) {
            return Object.assign(Object.assign({}, prevStep), step);
        }
        return prevStep;
    })), []);
    return (react_1.default.createElement(exports.WizardContext.Provider, { value: {
            steps,
            activeStep,
            footer,
            close,
            getStep,
            setStep,
            goToNextStep,
            goToPrevStep,
            setFooter: setCurrentFooter,
            goToStepById: react_1.default.useCallback(id => goToStepById(steps, id), [goToStepById, steps]),
            goToStepByName: react_1.default.useCallback(name => goToStepByName(steps, name), [goToStepByName, steps]),
            goToStepByIndex: react_1.default.useCallback((index) => goToStepByIndex(null, steps, index), [
                goToStepByIndex,
                steps
            ])
        } }, children));
};
exports.WizardContextProvider = WizardContextProvider;
exports.WizardContextProvider.displayName = 'WizardContextProvider';
const useWizardContext = () => react_1.default.useContext(exports.WizardContext);
exports.useWizardContext = useWizardContext;
//# sourceMappingURL=WizardContext.js.map