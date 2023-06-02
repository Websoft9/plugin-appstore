import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';
export var TextListVariants;
(function (TextListVariants) {
    TextListVariants["ul"] = "ul";
    TextListVariants["ol"] = "ol";
    TextListVariants["dl"] = "dl";
})(TextListVariants || (TextListVariants = {}));
export const TextList = (_a) => {
    var { children = null, className = '', component = TextListVariants.ul, isPlain = false } = _a, props = __rest(_a, ["children", "className", "component", "isPlain"]);
    const Component = component;
    return (React.createElement(Component, Object.assign({}, props, { className: css(isPlain && styles.modifiers.plain, className) }), children));
};
TextList.displayName = 'TextList';
//# sourceMappingURL=TextList.js.map