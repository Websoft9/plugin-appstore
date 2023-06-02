"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGroup = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const input_group_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/InputGroup/input-group"));
const react_styles_1 = require("@patternfly/react-styles");
const FormSelect_1 = require("../FormSelect");
const TextArea_1 = require("../TextArea");
const TextInput_1 = require("../TextInput");
const InputGroup = (_a) => {
    var { className = '', children, innerRef } = _a, props = tslib_1.__rest(_a, ["className", "children", "innerRef"]);
    const formCtrls = [FormSelect_1.FormSelect, TextArea_1.TextArea, TextInput_1.TextInput].map(comp => comp.displayName);
    const idItem = React.Children.toArray(children).find((child) => !formCtrls.includes(child.type.displayName) && child.props.id);
    const ref = React.useRef(null);
    const inputGroupRef = innerRef || ref;
    return (React.createElement("div", Object.assign({ ref: inputGroupRef, className: (0, react_styles_1.css)(input_group_1.default.inputGroup, className) }, props), idItem
        ? React.Children.map(children, (child) => !formCtrls.includes(child.type.displayName) || child.props['aria-describedby']
            ? child
            : React.cloneElement(child, {
                'aria-describedby': child.props['aria-describedby'] === '' ? undefined : idItem.props.id
            }))
        : children));
};
exports.InputGroup = InputGroup;
exports.InputGroup.displayName = 'InputGroup';
//# sourceMappingURL=InputGroup.js.map