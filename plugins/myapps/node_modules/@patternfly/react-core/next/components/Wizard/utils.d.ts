import React from 'react';
import { WizardStepType } from './types';
import { WizardStepProps } from './WizardStep';
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardStepType[]
 */
export declare const buildSteps: (children: React.ReactNode | React.ReactNode[]) => WizardStepType[];
export declare function isWizardStep(child: any | React.ReactElement<WizardStepProps>): child is React.ReactElement<WizardStepProps>;
export declare const normalizeStepProps: ({ children: _children, steps: _steps, ...controlStep }: WizardStepProps) => Omit<WizardStepType, 'index'>;
export declare const getActiveStep: (steps: WizardStepType[], activeStepIndex: number) => WizardStepType;
//# sourceMappingURL=utils.d.ts.map