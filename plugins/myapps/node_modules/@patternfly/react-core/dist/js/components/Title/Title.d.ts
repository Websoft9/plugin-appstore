import * as React from 'react';
import { OUIAProps } from '../../helpers';
export declare enum TitleSizes {
    md = "md",
    lg = "lg",
    xl = "xl",
    '2xl' = "2xl",
    '3xl' = "3xl",
    '4xl' = "4xl"
}
declare type Size = 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export interface TitleProps extends Omit<React.HTMLProps<HTMLHeadingElement>, 'size' | 'className'>, OUIAProps {
    /** The size of the Title  */
    size?: Size;
    /** Content rendered inside the Title */
    children?: React.ReactNode;
    /** Additional classes added to the Title */
    className?: string;
    /** The heading level to use */
    headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const Title: React.FunctionComponent<TitleProps>;
export {};
//# sourceMappingURL=Title.d.ts.map