import * as React from 'react';
export interface LoginMainFooterLinksItemProps extends React.HTMLProps<HTMLLIElement> {
    /** Content rendered inside the footer link item */
    children?: React.ReactNode;
    /** HREF for footer link item */
    href?: string;
    /** Target for footer link item */
    target?: string;
    /** Additional classes added to the footer link item  */
    className?: string;
    /** Component used to render the footer link item */
    linkComponent?: React.ReactNode;
    /** Props for the LinkComponent */
    linkComponentProps?: any;
}
export declare const LoginMainFooterLinksItem: React.FunctionComponent<LoginMainFooterLinksItemProps>;
//# sourceMappingURL=LoginMainFooterLinksItem.d.ts.map