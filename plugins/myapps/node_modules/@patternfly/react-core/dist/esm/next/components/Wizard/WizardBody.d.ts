import React from 'react';
/**
 * Used as a wrapper for WizardStep content, where the wrapping element is customizable.
 */
export interface WizardBodyProps {
    children: React.ReactNode | React.ReactNode[];
    /** Set to true to remove the default body padding */
    hasNoPadding?: boolean;
    /** An aria-label to use for the wrapper element */
    'aria-label'?: string;
    /** Sets the aria-labelledby attribute for the wrapper element */
    'aria-labelledby'?: string;
    /** Component used as the wrapping content container */
    component?: React.ElementType;
}
export declare const WizardBody: {
    ({ children, hasNoPadding, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, component: WrapperComponent }: WizardBodyProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=WizardBody.d.ts.map