import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
import { MenuContext } from './MenuContext';
import { canUseDOM } from '../../helpers/util';
import { KeyboardHandler } from '../../helpers';
class MenuBase extends React.Component {
    constructor(props) {
        super(props);
        this.menuRef = React.createRef();
        this.activeMenu = null;
        this.state = {
            ouiaStateId: getDefaultOUIAId(Menu.displayName),
            searchInputValue: '',
            transitionMoveTarget: null,
            flyoutRef: null,
            disableHover: false,
            currentDrilldownMenuId: this.props.id
        };
        this.handleDrilldownTransition = (event) => {
            const current = this.menuRef.current;
            if (!current ||
                (current !== event.target.closest('.pf-c-menu') &&
                    !Array.from(current.getElementsByClassName('pf-c-menu')).includes(event.target.closest('.pf-c-menu')))) {
                return;
            }
            if (this.state.transitionMoveTarget) {
                this.state.transitionMoveTarget.focus();
                this.setState({ transitionMoveTarget: null });
            }
            else {
                const nextMenu = current.querySelector('#' + this.props.activeMenu) || current || null;
                const nextMenuChildren = Array.from(nextMenu.getElementsByTagName('UL')[0].children);
                if (!this.state.currentDrilldownMenuId || nextMenu.id !== this.state.currentDrilldownMenuId) {
                    this.setState({ currentDrilldownMenuId: nextMenu.id });
                }
                else {
                    // if the drilldown transition ends on the same menu, do not focus the first item
                    return;
                }
                const nextTarget = nextMenuChildren.filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')))[0].firstChild;
                nextTarget.focus();
                nextTarget.tabIndex = 0;
            }
        };
        this.handleExtraKeys = (event) => {
            const isDrilldown = this.props.containsDrilldown;
            const activeElement = document.activeElement;
            if (event.target.closest('.pf-c-menu') !== this.activeMenu &&
                !event.target.classList.contains('pf-c-breadcrumb__link')) {
                this.activeMenu = event.target.closest('.pf-c-menu');
                this.setState({ disableHover: true });
            }
            if (event.target.tagName === 'INPUT') {
                return;
            }
            const parentMenu = this.activeMenu;
            const key = event.key;
            const isFromBreadcrumb = activeElement.classList.contains('pf-c-breadcrumb__link') ||
                activeElement.classList.contains('pf-c-dropdown__toggle');
            if (key === ' ' || key === 'Enter') {
                event.preventDefault();
                if (isDrilldown && !isFromBreadcrumb) {
                    const isDrillingOut = activeElement.closest('li').classList.contains('pf-m-current-path');
                    if (isDrillingOut && parentMenu.parentElement.tagName === 'LI') {
                        activeElement.tabIndex = -1;
                        parentMenu.parentElement.firstChild.tabIndex = 0;
                        this.setState({ transitionMoveTarget: parentMenu.parentElement.firstChild });
                    }
                    else {
                        if (activeElement.nextElementSibling && activeElement.nextElementSibling.classList.contains('pf-c-menu')) {
                            const childItems = Array.from(activeElement.nextElementSibling.getElementsByTagName('UL')[0].children).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')));
                            activeElement.tabIndex = -1;
                            childItems[0].firstChild.tabIndex = 0;
                            this.setState({ transitionMoveTarget: childItems[0].firstChild });
                        }
                    }
                }
                document.activeElement.click();
            }
        };
        this.createNavigableElements = () => {
            const isDrilldown = this.props.containsDrilldown;
            if (isDrilldown) {
                return this.activeMenu
                    ? Array.from(this.activeMenu.getElementsByTagName('UL')[0].children).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')))
                    : [];
            }
            else {
                return this.menuRef.current
                    ? Array.from(this.menuRef.current.getElementsByTagName('LI')).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')))
                    : [];
            }
        };
        if (props.innerRef) {
            this.menuRef = props.innerRef;
        }
    }
    allowTabFirstItem() {
        // Allow tabbing to first menu item
        const current = this.menuRef.current;
        if (current) {
            const first = current.querySelector('ul button:not(:disabled), ul a:not(:disabled)');
            if (first) {
                first.tabIndex = 0;
            }
        }
    }
    componentDidMount() {
        if (this.context) {
            this.setState({ disableHover: this.context.disableHover });
        }
        if (canUseDOM) {
            window.addEventListener('transitionend', this.props.isRootMenu ? this.handleDrilldownTransition : null);
        }
        this.allowTabFirstItem();
    }
    componentWillUnmount() {
        if (canUseDOM) {
            window.removeEventListener('transitionend', this.handleDrilldownTransition);
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.allowTabFirstItem();
        }
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, id, children, className, onSelect, selected = null, onActionClick, ouiaId, ouiaSafe, containsFlyout, isNavFlyout, containsDrilldown, isMenuDrilledIn, isPlain, isScrollable, drilldownItemPath, drilledInMenus, onDrillIn, onDrillOut, onGetMenuHeight, parentMenu = null, activeItemId = null, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        innerRef, isRootMenu, activeMenu, role } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = __rest(_a, ['aria-label', "id", "children", "className", "onSelect", "selected", "onActionClick", "ouiaId", "ouiaSafe", "containsFlyout", "isNavFlyout", "containsDrilldown", "isMenuDrilledIn", "isPlain", "isScrollable", "drilldownItemPath", "drilledInMenus", "onDrillIn", "onDrillOut", "onGetMenuHeight", "parentMenu", "activeItemId", "innerRef", "isRootMenu", "activeMenu", "role"]);
        const _isMenuDrilledIn = isMenuDrilledIn || (drilledInMenus && drilledInMenus.includes(id)) || false;
        return (React.createElement(MenuContext.Provider, { value: {
                menuId: id,
                parentMenu: parentMenu || id,
                onSelect,
                onActionClick,
                activeItemId,
                selected,
                drilledInMenus,
                drilldownItemPath,
                onDrillIn,
                onDrillOut,
                onGetMenuHeight,
                flyoutRef: this.state.flyoutRef,
                setFlyoutRef: flyoutRef => this.setState({ flyoutRef }),
                disableHover: this.state.disableHover,
                role
            } },
            isRootMenu && (React.createElement(KeyboardHandler, { containerRef: this.menuRef || null, additionalKeyHandler: this.handleExtraKeys, createNavigableElements: this.createNavigableElements, isActiveElement: (element) => document.activeElement.closest('li') === element || // if element is a basic MenuItem
                    document.activeElement.parentElement === element ||
                    document.activeElement.closest('.pf-c-menu__search') === element || // if element is a MenuInput
                    (document.activeElement.closest('ol') && document.activeElement.closest('ol').firstChild === element), getFocusableElement: (navigableElement) => (navigableElement.tagName === 'DIV' && navigableElement.querySelector('input')) || // for MenuInput
                    (navigableElement.firstChild.tagName === 'LABEL' &&
                        navigableElement.querySelector('input')) || // for MenuItem checkboxes
                    navigableElement.firstChild, noHorizontalArrowHandling: document.activeElement &&
                    (document.activeElement.classList.contains('pf-c-breadcrumb__link') ||
                        document.activeElement.classList.contains('pf-c-dropdown__toggle')), noEnterHandling: true, noSpaceHandling: true })),
            React.createElement("div", Object.assign({ id: id, className: css(styles.menu, isPlain && styles.modifiers.plain, isScrollable && styles.modifiers.scrollable, containsFlyout && styles.modifiers.flyout, isNavFlyout && styles.modifiers.nav, containsDrilldown && styles.modifiers.drilldown, _isMenuDrilledIn && styles.modifiers.drilledIn, className), "aria-label": ariaLabel, ref: this.menuRef }, getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props), children)));
    }
}
MenuBase.displayName = 'Menu';
MenuBase.contextType = MenuContext;
MenuBase.defaultProps = {
    ouiaSafe: true,
    isRootMenu: true,
    isPlain: false,
    isScrollable: false,
    role: 'menu'
};
export const Menu = React.forwardRef((props, ref) => (React.createElement(MenuBase, Object.assign({}, props, { innerRef: ref }))));
Menu.displayName = 'Menu';
//# sourceMappingURL=Menu.js.map