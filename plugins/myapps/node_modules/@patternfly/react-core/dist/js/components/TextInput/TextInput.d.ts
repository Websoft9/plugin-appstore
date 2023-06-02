import * as React from 'react';
import { OUIAProps } from '../../helpers';
export declare enum TextInputTypes {
    text = "text",
    date = "date",
    datetimeLocal = "datetime-local",
    email = "email",
    month = "month",
    number = "number",
    password = "password",
    search = "search",
    tel = "tel",
    time = "time",
    url = "url"
}
export declare enum TextInputReadOnlyVariant {
    default = "default",
    plain = "plain"
}
export interface TextInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'>, OUIAProps {
    /** Additional classes added to the text input. */
    className?: string;
    /** Flag to show if the text input is disabled. */
    isDisabled?: boolean;
    /** @deprecated Use readOnlyVariant instead. Flag to show if the text input is read only. */
    isReadOnly?: boolean;
    /** Read only variant. */
    readOnlyVariant?: 'plain' | 'default';
    isRequired?: boolean;
    /** Value to indicate if the text input is modified to show that validation state.
     * If set to success, text input will be modified to indicate valid state.
     * If set to error, text input will be modified to indicate error state.
     */
    validated?: 'success' | 'warning' | 'error' | 'default';
    /** A callback for when the text input value changes. */
    onChange?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    /** Type that the text input accepts. */
    type?: 'text' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url';
    /** Value of the text input. */
    value?: string | number;
    /** Aria-label. The text input requires an associated id or aria-label. */
    'aria-label'?: string;
    /** A reference object to attach to the text input box. */
    innerRef?: React.RefObject<any>;
    /** Trim text on left */
    isLeftTruncated?: boolean;
    /** Callback function when text input is focused */
    onFocus?: (event?: any) => void;
    /** Callback function when text input is blurred (focus leaves) */
    onBlur?: (event?: any) => void;
    /** icon variant */
    iconVariant?: 'calendar' | 'clock' | 'search';
    /** Use the external file instead of a data URI */
    isIconSprite?: boolean;
    /** Custom icon url to set as the text input's background-image */
    customIconUrl?: string;
    /** Dimensions for the custom icon set as the text input's background-size */
    customIconDimensions?: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface TextInputState {
    ouiaStateId: string;
}
export declare class TextInputBase extends React.Component<TextInputProps, TextInputState> {
    static displayName: string;
    static defaultProps: TextInputProps;
    inputRef: React.RefObject<HTMLInputElement>;
    observer: any;
    constructor(props: TextInputProps);
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    restoreText: () => void;
    onFocus: (event?: any) => void;
    onBlur: (event?: any) => void;
    render(): JSX.Element;
    private sanitizeInputValue;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TextInput.d.ts.map