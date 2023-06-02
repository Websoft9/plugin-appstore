import React from 'react';
import { WizardNavItemType } from './types';
import { WizardBodyProps } from './WizardBody';
import { WizardFooterProps } from './WizardFooter';
/**
 * The primary child component for Wizard. Step props are used for the list of steps managed in context.
 */
export interface WizardStepProps {
    /** Name of the step's navigation item */
    name: React.ReactNode;
    /** Unique identifier */
    id: string | number;
    /** Optional for when the step is used as a parent to sub-steps */
    children?: React.ReactNode | undefined;
    /** Props for WizardBody that wraps content by default. Can be set to null for exclusion of WizardBody. */
    body?: Omit<Omit<WizardBodyProps, 'children'>, 'children'> | null;
    /** Optional list of sub-steps */
    steps?: React.ReactElement<WizardStepProps>[];
    /** Flag to disable the step's navigation item */
    isDisabled?: boolean;
    /** Flag to determine whether the step is hidden */
    isHidden?: boolean;
    /** Replaces the step's navigation item or its properties. */
    navItem?: WizardNavItemType;
    /** Replaces the step's footer. The step's footer takes precedance over the wizard's footer. */
    footer?: React.ReactElement | Partial<WizardFooterProps>;
    /** Used to determine icon next to the step's navigation item */
    status?: 'default' | 'error';
    /** Flag to determine whether parent steps can expand or not. Defaults to false. */
    isExpandable?: boolean;
}
export declare const WizardStep: {
    ({ children, steps: _subSteps, ...props }: WizardStepProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=WizardStep.d.ts.map