/// <reference types="react" />
import { WizardProps } from './Wizard';
import { WizardNavProps } from './WizardNav';
/**
 * Hosts deafult wizard navigation logic by utilizing the wizard's context and WizardNav/WizardNavItem.
 * This component is not exposed to consumers.
 */
interface WizardNavInternalProps extends Pick<WizardProps, 'isVisitRequired' | 'isProgressive'> {
    nav: Partial<WizardNavProps>;
    isNavExpanded: boolean;
}
export declare const WizardNavInternal: ({ nav, isVisitRequired, isProgressive, isNavExpanded }: WizardNavInternalProps) => JSX.Element;
export {};
//# sourceMappingURL=WizardNavInternal.d.ts.map