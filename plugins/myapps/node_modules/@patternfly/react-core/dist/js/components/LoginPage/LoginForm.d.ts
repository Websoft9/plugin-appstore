import * as React from 'react';
export interface LoginFormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'ref'> {
    /** Flag to indicate if the first dropdown item should not gain initial focus */
    noAutoFocus?: boolean;
    /** Additional classes added to the login main body's form */
    className?: string;
    /** Flag indicating the helper text is visible * */
    showHelperText?: boolean;
    /** Content displayed in the helper text component * */
    helperText?: React.ReactNode;
    /** Icon displayed to the left in the helper text */
    helperTextIcon?: React.ReactNode;
    /** Label for the username input field */
    usernameLabel?: string;
    /** Value for the username */
    usernameValue?: string;
    /** Function that handles the onChange event for the username */
    onChangeUsername?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    /** Flag indicating if the username is valid */
    isValidUsername?: boolean;
    /** Label for the password input field */
    passwordLabel?: string;
    /** Value for the password */
    passwordValue?: string;
    /** Function that handles the onChange event for the password */
    onChangePassword?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    /** Flag indicating if the password is valid */
    isValidPassword?: boolean;
    /** Flag indicating if the user can toggle hiding the password */
    isShowPasswordEnabled?: boolean;
    /** Accessible label for the show password button */
    showPasswordAriaLabel?: string;
    /** Accessible label for the hide password button */
    hidePasswordAriaLabel?: string;
    /** Label for the log in button input */
    loginButtonLabel?: string;
    /** Flag indicating if the login button is disabled */
    isLoginButtonDisabled?: boolean;
    /** Function that is called when the login button is clicked */
    onLoginButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Label for the remember me checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show. */
    rememberMeLabel?: string;
    /** Flag indicating if the remember me checkbox is checked. */
    isRememberMeChecked?: boolean;
    /** Function that handles the onChange event for the remember me checkbox */
    onChangeRememberMe?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
}
export declare const LoginForm: React.FunctionComponent<LoginFormProps>;
//# sourceMappingURL=LoginForm.d.ts.map