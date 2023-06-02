"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const WizardContext_1 = require("./WizardContext");
const WizardToggle_1 = require("./WizardToggle");
const WizardNavInternal_1 = require("./WizardNavInternal");
const Wizard = (_a) => {
    var { children, footer, height, width, className, header, nav, startIndex = 1, isVisitRequired = false, isProgressive = false, onStepChange, onSave, onClose } = _a, wrapperProps = tslib_1.__rest(_a, ["children", "footer", "height", "width", "className", "header", "nav", "startIndex", "isVisitRequired", "isProgressive", "onStepChange", "onSave", "onClose"]);
    const [activeStepIndex, setActiveStepIndex] = react_1.default.useState(startIndex);
    const initialSteps = (0, utils_1.buildSteps)(children);
    const firstStepRef = react_1.default.useRef(initialSteps[startIndex - 1]);
    // When the startIndex maps to a parent step, focus on the first sub-step
    react_1.default.useEffect(() => {
        if ((0, types_1.isWizardParentStep)(firstStepRef.current)) {
            setActiveStepIndex(startIndex + 1);
        }
    }, [startIndex]);
    const goToNextStep = (event, steps = initialSteps) => {
        const newStep = steps.find(step => step.index > activeStepIndex && !step.isHidden && !step.isDisabled && !(0, types_1.isWizardParentStep)(step));
        if (activeStepIndex >= steps.length || !(newStep === null || newStep === void 0 ? void 0 : newStep.index)) {
            return onSave ? onSave(event) : onClose === null || onClose === void 0 ? void 0 : onClose(event);
        }
        const currStep = (0, types_1.isWizardParentStep)(steps[activeStepIndex]) ? steps[activeStepIndex + 1] : steps[activeStepIndex];
        const prevStep = steps[activeStepIndex - 1];
        setActiveStepIndex(newStep === null || newStep === void 0 ? void 0 : newStep.index);
        onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(event, currStep, prevStep, types_1.WizardStepChangeScope.Next);
    };
    const goToPrevStep = (event, steps = initialSteps) => {
        const newStep = [...steps]
            .reverse()
            .find((step) => step.index < activeStepIndex && !step.isHidden && !step.isDisabled && !(0, types_1.isWizardParentStep)(step));
        const currStep = (0, types_1.isWizardParentStep)(steps[activeStepIndex - 2])
            ? steps[activeStepIndex - 3]
            : steps[activeStepIndex - 2];
        const prevStep = steps[activeStepIndex - 1];
        setActiveStepIndex(newStep === null || newStep === void 0 ? void 0 : newStep.index);
        onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(event, currStep, prevStep, types_1.WizardStepChangeScope.Back);
    };
    const goToStepByIndex = (event, steps = initialSteps, index) => {
        const lastStepIndex = steps.length + 1;
        // Handle index when out of bounds or hidden
        if (index < 1) {
            index = 1;
        }
        else if (index > lastStepIndex) {
            index = lastStepIndex;
        }
        const currStep = steps[index - 1];
        const prevStep = steps[activeStepIndex - 1];
        setActiveStepIndex(index);
        onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(event, currStep, prevStep, types_1.WizardStepChangeScope.Nav);
    };
    const goToStepById = (steps = initialSteps, id) => {
        const step = steps.find(step => step.id === id);
        const stepIndex = step === null || step === void 0 ? void 0 : step.index;
        const lastStepIndex = steps.length + 1;
        if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isDisabled && !step.isHidden) {
            setActiveStepIndex(stepIndex);
        }
    };
    const goToStepByName = (steps = initialSteps, name) => {
        const step = steps.find(step => step.name === name);
        const stepIndex = step === null || step === void 0 ? void 0 : step.index;
        const lastStepIndex = steps.length + 1;
        if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isDisabled && !step.isHidden) {
            setActiveStepIndex(stepIndex);
        }
    };
    return (react_1.default.createElement(WizardContext_1.WizardContextProvider, { steps: initialSteps, activeStepIndex: activeStepIndex, footer: footer, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, goToStepById: goToStepById, goToStepByName: goToStepByName, goToStepByIndex: goToStepByIndex },
        react_1.default.createElement("div", Object.assign({ className: (0, react_styles_1.css)(wizard_1.default.wizard, className), style: Object.assign(Object.assign({}, (height ? { height } : {})), (width ? { width } : {})) }, wrapperProps),
            header,
            react_1.default.createElement(WizardInternal, { nav: nav, isVisitRequired: isVisitRequired, isProgressive: isProgressive }))));
};
exports.Wizard = Wizard;
const WizardInternal = ({ nav, isVisitRequired, isProgressive }) => {
    const { activeStep, steps, footer, goToStepByIndex } = (0, WizardContext_1.useWizardContext)();
    const [isNavExpanded, setIsNavExpanded] = react_1.default.useState(false);
    const wizardNav = react_1.default.useMemo(() => {
        if ((0, types_1.isCustomWizardNav)(nav)) {
            return typeof nav === 'function' ? nav(isNavExpanded, steps, activeStep, goToStepByIndex) : nav;
        }
        return (react_1.default.createElement(WizardNavInternal_1.WizardNavInternal, { nav: nav, isNavExpanded: isNavExpanded, isVisitRequired: isVisitRequired, isProgressive: isProgressive }));
    }, [activeStep, isVisitRequired, isProgressive, goToStepByIndex, isNavExpanded, nav, steps]);
    return (react_1.default.createElement(WizardToggle_1.WizardToggle, { nav: wizardNav, footer: footer, steps: steps, activeStep: activeStep, isNavExpanded: isNavExpanded, toggleNavExpanded: () => setIsNavExpanded(prevIsExpanded => !prevIsExpanded) }));
};
exports.Wizard.displayName = 'Wizard';
//# sourceMappingURL=Wizard.js.map