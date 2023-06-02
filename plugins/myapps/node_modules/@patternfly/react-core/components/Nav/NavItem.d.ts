import * as React from 'react';
import { NavSelectClickHandler } from './Nav';
import { OUIAProps } from '../../helpers';
export interface NavItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onClick'>, OUIAProps {
    /** Content rendered inside the nav item. */
    children?: React.ReactNode;
    /** Whether to set className on children when React.isValidElement(children) */
    styleChildren?: boolean;
    /** Additional classes added to the nav item */
    className?: string;
    /** Target navigation link. Should not be used if the flyout prop is defined. */
    to?: string;
    /** Flag indicating whether the item is active */
    isActive?: boolean;
    /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
    groupId?: string | number | null;
    /** Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
    itemId?: string | number | null;
    /** If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself. */
    preventDefault?: boolean;
    /** Callback for item click */
    onClick?: NavSelectClickHandler;
    /** Component used to render NavItems if  React.isValidElement(children) is false */
    component?: React.ReactNode;
    /** Flyout of a nav item. This should be a Menu component. Should not be used if the to prop is defined. */
    flyout?: React.ReactElement;
    /** Callback when flyout is opened or closed */
    onShowFlyout?: () => void;
    /** @beta Opt-in for updated popper that does not use findDOMNode. */
    removeFindDomNode?: boolean;
    /** z-index of the flyout nav item */
    zIndex?: number;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const NavItem: React.FunctionComponent<NavItemProps>;
//# sourceMappingURL=NavItem.d.ts.map