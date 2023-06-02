import * as React from 'react';
import { OUIAProps } from '../../helpers';
export declare enum TextVariants {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    p = "p",
    a = "a",
    small = "small",
    blockquote = "blockquote",
    pre = "pre"
}
export interface TextProps extends React.HTMLProps<HTMLElement>, OUIAProps {
    /** The text component */
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'small' | 'blockquote' | 'pre';
    /** Content rendered within the Text */
    children?: React.ReactNode;
    /** Additional classes added to the Text */
    className?: string;
    /** Flag to indicate the link has visited styles applied if the browser determines the link has been visited */
    isVisitedLink?: boolean;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const Text: React.FunctionComponent<TextProps>;
//# sourceMappingURL=Text.d.ts.map