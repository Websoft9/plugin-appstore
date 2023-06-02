import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Check/check';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
export class MenuToggleCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event.target.checked, event);
        };
        this.calculateChecked = () => {
            const { isChecked, defaultChecked } = this.props;
            if (isChecked === null) {
                // return false here and the indeterminate state will be set to true through the ref
                return false;
            }
            else if (isChecked !== undefined) {
                return isChecked;
            }
            return defaultChecked;
        };
        this.state = {
            ouiaStateId: getDefaultOUIAId(MenuToggleCheckbox.displayName)
        };
    }
    render() {
        const _a = this.props, { className, isValid, isDisabled, isChecked, children, ouiaId, ouiaSafe, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onChange, defaultChecked, id } = _a, props = __rest(_a, ["className", "isValid", "isDisabled", "isChecked", "children", "ouiaId", "ouiaSafe", "onChange", "defaultChecked", "id"]);
        const text = children && (React.createElement("span", { className: css(styles.checkLabel, className), "aria-hidden": "true", id: id }, children));
        return (React.createElement("label", { className: css(styles.check, !children && styles.modifiers.standalone, className), htmlFor: id },
            React.createElement("input", Object.assign({ className: css(styles.checkInput) }, (this.calculateChecked() !== undefined && { onChange: this.handleChange }), { name: id, type: "checkbox", ref: elem => elem && (elem.indeterminate = isChecked === null), "aria-invalid": !isValid, disabled: isDisabled }, (defaultChecked !== undefined ? { defaultChecked } : { checked: isChecked }), getOUIAProps(MenuToggleCheckbox.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props)),
            text));
    }
}
MenuToggleCheckbox.displayName = 'MenuToggleCheckbox';
MenuToggleCheckbox.defaultProps = {
    isValid: true,
    isDisabled: false,
    onChange: () => undefined
};
//# sourceMappingURL=MenuToggleCheckbox.js.map