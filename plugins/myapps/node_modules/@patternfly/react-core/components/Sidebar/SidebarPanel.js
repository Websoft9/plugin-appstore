import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';
import { formatBreakpointMods } from '../../helpers/util';
export var SidebarPanelWidthType;
(function (SidebarPanelWidthType) {
    SidebarPanelWidthType["default"] = "default";
    SidebarPanelWidthType["width25"] = "width_25";
    SidebarPanelWidthType["width33"] = "width_33";
    SidebarPanelWidthType["width50"] = "width_50";
    SidebarPanelWidthType["width66"] = "width_66";
    SidebarPanelWidthType["width75"] = "width_75";
    SidebarPanelWidthType["width100"] = "width_100";
})(SidebarPanelWidthType || (SidebarPanelWidthType = {}));
export const SidebarPanel = (_a) => {
    var { className, children, variant = 'default', hasNoBackground, width } = _a, props = __rest(_a, ["className", "children", "variant", "hasNoBackground", "width"]);
    return (React.createElement("div", Object.assign({ className: css(styles.sidebarPanel, variant !== 'default' && styles.modifiers[variant], hasNoBackground && styles.modifiers.noBackground, formatBreakpointMods(width, styles), className) }, props), children));
};
SidebarPanel.displayName = 'SidebarPanel';
//# sourceMappingURL=SidebarPanel.js.map