"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardNavItem = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const exclamation_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/exclamation-circle-icon'));
const helpers_1 = require("../../../helpers");
const types_1 = require("./types");
const WizardNavItem = ({ children = null, content = '', isCurrent = false, isDisabled = false, isVisited = false, stepIndex, onClick, component: NavItemComponent = 'button', href, isExpandable = false, id, status = 'default', target, ouiaId, ouiaSafe = true }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const ouiaProps = (0, helpers_1.useOUIAProps)(exports.WizardNavItem.displayName, ouiaId, ouiaSafe);
    React.useEffect(() => {
        setIsExpanded(isCurrent);
    }, [isCurrent]);
    if (NavItemComponent === 'a' && !href && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error('WizardNavItem: When using an anchor, please provide an href');
    }
    const ariaLabel = React.useMemo(() => {
        if (status === types_1.WizardNavItemStatus.Error || (isVisited && !isCurrent)) {
            let label = content.toString();
            if (status === types_1.WizardNavItemStatus.Error) {
                label += `, ${status}`;
            }
            // No need to signify step is visited if current
            if (isVisited && !isCurrent) {
                label += ', visited';
            }
            return label;
        }
    }, [content, isCurrent, isVisited, status]);
    return (React.createElement("li", { className: (0, react_styles_1.css)(wizard_1.default.wizardNavItem, isExpandable && wizard_1.default.modifiers.expandable, isExpandable && isExpanded && wizard_1.default.modifiers.expanded) },
        React.createElement(NavItemComponent, Object.assign({}, (NavItemComponent === 'a'
            ? { tabIndex: isDisabled ? -1 : undefined, href, target }
            : { disabled: isDisabled }), (id && { id: id.toString() }), { onClick: e => {
                e.stopPropagation();
                isExpandable ? setIsExpanded(!isExpanded || isCurrent) : onClick === null || onClick === void 0 ? void 0 : onClick(e, stepIndex);
            }, className: (0, react_styles_1.css)(wizard_1.default.wizardNavLink, isCurrent && wizard_1.default.modifiers.current, isDisabled && wizard_1.default.modifiers.disabled), "aria-disabled": isDisabled ? true : null, "aria-current": isCurrent && !children ? 'step' : false }, (isExpandable && { 'aria-expanded': isExpanded }), (ariaLabel && { 'aria-label': ariaLabel }), ouiaProps), isExpandable ? (React.createElement(React.Fragment, null,
            React.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardNavLinkText) }, content),
            React.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardNavLinkToggle) },
                React.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardNavLinkToggleIcon) },
                    React.createElement(angle_right_icon_1.default, { "aria-label": `${isCurrent ? 'Collapse' : 'Expand'} step icon` }))))) : (React.createElement(React.Fragment, null,
            content,
            status === types_1.WizardNavItemStatus.Error && (React.createElement("span", { style: { marginLeft: 'var(--pf-global--spacer--sm)' } },
                React.createElement(exclamation_circle_icon_1.default, { color: "var(--pf-global--danger-color--100)" })))))),
        children));
};
exports.WizardNavItem = WizardNavItem;
exports.WizardNavItem.displayName = 'WizardNavItem';
//# sourceMappingURL=WizardNavItem.js.map