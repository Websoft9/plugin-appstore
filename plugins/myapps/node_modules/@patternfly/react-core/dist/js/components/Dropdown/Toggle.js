"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const dropdown_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Dropdown/dropdown"));
const dropdownConstants_1 = require("./dropdownConstants");
const react_styles_1 = require("@patternfly/react-styles");
const constants_1 = require("../../helpers/constants");
const buttonVariantStyles = {
    default: '',
    primary: dropdown_1.default.modifiers.primary,
    secondary: dropdown_1.default.modifiers.secondary
};
class Toggle extends React.Component {
    constructor() {
        super(...arguments);
        this.buttonRef = React.createRef();
        this.componentDidMount = () => {
            document.addEventListener('click', this.onDocClick);
            document.addEventListener('touchstart', this.onDocClick);
            document.addEventListener('keydown', this.onEscPress);
        };
        this.componentWillUnmount = () => {
            document.removeEventListener('click', this.onDocClick);
            document.removeEventListener('touchstart', this.onDocClick);
            document.removeEventListener('keydown', this.onEscPress);
        };
        this.onDocClick = (event) => {
            const { isOpen, parentRef, onToggle, getMenuRef } = this.props;
            const menuRef = getMenuRef && getMenuRef();
            const clickedOnToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const clickedWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
            if (isOpen && !(clickedOnToggle || clickedWithinMenu)) {
                onToggle === null || onToggle === void 0 ? void 0 : onToggle(false, event);
            }
        };
        this.onEscPress = (event) => {
            var _a, _b, _c;
            const { parentRef, getMenuRef } = this.props;
            const menuRef = getMenuRef && getMenuRef();
            const escFromToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const escFromWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
            if (this.props.isOpen &&
                (event.key === constants_1.KeyTypes.Escape || event.key === 'Tab') &&
                (escFromToggle || escFromWithinMenu)) {
                (_b = (_a = this.props).onToggle) === null || _b === void 0 ? void 0 : _b.call(_a, false, event);
                (_c = this.buttonRef.current) === null || _c === void 0 ? void 0 : _c.focus();
            }
        };
        this.onKeyDown = (event) => {
            var _a, _b, _c, _d, _e, _f;
            if (event.key === 'Tab' && !this.props.isOpen) {
                return;
            }
            if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.props.isOpen) {
                if (!this.props.bubbleEvent) {
                    event.stopPropagation();
                }
                event.preventDefault();
                (_b = (_a = this.props).onToggle) === null || _b === void 0 ? void 0 : _b.call(_a, !this.props.isOpen, event);
            }
            else if ((event.key === 'Enter' || event.key === ' ') && !this.props.isOpen) {
                if (!this.props.bubbleEvent) {
                    event.stopPropagation();
                }
                event.preventDefault();
                (_d = (_c = this.props).onToggle) === null || _d === void 0 ? void 0 : _d.call(_c, !this.props.isOpen, event);
                (_f = (_e = this.props).onEnter) === null || _f === void 0 ? void 0 : _f.call(_e);
            }
        };
    }
    render() {
        const _a = this.props, { className, children, isOpen, isDisabled, isPlain, isText, isPrimary, isSplitButton, toggleVariant, onToggle, 'aria-haspopup': ariaHasPopup, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        isActive, bubbleEvent, onEnter, parentRef, getMenuRef, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        id, type } = _a, props = tslib_1.__rest(_a, ["className", "children", "isOpen", "isDisabled", "isPlain", "isText", "isPrimary", "isSplitButton", "toggleVariant", "onToggle", 'aria-haspopup', "isActive", "bubbleEvent", "onEnter", "parentRef", "getMenuRef", "id", "type"]);
        return (React.createElement(dropdownConstants_1.DropdownContext.Consumer, null, ({ toggleClass }) => (React.createElement("button", Object.assign({}, props, { id: id, ref: this.buttonRef, className: (0, react_styles_1.css)(isSplitButton ? dropdown_1.default.dropdownToggleButton : toggleClass || dropdown_1.default.dropdownToggle, isActive && dropdown_1.default.modifiers.active, isPlain && dropdown_1.default.modifiers.plain, isText && dropdown_1.default.modifiers.text, isPrimary && dropdown_1.default.modifiers.primary, toggleVariant && buttonVariantStyles[toggleVariant], className), type: type || 'button', onClick: event => onToggle === null || onToggle === void 0 ? void 0 : onToggle(!isOpen, event), "aria-expanded": isOpen, "aria-haspopup": ariaHasPopup, onKeyDown: event => this.onKeyDown(event), disabled: isDisabled }), children))));
    }
}
exports.Toggle = Toggle;
Toggle.displayName = 'Toggle';
Toggle.defaultProps = {
    className: '',
    isOpen: false,
    isActive: false,
    isDisabled: false,
    isPlain: false,
    isText: false,
    isPrimary: false,
    isSplitButton: false,
    onToggle: () => { },
    onEnter: () => { },
    bubbleEvent: false
};
//# sourceMappingURL=Toggle.js.map