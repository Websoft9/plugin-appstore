import * as React from 'react';
export interface FormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'ref'> {
    /** Anything that can be rendered as Form content. */
    children?: React.ReactNode;
    /** Additional classes added to the Form. */
    className?: string;
    /** Sets the Form to horizontal. */
    isHorizontal?: boolean;
    /** Limits the max-width of the form. */
    isWidthLimited?: boolean;
    /** Sets a custom max-width for the form. */
    maxWidth?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
}
export declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<any>>;
//# sourceMappingURL=Form.d.ts.map