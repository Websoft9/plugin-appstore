"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabAction = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const tabs_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Tabs/tabs"));
const Button_1 = require("../Button");
const helpers_1 = require("../../helpers");
const TabActionBase = (_a) => {
    var { children, className, onClick, isDisabled, 'aria-label': ariaLabel = 'Tab action', innerRef, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ouiaId, ouiaSafe } = _a, props = tslib_1.__rest(_a, ["children", "className", "onClick", "isDisabled", 'aria-label', "innerRef", "ouiaId", "ouiaSafe"]);
    return (React.createElement("span", { className: (0, react_styles_1.css)(tabs_1.default.tabsItemAction, className) },
        React.createElement(Button_1.Button, Object.assign({ ref: innerRef, type: "button", variant: "plain", "aria-label": ariaLabel, onClick: onClick, isDisabled: isDisabled }, (0, helpers_1.getOUIAProps)(exports.TabAction.displayName, ouiaId, ouiaSafe), props),
            React.createElement("span", { className: (0, react_styles_1.css)(tabs_1.default.tabsItemActionIcon) }, children))));
};
exports.TabAction = React.forwardRef((props, ref) => (React.createElement(TabActionBase, Object.assign({}, props, { innerRef: ref }))));
exports.TabAction.displayName = 'TabAction';
//# sourceMappingURL=TabAction.js.map