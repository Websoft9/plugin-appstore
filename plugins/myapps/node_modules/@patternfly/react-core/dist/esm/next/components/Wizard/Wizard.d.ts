import React from 'react';
import { WizardStepType, WizardFooterType, WizardNavType, WizardStepChangeScope } from './types';
/**
 * Wrapper for all steps and hosts state, including navigation helpers, within context.
 * The WizardContext provided by default gives any child of wizard access to those resources.
 */
export interface WizardProps extends React.HTMLProps<HTMLDivElement> {
    /** Step components */
    children: React.ReactNode | React.ReactNode[];
    /** Wizard header */
    header?: React.ReactNode;
    /** Wizard footer */
    footer?: WizardFooterType;
    /** Wizard navigation */
    nav?: WizardNavType;
    /** The initial index the wizard is to start on (1 or higher). Defaults to 1. */
    startIndex?: number;
    /** Additional classes spread to the wizard */
    className?: string;
    /** Custom width of the wizard */
    width?: number | string;
    /** Custom height of the wizard */
    height?: number | string;
    /** Disables steps that haven't been visited. Defaults to false. */
    isVisitRequired?: boolean;
    /** Progressively shows steps, where all steps following the active step are hidden. Defaults to false. */
    isProgressive?: boolean;
    /** Callback function when navigating between steps */
    onStepChange?: (event: React.MouseEvent<HTMLButtonElement>, currentStep: WizardStepType, prevStep: WizardStepType, scope: WizardStepChangeScope) => void | Promise<void>;
    /** Callback function to save at the end of the wizard, if not specified uses onClose */
    onSave?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    /** Callback function to close the wizard */
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Wizard: {
    ({ children, footer, height, width, className, header, nav, startIndex, isVisitRequired, isProgressive, onStepChange, onSave, onClose, ...wrapperProps }: WizardProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Wizard.d.ts.map