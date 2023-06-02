"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertGroupInline = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const alert_group_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/AlertGroup/alert-group"));
const AlertGroupInline = (_a) => {
    var { className, children, isToast, isLiveRegion, onOverflowClick, overflowMessage } = _a, rest = tslib_1.__rest(_a, ["className", "children", "isToast", "isLiveRegion", "onOverflowClick", "overflowMessage"]);
    return (React.createElement("ul", Object.assign({ "aria-live": isLiveRegion ? 'polite' : null, "aria-atomic": isLiveRegion ? false : null, className: (0, react_styles_1.css)(alert_group_1.default.alertGroup, className, isToast ? alert_group_1.default.modifiers.toast : '') }, rest),
        React.Children.toArray(children).map((alert, index) => {
            var _a;
            return (React.createElement("li", { key: ((_a = alert.props) === null || _a === void 0 ? void 0 : _a.id) || index }, alert));
        }),
        overflowMessage && (React.createElement("li", null,
            React.createElement("button", { onClick: onOverflowClick, className: (0, react_styles_1.css)(alert_group_1.default.alertGroupOverflowButton) }, overflowMessage)))));
};
exports.AlertGroupInline = AlertGroupInline;
exports.AlertGroupInline.displayName = 'AlertGroupInline';
//# sourceMappingURL=AlertGroupInline.js.map