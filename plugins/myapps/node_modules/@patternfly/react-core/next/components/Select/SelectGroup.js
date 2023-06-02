import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuGroup } from '../../../components/Menu';
export const SelectGroup = (_a) => {
    var { children, className, label } = _a, props = __rest(_a, ["children", "className", "label"]);
    return (React.createElement(MenuGroup, Object.assign({ className: css(className), label: label }, props), children));
};
SelectGroup.displayName = 'SelectGroup';
//# sourceMappingURL=SelectGroup.js.map