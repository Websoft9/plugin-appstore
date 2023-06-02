import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { Button } from '../Button';
import { getOUIAProps } from '../../helpers';
const TabActionBase = (_a) => {
    var { children, className, onClick, isDisabled, 'aria-label': ariaLabel = 'Tab action', innerRef, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "onClick", "isDisabled", 'aria-label', "innerRef", "ouiaId", "ouiaSafe"]);
    return (React.createElement("span", { className: css(styles.tabsItemAction, className) },
        React.createElement(Button, Object.assign({ ref: innerRef, type: "button", variant: "plain", "aria-label": ariaLabel, onClick: onClick, isDisabled: isDisabled }, getOUIAProps(TabAction.displayName, ouiaId, ouiaSafe), props),
            React.createElement("span", { className: css(styles.tabsItemActionIcon) }, children))));
};
export const TabAction = React.forwardRef((props, ref) => (React.createElement(TabActionBase, Object.assign({}, props, { innerRef: ref }))));
TabAction.displayName = 'TabAction';
//# sourceMappingURL=TabAction.js.map