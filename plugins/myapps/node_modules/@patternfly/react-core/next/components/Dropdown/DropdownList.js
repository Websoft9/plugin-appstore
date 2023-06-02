import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuList } from '../../../components/Menu';
export const DropdownList = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement(MenuList, Object.assign({ className: css(className) }, props), children));
};
DropdownList.displayName = 'DropdownList';
//# sourceMappingURL=DropdownList.js.map