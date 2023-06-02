"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownToggleCheckbox = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const dropdown_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Dropdown/dropdown"));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_1 = require("../../helpers");
const Spinner_1 = require("../Spinner");
class DropdownToggleCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            var _a, _b;
            (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, event.target.checked, event);
        };
        this.calculateChecked = () => {
            const { isChecked, checked } = this.props;
            if (isChecked === null) {
                // return false here and the indeterminate state will be set to true through the ref
                return false;
            }
            else if (isChecked !== undefined) {
                return isChecked;
            }
            return checked;
        };
        this.state = {
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(DropdownToggleCheckbox.displayName)
        };
    }
    render() {
        const _a = this.props, { className, isValid, isDisabled, isChecked, isInProgress = false, defaultProgressAriaLabel, defaultProgressAriaValueText = 'Loading...', children, ouiaId, ouiaSafe, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onChange, checked } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = tslib_1.__rest(_a, ["className", "isValid", "isDisabled", "isChecked", "isInProgress", "defaultProgressAriaLabel", "defaultProgressAriaValueText", "children", "ouiaId", "ouiaSafe", "onChange", "checked"]);
        const spinner = (React.createElement(Spinner_1.Spinner, { diameter: "1em", isSVG: true, "aria-valuetext": defaultProgressAriaValueText, "aria-live": "polite", "aria-label": defaultProgressAriaLabel }));
        const text = children && (React.createElement("span", { className: (0, react_styles_1.css)(dropdown_1.default.dropdownToggleText, className), "aria-hidden": "true", id: `${props.id}-text` }, children));
        return (React.createElement("label", { className: (0, react_styles_1.css)(dropdown_1.default.dropdownToggleCheck, isInProgress && dropdown_1.default.modifiers.inProgress, className), htmlFor: props.id },
            React.createElement("input", Object.assign({}, props, (this.calculateChecked() !== undefined && { onChange: this.handleChange }), { type: "checkbox", ref: elem => elem && (elem.indeterminate = isChecked === null), "aria-invalid": !isValid, disabled: isDisabled, checked: this.calculateChecked() }, (0, helpers_1.getOUIAProps)(DropdownToggleCheckbox.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))),
            isInProgress && React.createElement("span", { className: (0, react_styles_1.css)(dropdown_1.default.dropdownToggleProgress, className) }, spinner),
            text));
    }
}
exports.DropdownToggleCheckbox = DropdownToggleCheckbox;
DropdownToggleCheckbox.displayName = 'DropdownToggleCheckbox';
DropdownToggleCheckbox.defaultProps = {
    className: '',
    isValid: true,
    isDisabled: false,
    onChange: () => undefined
};
//# sourceMappingURL=DropdownToggleCheckbox.js.map