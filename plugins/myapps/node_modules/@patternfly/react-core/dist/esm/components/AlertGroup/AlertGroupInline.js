import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';
export const AlertGroupInline = (_a) => {
    var { className, children, isToast, isLiveRegion, onOverflowClick, overflowMessage } = _a, rest = __rest(_a, ["className", "children", "isToast", "isLiveRegion", "onOverflowClick", "overflowMessage"]);
    return (React.createElement("ul", Object.assign({ "aria-live": isLiveRegion ? 'polite' : null, "aria-atomic": isLiveRegion ? false : null, className: css(styles.alertGroup, className, isToast ? styles.modifiers.toast : '') }, rest),
        React.Children.toArray(children).map((alert, index) => {
            var _a;
            return (React.createElement("li", { key: ((_a = alert.props) === null || _a === void 0 ? void 0 : _a.id) || index }, alert));
        }),
        overflowMessage && (React.createElement("li", null,
            React.createElement("button", { onClick: onOverflowClick, className: css(styles.alertGroupOverflowButton) }, overflowMessage)))));
};
AlertGroupInline.displayName = 'AlertGroupInline';
//# sourceMappingURL=AlertGroupInline.js.map