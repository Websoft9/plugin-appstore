import * as React from 'react';
export interface PageContextProps {
    isManagedSidebar: boolean;
    onNavToggle: () => void;
    isNavOpen: boolean;
    width: number;
    height: number;
    getBreakpoint: (width: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    getVerticalBreakpoint: (height: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export declare const pageContextDefaults: PageContextProps;
export declare const PageContext: React.Context<PageContextProps>;
export declare const PageContextProvider: React.Provider<PageContextProps>;
export declare const PageContextConsumer: React.Consumer<PageContextProps>;
//# sourceMappingURL=PageContext.d.ts.map