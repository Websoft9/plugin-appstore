"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavItem = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const nav_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Nav/nav"));
const react_styles_1 = require("@patternfly/react-styles");
const Nav_1 = require("./Nav");
const PageSidebar_1 = require("../Page/PageSidebar");
const helpers_1 = require("../../helpers");
const Popper_1 = require("../../helpers/Popper/Popper");
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const NavItem = (_a) => {
    var { children, styleChildren = true, className, to, isActive = false, groupId = null, itemId = null, preventDefault = false, onClick = null, component = 'a', flyout, onShowFlyout, ouiaId, ouiaSafe, removeFindDomNode = false, zIndex = 9999 } = _a, props = tslib_1.__rest(_a, ["children", "styleChildren", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component", "flyout", "onShowFlyout", "ouiaId", "ouiaSafe", "removeFindDomNode", "zIndex"]);
    const { flyoutRef, setFlyoutRef } = React.useContext(Nav_1.NavContext);
    const { isNavOpen } = React.useContext(PageSidebar_1.PageSidebarContext);
    const [flyoutTarget, setFlyoutTarget] = React.useState(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const ref = React.useRef();
    const flyoutVisible = ref === flyoutRef;
    const popperRef = React.useRef();
    const hasFlyout = flyout !== undefined;
    const Component = hasFlyout ? 'button' : component;
    // A NavItem should not be both a link and a flyout
    if (to && hasFlyout) {
        // eslint-disable-next-line no-console
        console.error('NavItem cannot have both "to" and "flyout" props.');
    }
    const showFlyout = (show, override) => {
        if ((!flyoutVisible || override) && show) {
            setFlyoutRef(ref);
        }
        else if ((flyoutVisible || override) && !show) {
            setFlyoutRef(null);
        }
        onShowFlyout && show && onShowFlyout();
    };
    const onMouseOver = (event) => {
        const evtContainedInFlyout = event.target.closest('.pf-c-nav__item.pf-m-flyout');
        if (hasFlyout && !flyoutVisible) {
            showFlyout(true);
        }
        else if (flyoutRef !== null && !evtContainedInFlyout) {
            setFlyoutRef(null);
        }
    };
    const onFlyoutClick = (event) => {
        const target = event.target;
        const closestItem = target.closest('.pf-m-flyout');
        if (!closestItem) {
            if (hasFlyout) {
                showFlyout(false, true);
            }
            else if (flyoutRef !== null) {
                setFlyoutRef(null);
            }
        }
    };
    const handleFlyout = (event) => {
        var _a, _b;
        const key = event.key;
        const target = event.target;
        if ((key === ' ' || key === 'Enter' || key === 'ArrowRight') && hasFlyout && ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(target))) {
            event.stopPropagation();
            event.preventDefault();
            if (!flyoutVisible) {
                showFlyout(true);
                setFlyoutTarget(target);
            }
        }
        // We only want the NavItem to handle closing a flyout menu if only the first level flyout is open.
        // Otherwise, MenuItem should handle closing its flyouts
        if ((key === 'Escape' || key === 'ArrowLeft') && ((_b = popperRef === null || popperRef === void 0 ? void 0 : popperRef.current) === null || _b === void 0 ? void 0 : _b.querySelectorAll('.pf-c-menu').length) === 1) {
            if (flyoutVisible) {
                event.stopPropagation();
                event.preventDefault();
                showFlyout(false);
            }
        }
    };
    React.useEffect(() => {
        if (hasFlyout) {
            window.addEventListener('click', onFlyoutClick);
        }
        return () => {
            if (hasFlyout) {
                window.removeEventListener('click', onFlyoutClick);
            }
        };
    }, []);
    React.useEffect(() => {
        if (flyoutTarget) {
            if (flyoutVisible) {
                const flyoutItems = Array.from(popperRef.current.getElementsByTagName('UL')[0].children).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')));
                flyoutItems[0].firstChild.focus();
            }
            else {
                flyoutTarget.focus();
            }
        }
    }, [flyoutVisible, flyoutTarget]);
    const flyoutButton = (React.createElement("span", { className: (0, react_styles_1.css)(nav_1.default.navToggle) },
        React.createElement("span", { className: (0, react_styles_1.css)(nav_1.default.navToggleIcon) },
            React.createElement(angle_right_icon_1.default, { "aria-hidden": true }))));
    const ariaFlyoutProps = {
        'aria-haspopup': 'menu',
        'aria-expanded': flyoutVisible
    };
    const tabIndex = isNavOpen ? null : -1;
    const renderDefaultLink = (context) => {
        const preventLinkDefault = preventDefault || !to;
        return (React.createElement(Component, Object.assign({ href: to, onClick: (e) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick), className: (0, react_styles_1.css)(nav_1.default.navLink, isActive && nav_1.default.modifiers.current, isHovered && nav_1.default.modifiers.hover, className), "aria-current": isActive ? 'page' : null, tabIndex: tabIndex }, (hasFlyout && Object.assign({}, ariaFlyoutProps)), props),
            children,
            flyout && flyoutButton));
    };
    const renderClonedChild = (context, child) => React.cloneElement(child, Object.assign(Object.assign({ onClick: (e) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick), 'aria-current': isActive ? 'page' : null }, (styleChildren && {
        className: (0, react_styles_1.css)(nav_1.default.navLink, isActive && nav_1.default.modifiers.current, child.props && child.props.className)
    })), { tabIndex: child.props.tabIndex || tabIndex, children: hasFlyout ? (React.createElement(React.Fragment, null,
            child.props.children,
            flyoutButton)) : (child.props.children) }));
    const ouiaProps = (0, helpers_1.useOUIAProps)(exports.NavItem.displayName, ouiaId, ouiaSafe);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const flyoutPopper = (React.createElement(Popper_1.Popper, { reference: ref, popper: React.createElement("div", { ref: popperRef, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, flyout), placement: "right-start", isVisible: flyoutVisible, onDocumentKeyDown: handleFlyout, removeFindDomNode: removeFindDomNode, zIndex: zIndex }));
    const navItem = (React.createElement(React.Fragment, null,
        React.createElement("li", Object.assign({ onMouseOver: onMouseOver, className: (0, react_styles_1.css)(nav_1.default.navItem, hasFlyout && nav_1.default.modifiers.flyout, className), ref: ref }, ouiaProps),
            React.createElement(Nav_1.NavContext.Consumer, null, context => React.isValidElement(children)
                ? renderClonedChild(context, children)
                : renderDefaultLink(context))),
        flyout && flyoutPopper));
    return navItem;
};
exports.NavItem = NavItem;
exports.NavItem.displayName = 'NavItem';
//# sourceMappingURL=NavItem.js.map