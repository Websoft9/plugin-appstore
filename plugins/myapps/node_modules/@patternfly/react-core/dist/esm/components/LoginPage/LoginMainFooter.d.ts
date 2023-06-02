import * as React from 'react';
export interface LoginMainFooterProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the login main footer */
    className?: string;
    /** Content rendered inside the login main footer */
    children?: React.ReactNode;
    /** Content rendered inside the login main footer as social media links* */
    socialMediaLoginContent?: React.ReactNode;
    /** Content rendered inside of login main footer band to display a sign up for account message */
    signUpForAccountMessage?: React.ReactNode;
    /** Content rendered inside of login main footer band do display a forgot credentials link* */
    forgotCredentials?: React.ReactNode;
}
export declare const LoginMainFooter: React.FunctionComponent<LoginMainFooterProps>;
//# sourceMappingURL=LoginMainFooter.d.ts.map