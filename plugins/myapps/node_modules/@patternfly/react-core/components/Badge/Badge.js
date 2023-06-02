import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Badge/badge';
export const Badge = (_a) => {
    var { isRead = false, className = '', children = '', screenReaderText } = _a, props = __rest(_a, ["isRead", "className", "children", "screenReaderText"]);
    return (React.createElement("span", Object.assign({}, props, { className: css(styles.badge, (isRead ? styles.modifiers.read : styles.modifiers.unread), className) }),
        children,
        screenReaderText && React.createElement("span", { className: "pf-screen-reader" }, screenReaderText)));
};
Badge.displayName = 'Badge';
//# sourceMappingURL=Badge.js.map