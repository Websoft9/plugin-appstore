import React from 'react';
import { MenuProps } from '../../../components/Menu';
import { OUIAProps } from '../../../helpers';
export interface DropdownProps extends MenuProps, OUIAProps {
    /** Anything which can be rendered in a dropdown. */
    children?: React.ReactNode;
    /** Classes applied to root element of dropdown. */
    className?: string;
    /** Renderer for a custom dropdown toggle. Forwards a ref to the toggle. */
    toggle: (toggleRef: React.RefObject<any>) => React.ReactNode;
    /** Flag to indicate if menu is opened.*/
    isOpen?: boolean;
    /** Function callback called when user selects item. */
    onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, itemId?: string | number) => void;
    /** Callback to allow the dropdown component to change the open state of the menu.
     * Triggered by clicking outside of the menu, or by pressing either tab or escape. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Indicates if the menu should be without the outer box-shadow. */
    isPlain?: boolean;
    /** Indicates if the menu should be scrollable. */
    isScrollable?: boolean;
    /** Min width of the menu. */
    minWidth?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
    /** z-index of the dropdown menu */
    zIndex?: number;
}
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<any>>;
//# sourceMappingURL=Dropdown.d.ts.map