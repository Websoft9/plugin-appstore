import React from 'react';
import { MenuItemProps } from '../../../components/Menu';
export interface SelectOptionProps extends Omit<MenuItemProps, 'ref'> {
    /** Anything which can be rendered in a select option */
    children?: React.ReactNode;
    /** Classes applied to root element of select option */
    className?: string;
    /** Identifies the component in the Select onSelect callback */
    itemId?: any;
    /** Indicates the option has a checkbox */
    hasCheck?: boolean;
    /** Indicates the option is disabled */
    isDisabled?: boolean;
    /** Indicates the option is selected */
    isSelected?: boolean;
    /** Indicates the option is focused */
    isFocused?: boolean;
}
export declare const SelectOption: React.FunctionComponent<MenuItemProps>;
//# sourceMappingURL=SelectOption.d.ts.map