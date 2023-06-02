import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent } from '../../../components/Menu';
import { Popper } from '../../../helpers/Popper/Popper';
import { getOUIAProps, getDefaultOUIAId } from '../../../helpers';
const SelectBase = (_a) => {
    var { children, className, onSelect, isOpen, selected, toggle, onOpenChange, isPlain, minWidth, innerRef, zIndex = 9999, role = 'listbox' } = _a, props = __rest(_a, ["children", "className", "onSelect", "isOpen", "selected", "toggle", "onOpenChange", "isPlain", "minWidth", "innerRef", "zIndex", "role"]);
    const localMenuRef = React.useRef();
    const toggleRef = React.useRef();
    const containerRef = React.useRef();
    const menuRef = innerRef || localMenuRef;
    React.useEffect(() => {
        const handleMenuKeys = (event) => {
            var _a, _b, _c;
            // Close the menu on tab or escape if onOpenChange is provided
            if ((isOpen && onOpenChange && ((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) ||
                ((_b = toggleRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                if (event.key === 'Escape' || event.key === 'Tab') {
                    onOpenChange(false);
                    (_c = toggleRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                }
            }
        };
        const handleClick = (event) => {
            var _a, _b, _c;
            // toggle was clicked open via keyboard, focus on first menu item
            if (isOpen && ((_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && event.detail === 0) {
                setTimeout(() => {
                    var _a;
                    const firstElement = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('li button:not(:disabled),li input:not(:disabled)');
                    firstElement && firstElement.focus();
                }, 0);
            }
            // If the event is not on the toggle and onOpenChange callback is provided, close the menu
            if (isOpen && onOpenChange && !((_b = toggleRef === null || toggleRef === void 0 ? void 0 : toggleRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                if (isOpen && !((_c = menuRef.current) === null || _c === void 0 ? void 0 : _c.contains(event.target))) {
                    onOpenChange(false);
                }
            }
        };
        window.addEventListener('keydown', handleMenuKeys);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('keydown', handleMenuKeys);
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen, menuRef, onOpenChange]);
    const menu = (React.createElement(Menu, Object.assign({ role: role, className: css(className), ref: menuRef, onSelect: (event, itemId) => onSelect(event, itemId), isPlain: isPlain, selected: selected }, (minWidth && {
        style: {
            '--pf-c-menu--MinWidth': minWidth
        }
    }), getOUIAProps(Select.displayName, props.ouiaId !== undefined ? props.ouiaId : getDefaultOUIAId(Select.displayName), props.ouiaSafe !== undefined ? props.ouiaSafe : true), props),
        React.createElement(MenuContent, null, children)));
    return (React.createElement("div", { ref: containerRef },
        React.createElement(Popper, { trigger: toggle(toggleRef), removeFindDomNode: true, popper: menu, appendTo: containerRef.current || undefined, isVisible: isOpen, zIndex: zIndex })));
};
export const Select = React.forwardRef((props, ref) => (React.createElement(SelectBase, Object.assign({ innerRef: ref }, props))));
Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map