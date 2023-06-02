import * as React from 'react';
import { HTMLProps } from 'react';
export declare enum TextAreResizeOrientation {
    horizontal = "horizontal",
    vertical = "vertical",
    both = "both"
}
export declare enum TextAreaReadOnlyVariant {
    default = "default",
    plain = "plain"
}
export interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'onChange' | 'ref'> {
    /** Additional classes added to the text area. */
    className?: string;
    /** Flag to show if the text area is required. */
    isRequired?: boolean;
    /** Flag to show if the text area is disabled. */
    isDisabled?: boolean;
    /** @deprecated Use readOnlyVariant instead. Flag to show if the text area is read only. */
    isReadOnly?: boolean;
    /** Read only variant. */
    readOnlyVariant?: 'default' | 'plain';
    /** Use the external file instead of a data URI */
    isIconSprite?: boolean;
    /** Flag to modify height based on contents. */
    autoResize?: boolean;
    /** Value to indicate if the text area is modified to show that validation state.
     * If set to success, text area will be modified to indicate valid state.
     * If set to error, text area will be modified to indicate error state.
     */
    validated?: 'success' | 'warning' | 'error' | 'default';
    /** Value of the text area. */
    value?: string | number;
    /** A callback for when the text area value changes. */
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** Sets the orientation to limit the resize to */
    resizeOrientation?: 'horizontal' | 'vertical' | 'both';
    /** Custom flag to show that the text area requires an associated id or aria-label. */
    'aria-label'?: string;
    /** A reference object to attach to the text area. */
    innerRef?: React.RefObject<any>;
}
export declare class TextAreaBase extends React.Component<TextAreaProps> {
    static displayName: string;
    static defaultProps: TextAreaProps;
    inputRef: React.RefObject<HTMLTextAreaElement>;
    private setAutoHeight;
    constructor(props: TextAreaProps);
    componentDidMount(): void;
    private handleChange;
    render(): JSX.Element;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=TextArea.d.ts.map