import { __rest } from "tslib";
import * as React from 'react';
import { Title, TitleSizes } from '../Title';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Login/login';
export const LoginMainHeader = (_a) => {
    var { children = null, className = '', title = '', subtitle = '', headerUtilities = null } = _a, props = __rest(_a, ["children", "className", "title", "subtitle", "headerUtilities"]);
    return (React.createElement("header", Object.assign({ className: css(styles.loginMainHeader, className) }, props),
        title && (React.createElement(Title, { headingLevel: "h2", size: TitleSizes['3xl'] }, title)),
        subtitle && React.createElement("p", { className: css(styles.loginMainHeaderDesc) }, subtitle),
        headerUtilities && React.createElement("div", { className: css(styles.loginMainHeaderUtilities) }, headerUtilities),
        children));
};
LoginMainHeader.displayName = 'LoginMainHeader';
//# sourceMappingURL=LoginMainHeader.js.map