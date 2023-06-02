import React from 'react';
import { WizardStepType, WizardFooterType } from './types';
import { WizardFooterProps } from './WizardFooter';
export interface WizardContextProps {
    /** List of steps */
    steps: WizardStepType[];
    /** Current step */
    activeStep: WizardStepType;
    /** Footer element */
    footer: React.ReactElement;
    /** Close the wizard */
    close: () => void;
    /** Navigate to the next step */
    goToNextStep: () => void | Promise<void>;
    /** Navigate to the previous step */
    goToPrevStep: () => void | Promise<void>;
    /** Navigate to step by ID */
    goToStepById: (id: number | string) => void;
    /** Navigate to step by name */
    goToStepByName: (name: string) => void;
    /** Navigate to step by index */
    goToStepByIndex: (index: number) => void;
    /** Update the footer with any react element */
    setFooter: (footer: React.ReactElement | Partial<WizardFooterProps>) => void;
    /** Get step by ID */
    getStep: (stepId: number | string) => WizardStepType;
    /** Set step by ID */
    setStep: (step: Pick<WizardStepType, 'id'> & Partial<WizardStepType>) => void;
}
export declare const WizardContext: React.Context<WizardContextProps>;
export interface WizardContextProviderProps {
    steps: WizardStepType[];
    activeStepIndex: number;
    footer: WizardFooterType;
    children: React.ReactElement;
    onNext(event: React.MouseEvent<HTMLButtonElement>, steps: WizardStepType[]): void;
    onBack(event: React.MouseEvent<HTMLButtonElement>, steps: WizardStepType[]): void;
    onClose?(event: React.MouseEvent<HTMLButtonElement>): void;
    goToStepById(steps: WizardStepType[], id: number | string): void;
    goToStepByName(steps: WizardStepType[], name: string): void;
    goToStepByIndex(event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, steps: WizardStepType[], index: number): void;
}
export declare const WizardContextProvider: React.FunctionComponent<WizardContextProviderProps>;
export declare const useWizardContext: () => WizardContextProps;
//# sourceMappingURL=WizardContext.d.ts.map