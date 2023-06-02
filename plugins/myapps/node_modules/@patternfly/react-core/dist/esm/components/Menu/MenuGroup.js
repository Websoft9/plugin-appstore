import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
const MenuGroupBase = (_a) => {
    var { children, className = '', label = '', titleId = '', innerRef, labelHeadingLevel: HeadingLevel = 'h1' } = _a, props = __rest(_a, ["children", "className", "label", "titleId", "innerRef", "labelHeadingLevel"]);
    const Wrapper = typeof label === 'function' ? label : HeadingLevel;
    return (React.createElement("section", Object.assign({}, props, { className: css('pf-c-menu__group', className), ref: innerRef }),
        React.createElement(React.Fragment, null,
            ['function', 'string'].includes(typeof label) ? (React.createElement(Wrapper, { className: css(styles.menuGroupTitle), id: titleId }, label)) : (label),
            children)));
};
export const MenuGroup = React.forwardRef((props, ref) => (React.createElement(MenuGroupBase, Object.assign({}, props, { innerRef: ref }))));
MenuGroup.displayName = 'MenuGroup';
//# sourceMappingURL=MenuGroup.js.map