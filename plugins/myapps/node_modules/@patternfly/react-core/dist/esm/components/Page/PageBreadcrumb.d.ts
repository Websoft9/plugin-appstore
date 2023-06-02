import * as React from 'react';
export interface PageBreadcrumbProps extends React.HTMLProps<HTMLElement> {
    /** Additional classes to apply to the PageBreadcrumb */
    className?: string;
    /** Content rendered inside of the PageBreadcrumb */
    children?: React.ReactNode;
    /** Limits the width of the breadcrumb */
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
    /** Flag indicating if PageBreadcrumb should have a shadow at the top */
    hasShadowTop?: boolean;
    /** Flag indicating if PageBreadcrumb should have a shadow at the bottom */
    hasShadowBottom?: boolean;
    /** Flag indicating if the PageBreadcrumb has a scrolling overflow */
    hasOverflowScroll?: boolean;
    /** Adds an accessible name to the breadcrumb section. Required when the hasOverflowScroll prop is set to true. */
    'aria-label'?: string;
}
export declare const PageBreadcrumb: {
    ({ className, children, isWidthLimited, sticky, stickyOnBreakpoint, hasShadowTop, hasShadowBottom, hasOverflowScroll, "aria-label": ariaLabel, ...props }: PageBreadcrumbProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=PageBreadcrumb.d.ts.map