import React from 'react';
import { WizardStepType } from './types';
/**
 * Hosts the standard structure of a footer with ties to the active step so that text for buttons can vary from step to step.
 */
export interface WizardFooterProps {
    /** The active step */
    activeStep: WizardStepType;
    /** Next button callback */
    onNext: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    /** Back button callback */
    onBack: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    /** Cancel link callback */
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Custom text for the Next button. The current step's nextButtonText takes precedence. */
    nextButtonText?: React.ReactNode;
    /** Custom text for the Back button */
    backButtonText?: React.ReactNode;
    /** Custom text for the Cancel link */
    cancelButtonText?: React.ReactNode;
    /** Flag to disable the next button */
    isNextDisabled?: boolean;
    /** Flag to disable the back button */
    isBackDisabled?: boolean;
    /** True to hide the Back button */
    isBackHidden?: boolean;
    /** True to hide the Cancel button */
    isCancelHidden?: boolean;
}
/**
 * Applies default wizard footer styling any number of child elements.
 */
interface WizardFooterWrapperProps {
    children: React.ReactNode;
}
export declare const WizardFooterWrapper: {
    ({ children }: WizardFooterWrapperProps): JSX.Element;
    displayName: string;
};
export declare const WizardFooter: {
    ({ activeStep, ...internalProps }: WizardFooterProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=WizardFooter.d.ts.map