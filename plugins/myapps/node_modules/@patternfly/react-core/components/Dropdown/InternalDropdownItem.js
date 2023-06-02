import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { DropdownContext } from './dropdownConstants';
import { KEYHANDLER_DIRECTION } from '../../helpers/constants';
import { preventedEvents } from '../../helpers/util';
import { Tooltip } from '../Tooltip';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
export class InternalDropdownItem extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.additionalRef = React.createRef();
        this.getInnerNode = (node) => (node && node.childNodes && node.childNodes.length ? node.childNodes[0] : node);
        this.onKeyDown = (event) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            // Detected key press on this item, notify the menu parent so that the appropriate item can be focused
            const innerIndex = event.target === this.ref.current ? 0 : 1;
            if (!this.props.customChild) {
                event.preventDefault();
            }
            if (event.key === 'ArrowUp') {
                (_b = (_a = this.props.context) === null || _a === void 0 ? void 0 : _a.keyHandler) === null || _b === void 0 ? void 0 : _b.call(_a, this.props.index, innerIndex, KEYHANDLER_DIRECTION.UP);
                event.stopPropagation();
            }
            else if (event.key === 'ArrowDown') {
                (_d = (_c = this.props.context) === null || _c === void 0 ? void 0 : _c.keyHandler) === null || _d === void 0 ? void 0 : _d.call(_c, this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN);
                event.stopPropagation();
            }
            else if (event.key === 'ArrowRight') {
                (_f = (_e = this.props.context) === null || _e === void 0 ? void 0 : _e.keyHandler) === null || _f === void 0 ? void 0 : _f.call(_e, this.props.index, innerIndex, KEYHANDLER_DIRECTION.RIGHT);
                event.stopPropagation();
            }
            else if (event.key === 'ArrowLeft') {
                (_h = (_g = this.props.context) === null || _g === void 0 ? void 0 : _g.keyHandler) === null || _h === void 0 ? void 0 : _h.call(_g, this.props.index, innerIndex, KEYHANDLER_DIRECTION.LEFT);
                event.stopPropagation();
            }
            else if (event.key === 'Enter' || event.key === ' ') {
                event.target.click();
                this.props.enterTriggersArrowDown &&
                    ((_k = (_j = this.props.context) === null || _j === void 0 ? void 0 : _j.keyHandler) === null || _k === void 0 ? void 0 : _k.call(_j, this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN));
            }
        };
        this.componentRef = (element) => {
            this.ref.current = element;
            const { component } = this.props;
            const ref = component.ref;
            if (ref) {
                if (typeof ref === 'function') {
                    ref(element);
                }
                else {
                    ref.current = element;
                }
            }
        };
    }
    componentDidMount() {
        var _a;
        const { context, index, isDisabled, role, customChild, autoFocus } = this.props;
        const customRef = customChild ? this.getInnerNode(this.ref.current) : this.ref.current;
        (_a = context === null || context === void 0 ? void 0 : context.sendRef) === null || _a === void 0 ? void 0 : _a.call(context, index, [customRef, customChild ? customRef : this.additionalRef.current], isDisabled, role === 'separator');
        autoFocus && setTimeout(() => customRef.focus());
    }
    componentDidUpdate() {
        var _a;
        const { context, index, isDisabled, role, customChild } = this.props;
        const customRef = customChild ? this.getInnerNode(this.ref.current) : this.ref.current;
        (_a = context === null || context === void 0 ? void 0 : context.sendRef) === null || _a === void 0 ? void 0 : _a.call(context, index, [customRef, customChild ? customRef : this.additionalRef.current], isDisabled, role === 'separator');
    }
    extendAdditionalChildRef() {
        const { additionalChild } = this.props;
        return React.cloneElement(additionalChild, {
            ref: this.additionalRef
        });
    }
    render() {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        const _a = this.props, { className, children, context, onClick, component, role, isDisabled, isAriaDisabled, isPlainText, index, href, tooltip, tooltipProps, id, componentID, listItemClassName, additionalChild, customChild, enterTriggersArrowDown, icon, autoFocus, styleChildren, description, inoperableEvents } = _a, additionalProps = __rest(_a, ["className", "children", "context", "onClick", "component", "role", "isDisabled", "isAriaDisabled", "isPlainText", "index", "href", "tooltip", "tooltipProps", "id", "componentID", "listItemClassName", "additionalChild", "customChild", "enterTriggersArrowDown", "icon", "autoFocus", "styleChildren", "description", "inoperableEvents"]);
        /* eslint-enable @typescript-eslint/no-unused-vars */
        let classes = css(icon && styles.modifiers.icon, isAriaDisabled && styles.modifiers.ariaDisabled, className);
        if (component === 'a') {
            additionalProps['aria-disabled'] = isDisabled || isAriaDisabled;
        }
        else if (component === 'button') {
            additionalProps['aria-disabled'] = isDisabled || isAriaDisabled;
            additionalProps.type = additionalProps.type || 'button';
        }
        const renderWithTooltip = (childNode) => tooltip ? (React.createElement(Tooltip, Object.assign({ content: tooltip }, tooltipProps), childNode)) : (childNode);
        const renderClonedComponent = (element) => React.cloneElement(element, Object.assign(Object.assign({}, (styleChildren && {
            className: css(element.props.className, classes)
        })), (this.props.role !== 'separator' && { role, ref: this.componentRef })));
        const renderDefaultComponent = (tag) => {
            const Component = tag;
            const componentContent = description ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: styles.dropdownMenuItemMain },
                    icon && React.createElement("span", { className: css(styles.dropdownMenuItemIcon) }, icon),
                    children),
                React.createElement("div", { className: styles.dropdownMenuItemDescription }, description))) : (React.createElement(React.Fragment, null,
                icon && React.createElement("span", { className: css(styles.dropdownMenuItemIcon) }, icon),
                children));
            return (React.createElement(Component, Object.assign({}, additionalProps, (isDisabled || isAriaDisabled ? preventedEvents(inoperableEvents) : null), { href: href, ref: this.ref, className: classes, id: componentID, role: role }), componentContent));
        };
        return (React.createElement(DropdownContext.Consumer, null, ({ onSelect, itemClass, disabledClass, plainTextClass }) => {
            if (this.props.role !== 'separator') {
                classes = css(classes, isDisabled && disabledClass, isPlainText && plainTextClass, itemClass, description && styles.modifiers.description);
            }
            if (customChild) {
                return React.cloneElement(customChild, {
                    ref: this.ref,
                    onKeyDown: this.onKeyDown
                });
            }
            return (React.createElement("li", Object.assign({}, (listItemClassName && { className: listItemClassName }), { role: "none", onKeyDown: this.onKeyDown, onClick: (event) => {
                    if (!isDisabled && !isAriaDisabled) {
                        onClick === null || onClick === void 0 ? void 0 : onClick(event);
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect(event);
                    }
                }, id: id }),
                renderWithTooltip(React.isValidElement(component)
                    ? renderClonedComponent(component)
                    : renderDefaultComponent(component)),
                additionalChild && this.extendAdditionalChildRef()));
        }));
    }
}
InternalDropdownItem.displayName = 'InternalDropdownItem';
InternalDropdownItem.defaultProps = {
    className: '',
    component: 'a',
    role: 'none',
    isDisabled: false,
    isPlainText: false,
    tooltipProps: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: (event) => undefined,
    index: -1,
    context: {
        keyHandler: () => { },
        sendRef: () => { }
    },
    enterTriggersArrowDown: false,
    icon: null,
    styleChildren: true,
    description: null,
    inoperableEvents: ['onClick', 'onKeyPress']
};
//# sourceMappingURL=InternalDropdownItem.js.map