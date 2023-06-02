import * as React from 'react';
import { getBreakpoint, getVerticalBreakpoint } from '../../helpers/util';
export const pageContextDefaults = {
    isManagedSidebar: false,
    isNavOpen: false,
    onNavToggle: () => null,
    width: null,
    height: null,
    getBreakpoint,
    getVerticalBreakpoint
};
export const PageContext = React.createContext(pageContextDefaults);
export const PageContextProvider = PageContext.Provider;
export const PageContextConsumer = PageContext.Consumer;
//# sourceMappingURL=PageContext.js.map