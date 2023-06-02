"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("./types");
const WizardContext_1 = require("./WizardContext");
const WizardStep = (_a) => {
    var { children, steps: _subSteps } = _a, props = tslib_1.__rest(_a, ["children", "steps"]);
    const { activeStep, setStep } = (0, WizardContext_1.useWizardContext)();
    const { id, name, body, isDisabled, isHidden, navItem, footer, status } = props;
    const isParentStep = (0, types_1.isWizardParentStep)(activeStep);
    // Update step in context when props change or when the step is active has yet to be marked as visited.
    react_1.default.useEffect(() => {
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
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.WizardStep = WizardStep;
exports.WizardStep.displayName = 'WizardStep';
//# sourceMappingURL=WizardStep.js.map