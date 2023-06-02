"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = exports.TextAreaBase = exports.TextAreaReadOnlyVariant = exports.TextAreResizeOrientation = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const form_control_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/FormControl/form-control"));
const c_form_control_textarea_Height_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_form_control_textarea_Height'));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_1 = require("../../helpers");
var TextAreResizeOrientation;
(function (TextAreResizeOrientation) {
    TextAreResizeOrientation["horizontal"] = "horizontal";
    TextAreResizeOrientation["vertical"] = "vertical";
    TextAreResizeOrientation["both"] = "both";
})(TextAreResizeOrientation = exports.TextAreResizeOrientation || (exports.TextAreResizeOrientation = {}));
var TextAreaReadOnlyVariant;
(function (TextAreaReadOnlyVariant) {
    TextAreaReadOnlyVariant["default"] = "default";
    TextAreaReadOnlyVariant["plain"] = "plain";
})(TextAreaReadOnlyVariant = exports.TextAreaReadOnlyVariant || (exports.TextAreaReadOnlyVariant = {}));
class TextAreaBase extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.setAutoHeight = (field) => {
            field.style.setProperty(c_form_control_textarea_Height_1.default.name, 'inherit');
            const computed = window.getComputedStyle(field);
            // Calculate the height
            const height = parseInt(computed.getPropertyValue('border-top-width')) +
                parseInt(computed.getPropertyValue('padding-top')) +
                field.scrollHeight +
                parseInt(computed.getPropertyValue('padding-bottom')) +
                parseInt(computed.getPropertyValue('border-bottom-width'));
            field.style.setProperty(c_form_control_textarea_Height_1.default.name, `${height}px`);
        };
        this.handleChange = (event) => {
            // https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
            const field = event.currentTarget;
            if (this.props.autoResize && helpers_1.canUseDOM) {
                this.setAutoHeight(field);
            }
            if (this.props.onChange) {
                this.props.onChange(field.value, event);
            }
        };
        if (!props.id && !props['aria-label']) {
            // eslint-disable-next-line no-console
            console.error('TextArea: TextArea requires either an id or aria-label to be specified');
        }
    }
    componentDidMount() {
        const inputRef = this.props.innerRef || this.inputRef;
        if (this.props.autoResize && helpers_1.canUseDOM) {
            const field = inputRef.current;
            this.setAutoHeight(field);
        }
    }
    render() {
        const _a = this.props, { className, value, validated, isRequired, isDisabled, isIconSprite, isReadOnly, readOnlyVariant, resizeOrientation, innerRef, disabled, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        autoResize, onChange } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = tslib_1.__rest(_a, ["className", "value", "validated", "isRequired", "isDisabled", "isIconSprite", "isReadOnly", "readOnlyVariant", "resizeOrientation", "innerRef", "disabled", "autoResize", "onChange"]);
        const orientation = `resize${(0, helpers_1.capitalize)(resizeOrientation)}`;
        return (React.createElement("textarea", Object.assign({ className: (0, react_styles_1.css)(form_control_1.default.formControl, isIconSprite && form_control_1.default.modifiers.iconSprite, readOnlyVariant === 'plain' && form_control_1.default.modifiers.plain, className, resizeOrientation !== TextAreResizeOrientation.both && form_control_1.default.modifiers[orientation], validated === helpers_1.ValidatedOptions.success && form_control_1.default.modifiers.success, validated === helpers_1.ValidatedOptions.warning && form_control_1.default.modifiers.warning), onChange: this.handleChange }, (typeof this.props.defaultValue !== 'string' && { value }), { "aria-invalid": validated === helpers_1.ValidatedOptions.error, required: isRequired, disabled: isDisabled || disabled, readOnly: !!readOnlyVariant || isReadOnly, ref: innerRef || this.inputRef }, props)));
    }
}
exports.TextAreaBase = TextAreaBase;
TextAreaBase.displayName = 'TextArea';
TextAreaBase.defaultProps = {
    innerRef: React.createRef(),
    className: '',
    isRequired: false,
    isDisabled: false,
    isIconSprite: false,
    validated: 'default',
    resizeOrientation: 'both',
    'aria-label': null
};
exports.TextArea = React.forwardRef((props, ref) => (React.createElement(TextAreaBase, Object.assign({}, props, { innerRef: ref }))));
exports.TextArea.displayName = 'TextArea';
//# sourceMappingURL=TextArea.js.map