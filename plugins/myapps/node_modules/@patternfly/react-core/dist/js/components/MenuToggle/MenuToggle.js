"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuToggle = exports.MenuToggleBase = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const menu_toggle_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/MenuToggle/menu-toggle"));
const react_styles_1 = require("@patternfly/react-styles");
const caret_down_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/caret-down-icon'));
class MenuToggleBase extends React.Component {
    constructor() {
        super(...arguments);
        this.displayName = 'MenuToggleBase';
    }
    render() {
        const _a = this.props, { children, className, icon, badge, isExpanded, isDisabled, isFullHeight, isFullWidth, splitButtonOptions, variant, innerRef, onClick, 'aria-label': ariaLabel } = _a, otherProps = tslib_1.__rest(_a, ["children", "className", "icon", "badge", "isExpanded", "isDisabled", "isFullHeight", "isFullWidth", "splitButtonOptions", "variant", "innerRef", "onClick", 'aria-label']);
        const isPlain = variant === 'plain';
        const isPlainText = variant === 'plainText';
        const isTypeahead = variant === 'typeahead';
        const toggleControls = (React.createElement("span", { className: (0, react_styles_1.css)(menu_toggle_1.default.menuToggleControls) },
            React.createElement("span", { className: (0, react_styles_1.css)(menu_toggle_1.default.menuToggleToggleIcon) },
                React.createElement(caret_down_icon_1.default, { "aria-hidden": true }))));
        const content = (React.createElement(React.Fragment, null,
            icon && React.createElement("span", { className: (0, react_styles_1.css)(menu_toggle_1.default.menuToggleIcon) }, icon),
            isTypeahead ? children : React.createElement("span", { className: (0, react_styles_1.css)(menu_toggle_1.default.menuToggleText) }, children),
            React.isValidElement(badge) && React.createElement("span", { className: (0, react_styles_1.css)(menu_toggle_1.default.menuToggleCount) }, badge),
            isTypeahead ? (React.createElement("button", { type: "button", className: (0, react_styles_1.css)(menu_toggle_1.default.menuToggleButton), "aria-expanded": isExpanded, onClick: onClick, "aria-label": "Menu toggle" }, toggleControls)) : (toggleControls)));
        const commonStyles = (0, react_styles_1.css)(menu_toggle_1.default.menuToggle, isExpanded && menu_toggle_1.default.modifiers.expanded, variant === 'primary' && menu_toggle_1.default.modifiers.primary, variant === 'secondary' && menu_toggle_1.default.modifiers.secondary, (isPlain || isPlainText) && menu_toggle_1.default.modifiers.plain, isPlainText && menu_toggle_1.default.modifiers.text, isFullHeight && menu_toggle_1.default.modifiers.fullHeight, isFullWidth && menu_toggle_1.default.modifiers.fullWidth, isDisabled && menu_toggle_1.default.modifiers.disabled, className);
        const componentProps = Object.assign(Object.assign({ children: isPlain ? children : content }, (isDisabled && { disabled: true })), otherProps);
        if (isTypeahead) {
            return (React.createElement("div", Object.assign({ ref: innerRef, className: (0, react_styles_1.css)(commonStyles, menu_toggle_1.default.modifiers.typeahead) }, componentProps)));
        }
        if (splitButtonOptions) {
            return (React.createElement("div", { ref: innerRef, className: (0, react_styles_1.css)(commonStyles, menu_toggle_1.default.modifiers.splitButton, (splitButtonOptions === null || splitButtonOptions === void 0 ? void 0 : splitButtonOptions.variant) === 'action' && menu_toggle_1.default.modifiers.action) }, splitButtonOptions === null || splitButtonOptions === void 0 ? void 0 :
                splitButtonOptions.items,
                React.createElement("button", Object.assign({ className: (0, react_styles_1.css)(menu_toggle_1.default.menuToggleButton), type: "button", "aria-expanded": isExpanded, "aria-label": ariaLabel, disabled: isDisabled, onClick: onClick }, otherProps), toggleControls)));
        }
        return (React.createElement("button", Object.assign({ className: (0, react_styles_1.css)(commonStyles), type: "button", "aria-label": ariaLabel, "aria-expanded": isExpanded, ref: innerRef, disabled: isDisabled, onClick: onClick }, componentProps)));
    }
}
exports.MenuToggleBase = MenuToggleBase;
MenuToggleBase.defaultProps = {
    className: '',
    isExpanded: false,
    isDisabled: false,
    isFullWidth: false,
    isFullHeight: false
};
exports.MenuToggle = React.forwardRef((props, ref) => (React.createElement(MenuToggleBase, Object.assign({ innerRef: ref }, props))));
exports.MenuToggle.displayName = 'MenuToggle';
//# sourceMappingURL=MenuToggle.js.map