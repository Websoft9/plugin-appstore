import * as React from 'react';
import { BackgroundImageSrcMap } from '../BackgroundImage';
import { ListVariant } from '../List';
export interface LoginPageProps extends React.HTMLProps<HTMLDivElement> {
    /** Anything that can be rendered inside of the login page (e.g. <LoginPageForm>) */
    children?: React.ReactNode;
    /** Additional classes added to the login page */
    className?: string;
    /** Attribute that specifies the URL of the brand image for the login page */
    brandImgSrc?: string;
    /** Attribute that specifies the alt text of the brand image for the login page */
    brandImgAlt?: string;
    /** Attribute that specifies the URL of the background image for the login page */
    backgroundImgSrc?: string | BackgroundImageSrcMap;
    /** Attribute that specifies the alt text of the background image for the login page */
    backgroundImgAlt?: string;
    /** Content rendered inside of the text component of the login page */
    textContent?: string;
    /** Items rendered inside of the footer list component of the login page */
    footerListItems?: React.ReactNode;
    /** Adds list variant styles for the footer list component of the login page. The only current value is'inline' */
    footerListVariants?: ListVariant.inline;
    /** Title for the login main body header of the login page */
    loginTitle: string;
    /** Subtitle for the login main body header of the login page */
    loginSubtitle?: string;
    /** Header utilities for the login main body header of the login page */
    headerUtilities?: React.ReactNode;
    /** Content rendered inside of login main footer band to display a sign up for account message */
    signUpForAccountMessage?: React.ReactNode;
    /** Content rendered inside of login main footer band to display a forgot credentials link. */
    forgotCredentials?: React.ReactNode;
    /** Content rendered inside of social media login footer section */
    socialMediaLoginContent?: React.ReactNode;
}
export declare const LoginPage: React.FunctionComponent<LoginPageProps>;
//# sourceMappingURL=LoginPage.d.ts.map