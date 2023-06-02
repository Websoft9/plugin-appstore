import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
import { Spinner } from '../Spinner';
export class DropdownToggleCheckbox extends React.Component {
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
            ouiaStateId: getDefaultOUIAId(DropdownToggleCheckbox.displayName)
        };
    }
    render() {
        const _a = this.props, { className, isValid, isDisabled, isChecked, isInProgress = false, defaultProgressAriaLabel, defaultProgressAriaValueText = 'Loading...', children, ouiaId, ouiaSafe, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onChange, checked } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = __rest(_a, ["className", "isValid", "isDisabled", "isChecked", "isInProgress", "defaultProgressAriaLabel", "defaultProgressAriaValueText", "children", "ouiaId", "ouiaSafe", "onChange", "checked"]);
        const spinner = (React.createElement(Spinner, { diameter: "1em", isSVG: true, "aria-valuetext": defaultProgressAriaValueText, "aria-live": "polite", "aria-label": defaultProgressAriaLabel }));
        const text = children && (React.createElement("span", { className: css(styles.dropdownToggleText, className), "aria-hidden": "true", id: `${props.id}-text` }, children));
        return (React.createElement("label", { className: css(styles.dropdownToggleCheck, isInProgress && styles.modifiers.inProgress, className), htmlFor: props.id },
            React.createElement("input", Object.assign({}, props, (this.calculateChecked() !== undefined && { onChange: this.handleChange }), { type: "checkbox", ref: elem => elem && (elem.indeterminate = isChecked === null), "aria-invalid": !isValid, disabled: isDisabled, checked: this.calculateChecked() }, getOUIAProps(DropdownToggleCheckbox.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))),
            isInProgress && React.createElement("span", { className: css(styles.dropdownToggleProgress, className) }, spinner),
            text));
    }
}
DropdownToggleCheckbox.displayName = 'DropdownToggleCheckbox';
DropdownToggleCheckbox.defaultProps = {
    className: '',
    isValid: true,
    isDisabled: false,
    onChange: () => undefined
};
//# sourceMappingURL=DropdownToggleCheckbox.js.map