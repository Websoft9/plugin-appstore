"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Menu_1 = require("../../../components/Menu");
const Popper_1 = require("../../../helpers/Popper/Popper");
const helpers_1 = require("../../../helpers");
const SelectBase = (_a) => {
    var { children, className, onSelect, isOpen, selected, toggle, onOpenChange, isPlain, minWidth, innerRef, zIndex = 9999, role = 'listbox' } = _a, props = tslib_1.__rest(_a, ["children", "className", "onSelect", "isOpen", "selected", "toggle", "onOpenChange", "isPlain", "minWidth", "innerRef", "zIndex", "role"]);
    const localMenuRef = react_1.default.useRef();
    const toggleRef = react_1.default.useRef();
    const containerRef = react_1.default.useRef();
    const menuRef = innerRef || localMenuRef;
    react_1.default.useEffect(() => {
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
    const menu = (react_1.default.createElement(Menu_1.Menu, Object.assign({ role: role, className: (0, react_styles_1.css)(className), ref: menuRef, onSelect: (event, itemId) => onSelect(event, itemId), isPlain: isPlain, selected: selected }, (minWidth && {
        style: {
            '--pf-c-menu--MinWidth': minWidth
        }
    }), (0, helpers_1.getOUIAProps)(exports.Select.displayName, props.ouiaId !== undefined ? props.ouiaId : (0, helpers_1.getDefaultOUIAId)(exports.Select.displayName), props.ouiaSafe !== undefined ? props.ouiaSafe : true), props),
        react_1.default.createElement(Menu_1.MenuContent, null, children)));
    return (react_1.default.createElement("div", { ref: containerRef },
        react_1.default.createElement(Popper_1.Popper, { trigger: toggle(toggleRef), removeFindDomNode: true, popper: menu, appendTo: containerRef.current || undefined, isVisible: isOpen, zIndex: zIndex })));
};
exports.Select = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(SelectBase, Object.assign({ innerRef: ref }, props))));
exports.Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map