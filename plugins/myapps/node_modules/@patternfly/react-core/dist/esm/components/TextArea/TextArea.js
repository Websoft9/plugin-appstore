import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import heightToken from '@patternfly/react-tokens/dist/esm/c_form_control_textarea_Height';
import { css } from '@patternfly/react-styles';
import { capitalize, ValidatedOptions, canUseDOM } from '../../helpers';
export var TextAreResizeOrientation;
(function (TextAreResizeOrientation) {
    TextAreResizeOrientation["horizontal"] = "horizontal";
    TextAreResizeOrientation["vertical"] = "vertical";
    TextAreResizeOrientation["both"] = "both";
})(TextAreResizeOrientation || (TextAreResizeOrientation = {}));
export var TextAreaReadOnlyVariant;
(function (TextAreaReadOnlyVariant) {
    TextAreaReadOnlyVariant["default"] = "default";
    TextAreaReadOnlyVariant["plain"] = "plain";
})(TextAreaReadOnlyVariant || (TextAreaReadOnlyVariant = {}));
export class TextAreaBase extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.setAutoHeight = (field) => {
            field.style.setProperty(heightToken.name, 'inherit');
            const computed = window.getComputedStyle(field);
            // Calculate the height
            const height = parseInt(computed.getPropertyValue('border-top-width')) +
                parseInt(computed.getPropertyValue('padding-top')) +
                field.scrollHeight +
                parseInt(computed.getPropertyValue('padding-bottom')) +
                parseInt(computed.getPropertyValue('border-bottom-width'));
            field.style.setProperty(heightToken.name, `${height}px`);
        };
        this.handleChange = (event) => {
            // https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
            const field = event.currentTarget;
            if (this.props.autoResize && canUseDOM) {
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
        if (this.props.autoResize && canUseDOM) {
            const field = inputRef.current;
            this.setAutoHeight(field);
        }
    }
    render() {
        const _a = this.props, { className, value, validated, isRequired, isDisabled, isIconSprite, isReadOnly, readOnlyVariant, resizeOrientation, innerRef, disabled, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        autoResize, onChange } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = __rest(_a, ["className", "value", "validated", "isRequired", "isDisabled", "isIconSprite", "isReadOnly", "readOnlyVariant", "resizeOrientation", "innerRef", "disabled", "autoResize", "onChange"]);
        const orientation = `resize${capitalize(resizeOrientation)}`;
        return (React.createElement("textarea", Object.assign({ className: css(styles.formControl, isIconSprite && styles.modifiers.iconSprite, readOnlyVariant === 'plain' && styles.modifiers.plain, className, resizeOrientation !== TextAreResizeOrientation.both && styles.modifiers[orientation], validated === ValidatedOptions.success && styles.modifiers.success, validated === ValidatedOptions.warning && styles.modifiers.warning), onChange: this.handleChange }, (typeof this.props.defaultValue !== 'string' && { value }), { "aria-invalid": validated === ValidatedOptions.error, required: isRequired, disabled: isDisabled || disabled, readOnly: !!readOnlyVariant || isReadOnly, ref: innerRef || this.inputRef }, props)));
    }
}
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
export const TextArea = React.forwardRef((props, ref) => (React.createElement(TextAreaBase, Object.assign({}, props, { innerRef: ref }))));
TextArea.displayName = 'TextArea';
//# sourceMappingURL=TextArea.js.map