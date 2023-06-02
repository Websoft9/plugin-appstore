"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowTab = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const tabs_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Tabs/tabs"));
const react_styles_1 = require("@patternfly/react-styles");
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const helpers_1 = require("../../helpers");
const Menu_1 = require("../Menu");
const TabsContext_1 = require("./TabsContext");
const TabTitleText_1 = require("./TabTitleText");
const OverflowTab = (_a) => {
    var { className, overflowingTabs = [], showTabCount, defaultTitleText = 'More', toggleAriaLabel, removeFindDomNode = false, zIndex = 9999 } = _a, props = tslib_1.__rest(_a, ["className", "overflowingTabs", "showTabCount", "defaultTitleText", "toggleAriaLabel", "removeFindDomNode", "zIndex"]);
    const menuRef = react_1.default.useRef();
    const overflowTabRef = react_1.default.useRef();
    const overflowLIRef = react_1.default.useRef();
    const [isExpanded, setIsExpanded] = react_1.default.useState(false);
    const { localActiveKey, handleTabClick } = react_1.default.useContext(TabsContext_1.TabsContext);
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
    react_1.default.useEffect(() => {
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
    const overflowTab = (react_1.default.createElement("li", Object.assign({ className: (0, react_styles_1.css)(tabs_1.default.tabsItem, 'pf-m-overflow', selectedTab && tabs_1.default.modifiers.current, className), role: "presentation", ref: overflowLIRef }, props),
        react_1.default.createElement("button", { type: "button", className: (0, react_styles_1.css)(tabs_1.default.tabsLink, isExpanded && tabs_1.default.modifiers.expanded), onClick: () => toggleMenu(), "aria-label": toggleAriaLabel, "aria-haspopup": "menu", "aria-expanded": isExpanded, role: "tab", ref: overflowTabRef },
            react_1.default.createElement(TabTitleText_1.TabTitleText, null,
                tabTitle,
                showTabCount && tabTitle === defaultTitleText && ` (${overflowingTabs.length})`),
            react_1.default.createElement("span", { className: tabs_1.default.tabsLinkToggleIcon },
                react_1.default.createElement(angle_right_icon_1.default, null)))));
    const tabs = overflowingTabs.map(tab => (react_1.default.createElement(Menu_1.MenuItem, { key: tab.eventKey, itemId: tab.eventKey, isSelected: localActiveKey === tab.eventKey }, tab.title)));
    const onTabSelect = (event, key) => {
        closeMenu();
        const selectedTabRef = overflowingTabs.find(tab => tab.eventKey === key).tabContentRef;
        handleTabClick(event, key, selectedTabRef);
    };
    const overflowMenu = (react_1.default.createElement(Menu_1.Menu, { ref: menuRef, onSelect: (ev, itemId) => onTabSelect(ev, itemId) },
        react_1.default.createElement(Menu_1.MenuContent, null,
            react_1.default.createElement(Menu_1.MenuList, null, tabs))));
    return (react_1.default.createElement(helpers_1.Popper, { trigger: overflowTab, popper: overflowMenu, isVisible: isExpanded, popperMatchesTriggerWidth: false, appendTo: overflowLIRef.current, removeFindDomNode: removeFindDomNode, zIndex: zIndex }));
};
exports.OverflowTab = OverflowTab;
exports.OverflowTab.displayName = 'OverflowTab';
//# sourceMappingURL=OverflowTab.js.map