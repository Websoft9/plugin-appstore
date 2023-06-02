import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
export class MenuToggleBase extends React.Component {
    constructor() {
        super(...arguments);
        this.displayName = 'MenuToggleBase';
    }
    render() {
        const _a = this.props, { children, className, icon, badge, isExpanded, isDisabled, isFullHeight, isFullWidth, splitButtonOptions, variant, innerRef, onClick, 'aria-label': ariaLabel } = _a, otherProps = __rest(_a, ["children", "className", "icon", "badge", "isExpanded", "isDisabled", "isFullHeight", "isFullWidth", "splitButtonOptions", "variant", "innerRef", "onClick", 'aria-label']);
        const isPlain = variant === 'plain';
        const isPlainText = variant === 'plainText';
        const isTypeahead = variant === 'typeahead';
        const toggleControls = (React.createElement("span", { className: css(styles.menuToggleControls) },
            React.createElement("span", { className: css(styles.menuToggleToggleIcon) },
                React.createElement(CaretDownIcon, { "aria-hidden": true }))));
        const content = (React.createElement(React.Fragment, null,
            icon && React.createElement("span", { className: css(styles.menuToggleIcon) }, icon),
            isTypeahead ? children : React.createElement("span", { className: css(styles.menuToggleText) }, children),
            React.isValidElement(badge) && React.createElement("span", { className: css(styles.menuToggleCount) }, badge),
            isTypeahead ? (React.createElement("button", { type: "button", className: css(styles.menuToggleButton), "aria-expanded": isExpanded, onClick: onClick, "aria-label": "Menu toggle" }, toggleControls)) : (toggleControls)));
        const commonStyles = css(styles.menuToggle, isExpanded && styles.modifiers.expanded, variant === 'primary' && styles.modifiers.primary, variant === 'secondary' && styles.modifiers.secondary, (isPlain || isPlainText) && styles.modifiers.plain, isPlainText && styles.modifiers.text, isFullHeight && styles.modifiers.fullHeight, isFullWidth && styles.modifiers.fullWidth, isDisabled && styles.modifiers.disabled, className);
        const componentProps = Object.assign(Object.assign({ children: isPlain ? children : content }, (isDisabled && { disabled: true })), otherProps);
        if (isTypeahead) {
            return (React.createElement("div", Object.assign({ ref: innerRef, className: css(commonStyles, styles.modifiers.typeahead) }, componentProps)));
        }
        if (splitButtonOptions) {
            return (React.createElement("div", { ref: innerRef, className: css(commonStyles, styles.modifiers.splitButton, (splitButtonOptions === null || splitButtonOptions === void 0 ? void 0 : splitButtonOptions.variant) === 'action' && styles.modifiers.action) }, splitButtonOptions === null || splitButtonOptions === void 0 ? void 0 :
                splitButtonOptions.items,
                React.createElement("button", Object.assign({ className: css(styles.menuToggleButton), type: "button", "aria-expanded": isExpanded, "aria-label": ariaLabel, disabled: isDisabled, onClick: onClick }, otherProps), toggleControls)));
        }
        return (React.createElement("button", Object.assign({ className: css(commonStyles), type: "button", "aria-label": ariaLabel, "aria-expanded": isExpanded, ref: innerRef, disabled: isDisabled, onClick: onClick }, componentProps)));
    }
}
MenuToggleBase.defaultProps = {
    className: '',
    isExpanded: false,
    isDisabled: false,
    isFullWidth: false,
    isFullHeight: false
};
export const MenuToggle = React.forwardRef((props, ref) => (React.createElement(MenuToggleBase, Object.assign({ innerRef: ref }, props))));
MenuToggle.displayName = 'MenuToggle';
//# sourceMappingURL=MenuToggle.js.map