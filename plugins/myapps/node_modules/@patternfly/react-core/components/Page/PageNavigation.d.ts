import * as React from 'react';
export interface PageNavigationProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes to apply to the PageNavigation */
    className?: string;
    /** Content rendered inside of the PageNavigation */
    children?: React.ReactNode;
    /** Limits the width of the PageNavigation */
    isWidthLimited?: boolean;
    /**  @deprecated Use the stickyOnBreakpoint prop instead - Modifier indicating if the PageBreadcrumb is sticky to the top or bottom */
    sticky?: 'top' | 'bottom';
    /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
    stickyOnBreakpoint?: {
        default?: 'top' | 'bottom';
        sm?: 'top' | 'bottom';
        md?: 'top' | 'bottom';
        lg?: 'top' | 'bottom';
        xl?: 'top' | 'bottom';
        '2xl'?: 'top' | 'bottom';
    };
    /** Flag indicating if PageNavigation should have a shadow at the top */
    hasShadowTop?: boolean;
    /** Flag indicating if PageNavigation should have a shadow at the bottom */
    hasShadowBottom?: boolean;
    /** Flag indicating if the PageNavigation has a scrolling overflow */
    hasOverflowScroll?: boolean;
    /** Adds an accessible name to the page navigation. Required when the hasOverflowScroll prop is set to true. */
    'aria-label'?: string;
}
export declare const PageNavigation: {
    ({ className, children, isWidthLimited, sticky, stickyOnBreakpoint, hasShadowTop, hasShadowBottom, hasOverflowScroll, "aria-label": ariaLabel, ...props }: PageNavigationProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=PageNavigation.d.ts.map