import { __rest } from "tslib";
import React from 'react';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { Popper } from '../../helpers';
import { Menu, MenuContent, MenuList, MenuItem } from '../Menu';
import { TabsContext } from './TabsContext';
import { TabTitleText } from './TabTitleText';
export const OverflowTab = (_a) => {
    var { className, overflowingTabs = [], showTabCount, defaultTitleText = 'More', toggleAriaLabel, removeFindDomNode = false, zIndex = 9999 } = _a, props = __rest(_a, ["className", "overflowingTabs", "showTabCount", "defaultTitleText", "toggleAriaLabel", "removeFindDomNode", "zIndex"]);
    const menuRef = React.useRef();
    const overflowTabRef = React.useRef();
    const overflowLIRef = React.useRef();
    const [isExpanded, setIsExpanded] = React.useState(false);
    const { localActiveKey, handleTabClick } = React.useContext(TabsContext);
    const closeMenu = () => {
        setIsExpanded(false);
        overflowTabRef.current.focus();
    };
    const handleMenuKeys = (ev) => {
        var _a;
        const menuContainsEventTarget = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(ev.target);
        if (isExpanded && menuContainsEventTarget && ev.key === 'Escape') {
            closeMenu();
        }
    };
    const handleClick = (ev) => {
        var _a, _b;
        const clickIsOutsideMenu = !((_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(ev.target));
        const clickIsOutsideOverflowTab = !((_b = overflowTabRef === null || overflowTabRef === void 0 ? void 0 : overflowTabRef.current) === null || _b === void 0 ? void 0 : _b.contains(ev.target));
        if (isExpanded && clickIsOutsideMenu && clickIsOutsideOverflowTab) {
            closeMenu();
        }
    };
    React.useEffect(() => {
        window.addEventListener('click', handleClick);
        window.addEventListener('keydown', handleMenuKeys);
        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('keydown', handleMenuKeys);
        };
    }, [isExpanded, menuRef, overflowTabRef]);
    const selectedTab = overflowingTabs.find(tab => tab.eventKey === localActiveKey);
    const tabTitle = (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.title) ? selectedTab.title : defaultTitleText;
    const toggleMenu = () => {
        setIsExpanded(prevIsExpanded => !prevIsExpanded);
        setTimeout(() => {
            if (menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) {
                const firstElement = menuRef.current.querySelector('li > button,input:not(:disabled)');
                firstElement && firstElement.focus();
            }
        }, 0);
    };
    const overflowTab = (React.createElement("li", Object.assign({ className: css(styles.tabsItem, 'pf-m-overflow', selectedTab && styles.modifiers.current, className), role: "presentation", ref: overflowLIRef }, props),
        React.createElement("button", { type: "button", className: css(styles.tabsLink, isExpanded && styles.modifiers.expanded), onClick: () => toggleMenu(), "aria-label": toggleAriaLabel, "aria-haspopup": "menu", "aria-expanded": isExpanded, role: "tab", ref: overflowTabRef },
            React.createElement(TabTitleText, null,
                tabTitle,
                showTabCount && tabTitle === defaultTitleText && ` (${overflowingTabs.length})`),
            React.createElement("span", { className: styles.tabsLinkToggleIcon },
                React.createElement(AngleRightIcon, null)))));
    const tabs = overflowingTabs.map(tab => (React.createElement(MenuItem, { key: tab.eventKey, itemId: tab.eventKey, isSelected: localActiveKey === tab.eventKey }, tab.title)));
    const onTabSelect = (event, key) => {
        closeMenu();
        const selectedTabRef = overflowingTabs.find(tab => tab.eventKey === key).tabContentRef;
        handleTabClick(event, key, selectedTabRef);
    };
    const overflowMenu = (React.createElement(Menu, { ref: menuRef, onSelect: (ev, itemId) => onTabSelect(ev, itemId) },
        React.createElement(MenuContent, null,
            React.createElement(MenuList, null, tabs))));
    return (React.createElement(Popper, { trigger: overflowTab, popper: overflowMenu, isVisible: isExpanded, popperMatchesTriggerWidth: false, appendTo: overflowLIRef.current, removeFindDomNode: removeFindDomNode, zIndex: zIndex }));
};
OverflowTab.displayName = 'OverflowTab';
//# sourceMappingURL=OverflowTab.js.map