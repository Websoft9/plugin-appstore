import * as React from 'react';
export interface IconComponentProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    /** Icon content */
    children?: React.ReactNode;
    /** Icon when isInProgress is set to true. Defaults to a 1em spinner.  */
    progressIcon?: React.ReactNode;
    /** Additional classes applied to the icon container */
    className?: string;
    /** Size of the icon component container and icon. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Size of icon. Overrides the icon size set by the size property. */
    iconSize?: 'sm' | 'md' | 'lg' | 'xl';
    /** Size of progress icon. Overrides the icon size set by the size property. */
    progressIconSize?: 'sm' | 'md' | 'lg' | 'xl';
    /** Status color of the icon */
    status?: 'default' | 'info' | 'success' | 'warning' | 'danger';
    /** Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties. */
    isInline?: boolean;
    /** Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon. */
    isInProgress?: boolean;
    /** Aria-label for the default progress icon */
    defaultProgressArialabel?: string;
}
export declare const Icon: React.FunctionComponent<IconComponentProps>;
//# sourceMappingURL=Icon.d.ts.map