import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { useOUIAProps } from '../../../helpers';
import { WizardNavItemStatus } from './types';
export const WizardNavItem = ({ children = null, content = '', isCurrent = false, isDisabled = false, isVisited = false, stepIndex, onClick, component: NavItemComponent = 'button', href, isExpandable = false, id, status = 'default', target, ouiaId, ouiaSafe = true }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const ouiaProps = useOUIAProps(WizardNavItem.displayName, ouiaId, ouiaSafe);
    React.useEffect(() => {
        setIsExpanded(isCurrent);
    }, [isCurrent]);
    if (NavItemComponent === 'a' && !href && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error('WizardNavItem: When using an anchor, please provide an href');
    }
    const ariaLabel = React.useMemo(() => {
        if (status === WizardNavItemStatus.Error || (isVisited && !isCurrent)) {
            let label = content.toString();
            if (status === WizardNavItemStatus.Error) {
                label += `, ${status}`;
            }
            // No need to signify step is visited if current
            if (isVisited && !isCurrent) {
                label += ', visited';
            }
            return label;
        }
    }, [content, isCurrent, isVisited, status]);
    return (React.createElement("li", { className: css(styles.wizardNavItem, isExpandable && styles.modifiers.expandable, isExpandable && isExpanded && styles.modifiers.expanded) },
        React.createElement(NavItemComponent, Object.assign({}, (NavItemComponent === 'a'
            ? { tabIndex: isDisabled ? -1 : undefined, href, target }
            : { disabled: isDisabled }), (id && { id: id.toString() }), { onClick: e => {
                e.stopPropagation();
                isExpandable ? setIsExpanded(!isExpanded || isCurrent) : onClick === null || onClick === void 0 ? void 0 : onClick(e, stepIndex);
            }, className: css(styles.wizardNavLink, isCurrent && styles.modifiers.current, isDisabled && styles.modifiers.disabled), "aria-disabled": isDisabled ? true : null, "aria-current": isCurrent && !children ? 'step' : false }, (isExpandable && { 'aria-expanded': isExpanded }), (ariaLabel && { 'aria-label': ariaLabel }), ouiaProps), isExpandable ? (React.createElement(React.Fragment, null,
            React.createElement("span", { className: css(styles.wizardNavLinkText) }, content),
            React.createElement("span", { className: css(styles.wizardNavLinkToggle) },
                React.createElement("span", { className: css(styles.wizardNavLinkToggleIcon) },
                    React.createElement(AngleRightIcon, { "aria-label": `${isCurrent ? 'Collapse' : 'Expand'} step icon` }))))) : (React.createElement(React.Fragment, null,
            content,
            status === WizardNavItemStatus.Error && (React.createElement("span", { style: { marginLeft: 'var(--pf-global--spacer--sm)' } },
                React.createElement(ExclamationCircleIcon, { color: "var(--pf-global--danger-color--100)" })))))),
        children));
};
WizardNavItem.displayName = 'WizardNavItem';
//# sourceMappingURL=WizardNavItem.js.map