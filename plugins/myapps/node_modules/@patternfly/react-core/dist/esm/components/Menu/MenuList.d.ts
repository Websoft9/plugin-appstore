import * as React from 'react';
export interface MenuListProps extends React.HTMLProps<HTMLUListElement> {
    /** Anything that can be rendered inside of menu list */
    children: React.ReactNode;
    /** Additional classes added to the menu list */
    className?: string;
    /** @beta Indicates to assistive technologies whether more than one item can be selected
     * for a non-checkbox menu. Only applies when the menu's role is "listbox".
     */
    isAriaMultiselectable?: boolean;
}
export declare const MenuList: React.FunctionComponent<MenuListProps>;
//# sourceMappingURL=MenuList.d.ts.map