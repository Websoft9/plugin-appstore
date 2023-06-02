import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/NumberInput/number-input';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import { InputGroup } from '../InputGroup';
import { Button } from '../Button';
import { KeyTypes, ValidatedOptions } from '../../helpers';
import { TextInput } from '../TextInput';
const defaultKeyDownHandler = (args) => (event) => {
    if (KeyTypes.ArrowUp === event.key && args.onPlus) {
        event.preventDefault();
        args.onPlus(null, args.inputName);
    }
    if (KeyTypes.ArrowDown === event.key && args.onMinus) {
        event.preventDefault();
        args.onMinus(null, args.inputName);
    }
};
export const NumberInput = (_a) => {
    var { value = 0, className, widthChars, isDisabled = false, validated = ValidatedOptions.default, onMinus = () => { }, onChange, onBlur, onPlus = () => { }, unit, unitPosition = 'after', min, max, inputName, inputAriaLabel = 'Input', minusBtnAriaLabel = 'Minus', plusBtnAriaLabel = 'Plus', inputProps, minusBtnProps, plusBtnProps, allowEmptyInput = false } = _a, props = __rest(_a, ["value", "className", "widthChars", "isDisabled", "validated", "onMinus", "onChange", "onBlur", "onPlus", "unit", "unitPosition", "min", "max", "inputName", "inputAriaLabel", "minusBtnAriaLabel", "plusBtnAriaLabel", "inputProps", "minusBtnProps", "plusBtnProps", "allowEmptyInput"]);
    if (!allowEmptyInput) {
        value = value || 0;
    }
    const numberInputUnit = React.createElement("div", { className: css(styles.numberInputUnit) }, unit);
    const keyDownHandler = inputProps && inputProps.onKeyDown ? inputProps.onKeyDown : defaultKeyDownHandler({ inputName, onMinus, onPlus });
    const handleBlur = (event) => {
        event.target.value = Number(event.target.value).toString();
        if (onChange) {
            onChange(event);
        }
        if (onBlur) {
            onBlur(event);
        }
    };
    return (React.createElement("div", Object.assign({ className: css(styles.numberInput, validated !== 'default' && styles.modifiers.status, className) }, (widthChars && {
        style: Object.assign({ '--pf-c-number-input--c-form-control--width-chars': widthChars }, props.style)
    }), props),
        unit && unitPosition === 'before' && numberInputUnit,
        React.createElement(InputGroup, null,
            React.createElement(Button, Object.assign({ variant: "control", "aria-label": minusBtnAriaLabel, isDisabled: isDisabled || value <= min, onClick: evt => onMinus(evt, inputName) }, minusBtnProps),
                React.createElement("span", { className: css(styles.numberInputIcon) },
                    React.createElement(MinusIcon, { "aria-hidden": "true" }))),
            React.createElement(TextInput, Object.assign({}, inputProps, { type: "number", value: value, name: inputName, "aria-label": inputAriaLabel }, (isDisabled && { isDisabled }), (onChange && { onChange: (value, event) => onChange(event) }), { onBlur: handleBlur }, (!onChange && { isReadOnly: true }), { onKeyDown: keyDownHandler, validated: validated })),
            React.createElement(Button, Object.assign({ variant: "control", "aria-label": plusBtnAriaLabel, isDisabled: isDisabled || value >= max, onClick: evt => onPlus(evt, inputName) }, plusBtnProps),
                React.createElement("span", { className: css(styles.numberInputIcon) },
                    React.createElement(PlusIcon, { "aria-hidden": "true" })))),
        unit && unitPosition === 'after' && numberInputUnit));
};
NumberInput.displayName = 'NumberInput';
//# sourceMappingURL=NumberInput.js.map