import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuGroup } from '../../../components/Menu';
export const DropdownGroup = (_a) => {
    var { children, className, label, labelHeadingLevel = 'h1' } = _a, props = __rest(_a, ["children", "className", "label", "labelHeadingLevel"]);
    return (React.createElement(MenuGroup, Object.assign({ className: css(className), label: label, labelHeadingLevel: labelHeadingLevel }, props), children));
};
DropdownGroup.displayName = 'DropdownGroup';
//# sourceMappingURL=DropdownGroup.js.map