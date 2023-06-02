import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItem } from '../../../components/Menu';
export const SelectOption = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement(MenuItem, Object.assign({ className: css(className) }, props), children));
};
SelectOption.displayName = 'SelectOption';
//# sourceMappingURL=SelectOption.js.map