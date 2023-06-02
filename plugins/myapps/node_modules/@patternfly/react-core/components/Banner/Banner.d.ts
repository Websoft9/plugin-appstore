import * as React from 'react';
export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the banner. */
    children?: React.ReactNode;
    /** Additional classes added to the banner. */
    className?: string;
    /** If set to true, the banner sticks to the top of its container */
    isSticky?: boolean;
    /** Text announced by screen readers to indicate the type of banner. This prop should only
     * be passed in when the banner conveys status/severity.
     */
    screenReaderText?: string;
    /** Variant styles for the banner. */
    variant?: 'default' | 'info' | 'danger' | 'success' | 'warning';
}
export declare const Banner: React.FunctionComponent<BannerProps>;
//# sourceMappingURL=Banner.d.ts.map