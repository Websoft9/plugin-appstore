import React from 'react';
import { MenuProps } from '../../../components/Menu';
import { OUIAProps } from '../../../helpers';
export interface SelectProps extends MenuProps, OUIAProps {
    /** Anything which can be rendered in a select */
    children?: React.ReactNode;
    /** Classes applied to root element of select */
    className?: string;
    /** Flag to indicate if select is open */
    isOpen?: boolean;
    /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the SelectOption. */
    selected?: any | any[];
    /** Renderer for a custom select toggle. Forwards a ref to the toggle. */
    toggle: (toggleRef: React.RefObject<any>) => React.ReactNode;
    /** Function callback when user selects an option. */
    onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, itemId?: string | number) => void;
    /** Callback to allow the select component to change the open state of the menu.
     * Triggered by clicking outside of the menu, or by pressing either tab or escape. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Indicates if the select should be without the outer box-shadow */
    isPlain?: boolean;
    /** Minimum width of the select menu */
    minWidth?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<HTMLDivElement>;
    /** z-index of the select menu */
    zIndex?: number;
    /** @beta Determines the accessible role of the select. For a checkbox select pass in "menu". */
    role?: string;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<any>>;
//# sourceMappingURL=Select.d.ts.map