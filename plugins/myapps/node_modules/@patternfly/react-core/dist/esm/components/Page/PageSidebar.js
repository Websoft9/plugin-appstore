import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { PageContextConsumer } from './PageContext';
export const pageSidebarContextDefaults = {
    isNavOpen: true
};
export const PageSidebarContext = React.createContext(pageSidebarContextDefaults);
export const PageSidebar = (_a) => {
    var { className = '', nav, isNavOpen = true, theme = 'dark', id = 'page-sidebar' } = _a, props = __rest(_a, ["className", "nav", "isNavOpen", "theme", "id"]);
    return (React.createElement(PageContextConsumer, null, ({ isManagedSidebar, isNavOpen: managedIsNavOpen }) => {
        const navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
        return (React.createElement("div", Object.assign({ id: id, className: css(styles.pageSidebar, theme === 'light' && styles.modifiers.light, navOpen && styles.modifiers.expanded, !navOpen && styles.modifiers.collapsed, className), "aria-hidden": !navOpen }, props),
            React.createElement("div", { className: css(styles.pageSidebarBody) },
                React.createElement(PageSidebarContext.Provider, { value: { isNavOpen: navOpen } }, nav))));
    }));
};
PageSidebar.displayName = 'PageSidebar';
//# sourceMappingURL=PageSidebar.js.map