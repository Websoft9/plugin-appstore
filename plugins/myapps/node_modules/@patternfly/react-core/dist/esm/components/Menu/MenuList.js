import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { MenuContext } from './MenuContext';
export const MenuList = (_a) => {
    var { children = null, className, isAriaMultiselectable = false } = _a, props = __rest(_a, ["children", "className", "isAriaMultiselectable"]);
    const { role } = React.useContext(MenuContext);
    return (React.createElement("ul", Object.assign({ role: role }, (role === 'listbox' && { 'aria-multiselectable': isAriaMultiselectable }), { className: css(styles.menuList, className) }, props), children));
};
MenuList.displayName = 'MenuList';
//# sourceMappingURL=MenuList.js.map