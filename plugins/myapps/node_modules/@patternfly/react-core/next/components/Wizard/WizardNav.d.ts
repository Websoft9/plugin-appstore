import * as React from 'react';
export interface WizardNavProps {
    /** children should be WizardNavItem components */
    children?: any;
    /** Aria-label applied to the navigation element */
    'aria-label'?: string;
    /** Sets the aria-labelledby attribute on the navigation element */
    'aria-labelledby'?: string;
    /** Whether the navigation is expanded */
    isExpanded?: boolean;
    /** True to return the inner list without the wrapping navigation element */
    isInnerList?: boolean;
}
export declare const WizardNav: React.FunctionComponent<WizardNavProps>;
//# sourceMappingURL=WizardNav.d.ts.map