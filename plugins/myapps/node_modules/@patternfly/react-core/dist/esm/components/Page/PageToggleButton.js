import { __rest } from "tslib";
/* eslint-disable no-console */
import * as React from 'react';
import { Button, ButtonVariant } from '../../components/Button';
import { PageContextConsumer } from './PageContext';
export const PageToggleButton = (_a) => {
    var { children, isNavOpen = true, onNavToggle = () => undefined, id = 'nav-toggle' } = _a, props = __rest(_a, ["children", "isNavOpen", "onNavToggle", "id"]);
    return (React.createElement(PageContextConsumer, null, ({ isManagedSidebar, onNavToggle: managedOnNavToggle, isNavOpen: managedIsNavOpen }) => {
        const navToggle = isManagedSidebar ? managedOnNavToggle : onNavToggle;
        const navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
        return (React.createElement(Button, Object.assign({ id: id, onClick: navToggle, "aria-label": "Side navigation toggle", "aria-expanded": navOpen ? 'true' : 'false', variant: ButtonVariant.plain }, props), children));
    }));
};
PageToggleButton.displayName = 'PageToggleButton';
//# sourceMappingURL=PageToggleButton.js.map