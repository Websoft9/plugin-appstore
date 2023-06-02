import React from 'react';
import { MenuListProps } from '../../../components/Menu';
export interface SelectListProps extends MenuListProps {
    /** Anything which can be rendered in a select list */
    children: React.ReactNode;
    /** Classes applied to root element of select list */
    className?: string;
    /** @beta Indicates to assistive technologies whether more than one item can be selected
     * for a non-checkbox select.
     */
    isAriaMultiselectable?: boolean;
}
export declare const SelectList: React.FunctionComponent<MenuListProps>;
//# sourceMappingURL=SelectList.d.ts.map