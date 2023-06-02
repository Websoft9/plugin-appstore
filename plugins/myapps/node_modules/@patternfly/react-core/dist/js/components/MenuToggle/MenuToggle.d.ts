import * as React from 'react';
import { BadgeProps } from '../Badge';
export declare type MenuToggleElement = HTMLDivElement | HTMLButtonElement;
export interface SplitButtonOptions {
    /** Elements to display before the toggle button. When included, renders the menu toggle as a split button. */
    items: React.ReactNode[];
    /** Variant of split button toggle */
    variant?: 'action' | 'checkbox';
}
export interface MenuToggleProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLDivElement>, MenuToggleElement>, 'ref'> {
    /** Content rendered inside the toggle */
    children?: React.ReactNode;
    /** Additional classes added to the toggle */
    className?: string;
    /** Flag indicating the toggle has expanded styling */
    isExpanded?: boolean;
    /** Flag indicating the toggle is disabled */
    isDisabled?: boolean;
    /** Flag indicating the toggle is full height */
    isFullHeight?: boolean;
    /** Flag indicating the toggle takes up the full width of its parent */
    isFullWidth?: boolean;
    /** Object used to configure a split button menu toggle */
    splitButtonOptions?: SplitButtonOptions;
    /** Variant styles of the menu toggle */
    variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
    /** Optional icon rendered inside the toggle, before the children content */
    icon?: React.ReactNode;
    /** Optional badge rendered inside the toggle, after the children content */
    badge?: BadgeProps | React.ReactNode;
    /** Forwarded ref */
    innerRef?: React.Ref<MenuToggleElement>;
}
export declare class MenuToggleBase extends React.Component<MenuToggleProps> {
    displayName: string;
    static defaultProps: MenuToggleProps;
    render(): JSX.Element;
}
export declare const MenuToggle: React.ForwardRefExoticComponent<MenuToggleProps & React.RefAttributes<MenuToggleElement>>;
//# sourceMappingURL=MenuToggle.d.ts.map