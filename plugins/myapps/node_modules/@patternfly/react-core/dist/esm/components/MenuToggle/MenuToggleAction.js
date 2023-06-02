import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
export class MenuToggleAction extends React.Component {
    render() {
        const _a = this.props, { id, className, onClick, isDisabled, children } = _a, props = __rest(_a, ["id", "className", "onClick", "isDisabled", "children"]);
        return (React.createElement("button", Object.assign({ id: id, className: css(styles.menuToggleButton, className), onClick: onClick, type: "button", disabled: isDisabled }, props), children));
    }
}
MenuToggleAction.displayName = 'MenuToggleAction';
MenuToggleAction.defaultProps = {
    className: '',
    isDisabled: false,
    onClick: () => { }
};
//# sourceMappingURL=MenuToggleAction.js.map