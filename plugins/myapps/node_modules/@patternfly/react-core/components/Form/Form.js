import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';
const FormBase = (_a) => {
    var { children = null, className = '', isHorizontal = false, isWidthLimited = false, maxWidth = '', innerRef } = _a, props = __rest(_a, ["children", "className", "isHorizontal", "isWidthLimited", "maxWidth", "innerRef"]);
    return (React.createElement("form", Object.assign({ noValidate: true }, (maxWidth && {
        style: Object.assign({ '--pf-c-form--m-limit-width--MaxWidth': maxWidth }, props.style)
    }), props, { className: css(styles.form, isHorizontal && styles.modifiers.horizontal, (isWidthLimited || maxWidth) && styles.modifiers.limitWidth, className), ref: innerRef }), children));
};
export const Form = React.forwardRef((props, ref) => React.createElement(FormBase, Object.assign({ innerRef: ref }, props)));
Form.displayName = 'Form';
//# sourceMappingURL=Form.js.map