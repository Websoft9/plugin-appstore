import { __rest } from "tslib";
import React from 'react';
import { WizardStep } from './WizardStep';
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardStepType[]
 */
export const buildSteps = (children) => React.Children.toArray(children).reduce((acc, child, index) => {
    if (isWizardStep(child)) {
        const { props: childProps } = child;
        const { steps: childStepComponents, id } = childProps;
        const stepIndex = acc.length + 1;
        const subSteps = [];
        acc.push(Object.assign(Object.assign(Object.assign({ index: stepIndex, component: child }, (index === 0 && !(childStepComponents === null || childStepComponents === void 0 ? void 0 : childStepComponents.length) && { isVisited: true })), (childStepComponents && {
            subStepIds: childStepComponents === null || childStepComponents === void 0 ? void 0 : childStepComponents.map((childStepComponent, subStepIndex) => {
                subSteps.push(Object.assign(Object.assign({ index: stepIndex + subStepIndex + 1, component: childStepComponent, parentId: id }, (index === 0 && subStepIndex === 0 && { isVisited: true })), normalizeStepProps(childStepComponent.props)));
                return childStepComponent.props.id;
            })
        })), normalizeStepProps(childProps)), ...subSteps);
    }
    else {
        throw new Error('Wizard only accepts children of type WizardStep.');
    }
    return acc;
}, []);
export function isWizardStep(child) {
    return React.isValidElement(child) && child.type === WizardStep;
}
// Omit "children" and "steps" when building steps for the Wizard's context
export const normalizeStepProps = (_a) => {
    var { children: _children, steps: _steps } = _a, controlStep = __rest(_a, ["children", "steps"]);
    return controlStep;
};
export const getActiveStep = (steps, activeStepIndex) => steps.find(step => step.index === activeStepIndex);
//# sourceMappingURL=utils.js.map