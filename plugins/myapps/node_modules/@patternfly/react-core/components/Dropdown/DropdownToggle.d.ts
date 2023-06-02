import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface DropdownToggleProps extends React.HTMLProps<HTMLButtonElement>, OUIAProps {
    /** HTML ID of dropdown toggle */
    id?: string;
    /** Anything which can be rendered as dropdown toggle button */
    children?: React.ReactNode;
    /** Classes applied to root element of dropdown toggle button */
    className?: string;
    /** Flag to indicate if menu is opened */
    isOpen?: boolean;
    /** Callback called when toggle is clicked */
    onToggle?: (value: boolean, event: any) => void;
    /** Element which wraps toggle */
    parentRef?: HTMLElement;
    /** The menu element */
    getMenuRef?: () => HTMLElement;
    /** Forces active state */
    isActive?: boolean;
    /** Display the toggle with no border or background */
    isPlain?: boolean;
    /** Display the toggle in text only mode */
    isText?: boolean;
    /** Whether or not the <div> has a disabled state */
    isDisabled?: boolean;
    /** @deprecated Use `toggleVariant` instead. Whether or not the dropdown toggle button should have primary button styling */
    isPrimary?: boolean;
    /** Alternate styles for the dropdown toggle button */
    toggleVariant?: 'primary' | 'secondary' | 'default';
    /** An image to display within the dropdown toggle, appearing before any component children */
    icon?: React.ReactNode;
    /** The icon to display for the toggle, appearing after any component children. Defaults to CaretDownIcon. Set to null to not show an icon. */
    toggleIndicator?: React.ElementType | null;
    /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
    splitButtonItems?: React.ReactNode[];
    /** Variant of split button toggle */
    splitButtonVariant?: 'action' | 'checkbox';
    /** Accessible label for the dropdown toggle button */
    'aria-label'?: string;
    /** Accessibility property to indicate correct has popup */
    'aria-haspopup'?: boolean | 'listbox' | 'menu' | 'dialog' | 'grid' | 'tree';
    /** Type to put on the button */
    type?: 'button' | 'submit' | 'reset';
    /** Callback called when the Enter key is pressed */
    onEnter?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const DropdownToggle: React.FunctionComponent<DropdownToggleProps>;
//# sourceMappingURL=DropdownToggle.d.ts.map