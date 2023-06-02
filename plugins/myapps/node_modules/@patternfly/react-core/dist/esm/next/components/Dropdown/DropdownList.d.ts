import React from 'react';
import { MenuListProps } from '../../../components/Menu';
export interface DropdownListProps extends MenuListProps {
    /** Anything which can be rendered in a dropdown list */
    children: React.ReactNode;
    /** Classes applied to root element of dropdown list */
    className?: string;
}
export declare const DropdownList: React.FunctionComponent<MenuListProps>;
//# sourceMappingURL=DropdownList.d.ts.map