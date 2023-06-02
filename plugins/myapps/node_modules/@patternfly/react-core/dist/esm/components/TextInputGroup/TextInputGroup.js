import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
export const TextInputGroupContext = React.createContext({
    isDisabled: false
});
export const TextInputGroup = (_a) => {
    var { children, className, isDisabled, isPlain, innerRef } = _a, props = __rest(_a, ["children", "className", "isDisabled", "isPlain", "innerRef"]);
    const ref = React.useRef(null);
    const textInputGroupRef = innerRef || ref;
    return (React.createElement(TextInputGroupContext.Provider, { value: { isDisabled } },
        React.createElement("div", Object.assign({ ref: textInputGroupRef, className: css(styles.textInputGroup, isDisabled && styles.modifiers.disabled, isPlain && styles.modifiers.plain, className) }, props), children)));
};
TextInputGroup.displayName = 'TextInputGroup';
//# sourceMappingURL=TextInputGroup.js.map