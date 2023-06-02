"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInput = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const number_input_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/NumberInput/number-input"));
const react_styles_1 = require("@patternfly/react-styles");
const minus_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/minus-icon'));
const plus_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/plus-icon'));
const InputGroup_1 = require("../InputGroup");
const Button_1 = require("../Button");
const helpers_1 = require("../../helpers");
const TextInput_1 = require("../TextInput");
const defaultKeyDownHandler = (args) => (event) => {
    if (helpers_1.KeyTypes.ArrowUp === event.key && args.onPlus) {
        event.preventDefault();
        args.onPlus(null, args.inputName);
    }
    if (helpers_1.KeyTypes.ArrowDown === event.key && args.onMinus) {
        event.preventDefault();
        args.onMinus(null, args.inputName);
    }
};
const NumberInput = (_a) => {
    var { value = 0, className, widthChars, isDisabled = false, validated = helpers_1.ValidatedOptions.default, onMinus = () => { }, onChange, onBlur, onPlus = () => { }, unit, unitPosition = 'after', min, max, inputName, inputAriaLabel = 'Input', minusBtnAriaLabel = 'Minus', plusBtnAriaLabel = 'Plus', inputProps, minusBtnProps, plusBtnProps, allowEmptyInput = false } = _a, props = tslib_1.__rest(_a, ["value", "className", "widthChars", "isDisabled", "validated", "onMinus", "onChange", "onBlur", "onPlus", "unit", "unitPosition", "min", "max", "inputName", "inputAriaLabel", "minusBtnAriaLabel", "plusBtnAriaLabel", "inputProps", "minusBtnProps", "plusBtnProps", "allowEmptyInput"]);
    if (!allowEmptyInput) {
        value = value || 0;
    }
    const numberInputUnit = React.createElement("div", { className: (0, react_styles_1.css)(number_input_1.default.numberInputUnit) }, unit);
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
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(number_input_1.default.numberInput, validated !== 'default' && number_input_1.default.modifiers.status, className) }, (widthChars && {
        style: Object.assign({ '--pf-c-number-input--c-form-control--width-chars': widthChars }, props.style)
    }), props),
        unit && unitPosition === 'before' && numberInputUnit,
        React.createElement(InputGroup_1.InputGroup, null,
            React.createElement(Button_1.Button, Object.assign({ variant: "control", "aria-label": minusBtnAriaLabel, isDisabled: isDisabled || value <= min, onClick: evt => onMinus(evt, inputName) }, minusBtnProps),
                React.createElement("span", { className: (0, react_styles_1.css)(number_input_1.default.numberInputIcon) },
                    React.createElement(minus_icon_1.default, { "aria-hidden": "true" }))),
            React.createElement(TextInput_1.TextInput, Object.assign({}, inputProps, { type: "number", value: value, name: inputName, "aria-label": inputAriaLabel }, (isDisabled && { isDisabled }), (onChange && { onChange: (value, event) => onChange(event) }), { onBlur: handleBlur }, (!onChange && { isReadOnly: true }), { onKeyDown: keyDownHandler, validated: validated })),
            React.createElement(Button_1.Button, Object.assign({ variant: "control", "aria-label": plusBtnAriaLabel, isDisabled: isDisabled || value >= max, onClick: evt => onPlus(evt, inputName) }, plusBtnProps),
                React.createElement("span", { className: (0, react_styles_1.css)(number_input_1.default.numberInputIcon) },
                    React.createElement(plus_icon_1.default, { "aria-hidden": "true" })))),
        unit && unitPosition === 'after' && numberInputUnit));
};
exports.NumberInput = NumberInput;
exports.NumberInput.displayName = 'NumberInput';
//# sourceMappingURL=NumberInput.js.map