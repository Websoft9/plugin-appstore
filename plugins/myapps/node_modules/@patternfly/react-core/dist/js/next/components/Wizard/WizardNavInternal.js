"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardNavInternal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("./types");
const WizardContext_1 = require("./WizardContext");
const WizardNav_1 = require("./WizardNav");
const WizardNavItem_1 = require("./WizardNavItem");
const WizardNavInternal = ({ nav, isVisitRequired, isProgressive, isNavExpanded }) => {
    const { activeStep, steps, goToStepByIndex } = (0, WizardContext_1.useWizardContext)();
    const wizardNavProps = Object.assign({ isExpanded: isNavExpanded, 'aria-label': (nav === null || nav === void 0 ? void 0 : nav['aria-label']) || 'Wizard steps' }, ((nav === null || nav === void 0 ? void 0 : nav['aria-labelledby']) && {
        'aria-labelledby': nav['aria-labelledby']
    }));
    return (react_1.default.createElement(WizardNav_1.WizardNav, Object.assign({}, wizardNavProps), steps.map((step, stepIndex) => {
        var _a;
        const hasVisitedNextStep = steps.some(step => step.index > stepIndex + 1 && step.isVisited);
        const isStepDisabled = step.isDisabled || (isVisitRequired && !step.isVisited && !hasVisitedNextStep);
        const customStepNavItem = (0, types_1.isCustomWizardNavItem)(step.navItem) && (react_1.default.createElement(react_1.default.Fragment, { key: step.id }, typeof step.navItem === 'function' ? step.navItem(step, activeStep, steps, goToStepByIndex) : step.navItem));
        if ((0, types_1.isWizardParentStep)(step) && !step.isHidden) {
            let firstSubStepIndex;
            let hasActiveChild = false;
            const subNavItems = (_a = step.subStepIds) === null || _a === void 0 ? void 0 : _a.map((subStepId, subStepIndex) => {
                const subStep = steps.find(step => step.id === subStepId);
                const hasVisitedNextStep = steps.some(step => step.index > subStep.index && step.isVisited);
                const isSubStepDisabled = subStep.isDisabled || (isVisitRequired && !subStep.isVisited && !hasVisitedNextStep);
                const customSubStepNavItem = (0, types_1.isCustomWizardNavItem)(subStep.navItem) && (react_1.default.createElement(react_1.default.Fragment, { key: subStep.id }, typeof subStep.navItem === 'function'
                    ? subStep.navItem(subStep, activeStep, steps, goToStepByIndex)
                    : subStep.navItem));
                // Don't render the sub-step navigation item if the hidden property is enabled
                if (subStep.isHidden) {
                    return;
                }
                // Store the first sub-step index so that when its parent is clicked, the first sub-step is focused
                if (subStepIndex === 0) {
                    firstSubStepIndex = subStep.index;
                }
                // When a sub-step is active, use this flag to set the parent step as active (isCurrent)
                if ((activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === subStep.id) {
                    hasActiveChild = true;
                }
                if (!isProgressive || (isProgressive && subStep.index <= activeStep.index)) {
                    return (customSubStepNavItem || (react_1.default.createElement(WizardNavItem_1.WizardNavItem, Object.assign({ key: subStep.id, id: subStep.id, content: subStep.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === subStep.id, isDisabled: isSubStepDisabled, isVisited: subStep.isVisited, stepIndex: subStep.index, onClick: () => goToStepByIndex(subStep.index), status: subStep.status }, subStep.navItem))));
                }
            });
            const hasEnabledChildren = react_1.default.Children.toArray(subNavItems).some(child => react_1.default.isValidElement(child) && !child.props.isDisabled);
            if (!isProgressive || (isProgressive && step.index <= activeStep.index)) {
                return (customStepNavItem || (react_1.default.createElement(WizardNavItem_1.WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isExpandable: step.isExpandable, isCurrent: hasActiveChild, isDisabled: !hasEnabledChildren, isVisited: step.isVisited, stepIndex: firstSubStepIndex, onClick: () => goToStepByIndex(firstSubStepIndex), status: step.status }, step.navItem),
                    react_1.default.createElement(WizardNav_1.WizardNav, Object.assign({}, wizardNavProps, { isInnerList: true }), subNavItems))));
            }
        }
        if ((0, types_1.isWizardBasicStep)(step) &&
            !step.isHidden &&
            (!isProgressive || (isProgressive && step.index <= activeStep.index))) {
            return (customStepNavItem || (react_1.default.createElement(WizardNavItem_1.WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === step.id, isDisabled: isStepDisabled, isVisited: step.isVisited, stepIndex: step.index, onClick: () => goToStepByIndex(step.index), status: step.status }, step.navItem))));
        }
    })));
};
exports.WizardNavInternal = WizardNavInternal;
//# sourceMappingURL=WizardNavInternal.js.map