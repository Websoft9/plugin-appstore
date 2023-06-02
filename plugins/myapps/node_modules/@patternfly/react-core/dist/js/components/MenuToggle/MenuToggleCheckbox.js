"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuToggleCheckbox = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const check_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Check/check"));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_1 = require("../../helpers");
class MenuToggleCheckbox extends React.Component {
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
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(MenuToggleCheckbox.displayName)
        };
    }
    render() {
        const _a = this.props, { className, isValid, isDisabled, isChecked, children, ouiaId, ouiaSafe, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onChange, defaultChecked, id } = _a, props = tslib_1.__rest(_a, ["className", "isValid", "isDisabled", "isChecked", "children", "ouiaId", "ouiaSafe", "onChange", "defaultChecked", "id"]);
        const text = children && (React.createElement("span", { className: (0, react_styles_1.css)(check_1.default.checkLabel, className), "aria-hidden": "true", id: id }, children));
        return (React.createElement("label", { className: (0, react_styles_1.css)(check_1.default.check, !children && check_1.default.modifiers.standalone, className), htmlFor: id },
            React.createElement("input", Object.assign({ className: (0, react_styles_1.css)(check_1.default.checkInput) }, (this.calculateChecked() !== undefined && { onChange: this.handleChange }), { name: id, type: "checkbox", ref: elem => elem && (elem.indeterminate = isChecked === null), "aria-invalid": !isValid, disabled: isDisabled }, (defaultChecked !== undefined ? { defaultChecked } : { checked: isChecked }), (0, helpers_1.getOUIAProps)(MenuToggleCheckbox.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props)),
            text));
    }
}
exports.MenuToggleCheckbox = MenuToggleCheckbox;
MenuToggleCheckbox.displayName = 'MenuToggleCheckbox';
MenuToggleCheckbox.defaultProps = {
    isValid: true,
    isDisabled: false,
    onChange: () => undefined
};
//# sourceMappingURL=MenuToggleCheckbox.js.map