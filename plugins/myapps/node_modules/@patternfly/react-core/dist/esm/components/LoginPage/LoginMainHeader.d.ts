import * as React from 'react';
export interface LoginMainHeaderProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the login main header */
    children?: React.ReactNode;
    /** Additional classes added to the login main header */
    className?: string;
    /** Title for the login main header */
    title?: string;
    /** Subtitle that contains the text, URL, and URL text for the login main header */
    subtitle?: string;
    /** Actions that render for the login main header */
    headerUtilities?: React.ReactNode;
}
export declare const LoginMainHeader: React.FunctionComponent<LoginMainHeaderProps>;
//# sourceMappingURL=LoginMainHeader.d.ts.map