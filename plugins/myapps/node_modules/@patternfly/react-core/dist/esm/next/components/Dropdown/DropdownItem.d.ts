import React from 'react';
import { MenuItemProps } from '../../../components/Menu';
import { OUIAProps } from '../../../helpers';
export interface DropdownItemProps extends Omit<MenuItemProps, 'ref'>, OUIAProps {
    /** Anything which can be rendered in a dropdown item */
    children?: React.ReactNode;
    /** Classes applied to root element of dropdown item */
    className?: string;
    /** Description of the dropdown item */
    description?: React.ReactNode;
    /** Identifies the component in the dropdown onSelect callback */
    itemId?: any;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const DropdownItem: React.FunctionComponent<MenuItemProps>;
//# sourceMappingURL=DropdownItem.d.ts.map