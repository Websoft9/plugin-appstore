import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface SeparatorProps extends React.HTMLProps<HTMLAnchorElement>, OUIAProps {
    /** Classes applied to root element of dropdown item */
    className?: string;
    /** Click event to pass to InternalDropdownItem */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent | MouseEvent) => void;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const DropdownSeparator: React.FunctionComponent<SeparatorProps>;
//# sourceMappingURL=DropdownSeparator.d.ts.map