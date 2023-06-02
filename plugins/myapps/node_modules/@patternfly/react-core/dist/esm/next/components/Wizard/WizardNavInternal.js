import React from 'react';
import { isCustomWizardNavItem, isWizardBasicStep, isWizardParentStep } from './types';
import { useWizardContext } from './WizardContext';
import { WizardNav } from './WizardNav';
import { WizardNavItem } from './WizardNavItem';
export const WizardNavInternal = ({ nav, isVisitRequired, isProgressive, isNavExpanded }) => {
    const { activeStep, steps, goToStepByIndex } = useWizardContext();
    const wizardNavProps = Object.assign({ isExpanded: isNavExpanded, 'aria-label': (nav === null || nav === void 0 ? void 0 : nav['aria-label']) || 'Wizard steps' }, ((nav === null || nav === void 0 ? void 0 : nav['aria-labelledby']) && {
        'aria-labelledby': nav['aria-labelledby']
    }));
    return (React.createElement(WizardNav, Object.assign({}, wizardNavProps), steps.map((step, stepIndex) => {
        var _a;
        const hasVisitedNextStep = steps.some(step => step.index > stepIndex + 1 && step.isVisited);
        const isStepDisabled = step.isDisabled || (isVisitRequired && !step.isVisited && !hasVisitedNextStep);
        const customStepNavItem = isCustomWizardNavItem(step.navItem) && (React.createElement(React.Fragment, { key: step.id }, typeof step.navItem === 'function' ? step.navItem(step, activeStep, steps, goToStepByIndex) : step.navItem));
        if (isWizardParentStep(step) && !step.isHidden) {
            let firstSubStepIndex;
            let hasActiveChild = false;
            const subNavItems = (_a = step.subStepIds) === null || _a === void 0 ? void 0 : _a.map((subStepId, subStepIndex) => {
                const subStep = steps.find(step => step.id === subStepId);
                const hasVisitedNextStep = steps.some(step => step.index > subStep.index && step.isVisited);
                const isSubStepDisabled = subStep.isDisabled || (isVisitRequired && !subStep.isVisited && !hasVisitedNextStep);
                const customSubStepNavItem = isCustomWizardNavItem(subStep.navItem) && (React.createElement(React.Fragment, { key: subStep.id }, typeof subStep.navItem === 'function'
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
                    return (customSubStepNavItem || (React.createElement(WizardNavItem, Object.assign({ key: subStep.id, id: subStep.id, content: subStep.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === subStep.id, isDisabled: isSubStepDisabled, isVisited: subStep.isVisited, stepIndex: subStep.index, onClick: () => goToStepByIndex(subStep.index), status: subStep.status }, subStep.navItem))));
                }
            });
            const hasEnabledChildren = React.Children.toArray(subNavItems).some(child => React.isValidElement(child) && !child.props.isDisabled);
            if (!isProgressive || (isProgressive && step.index <= activeStep.index)) {
                return (customStepNavItem || (React.createElement(WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isExpandable: step.isExpandable, isCurrent: hasActiveChild, isDisabled: !hasEnabledChildren, isVisited: step.isVisited, stepIndex: firstSubStepIndex, onClick: () => goToStepByIndex(firstSubStepIndex), status: step.status }, step.navItem),
                    React.createElement(WizardNav, Object.assign({}, wizardNavProps, { isInnerList: true }), subNavItems))));
            }
        }
        if (isWizardBasicStep(step) &&
            !step.isHidden &&
            (!isProgressive || (isProgressive && step.index <= activeStep.index))) {
            return (customStepNavItem || (React.createElement(WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === step.id, isDisabled: isStepDisabled, isVisited: step.isVisited, stepIndex: step.index, onClick: () => goToStepByIndex(step.index), status: step.status }, step.navItem))));
        }
    })));
};
//# sourceMappingURL=WizardNavInternal.js.map