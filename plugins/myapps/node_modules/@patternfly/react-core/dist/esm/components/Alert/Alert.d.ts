import * as React from 'react';
import { OUIAProps } from '../../helpers';
import { TooltipPosition } from '../Tooltip';
export declare enum AlertVariant {
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    default = "default"
}
/** The main alert component. */
export interface AlertProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'>, OUIAProps {
    /** Close button; use the alert action close button component.  */
    actionClose?: React.ReactNode;
    /** Action links; use a single alert action link component or multiple wrapped in an array
     * or React.Fragment.
     */
    actionLinks?: React.ReactNode;
    /** Adds accessible text to the alert. */
    'aria-label'?: string;
    /** Content rendered inside the alert. */
    children?: React.ReactNode;
    /** Additional classes to add to the alert.  */
    className?: string;
    /** Set a custom icon to the alert. If not set the icon is set according to the variant. */
    customIcon?: React.ReactNode;
    /** Uniquely identifies the alert. */
    id?: string;
    /** Flag indicating that the alert is expandable. */
    isExpandable?: boolean;
    /** Flag to indicate if the alert is inline. */
    isInline?: boolean;
    /** Flag to indicate if the alert is in a live region. */
    isLiveRegion?: boolean;
    /** Flag to indicate if the alert is plain. */
    isPlain?: boolean;
    /** Function to be executed on alert timeout. Relevant when the timeout prop is set. */
    onTimeout?: () => void;
    /** If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
     * be dismissed after that amount of time in milliseconds.
     */
    timeout?: number | boolean;
    /** If the user hovers over the alert and `timeout` expires, this is how long to wait
     * before finally dismissing the alert.
     */
    timeoutAnimation?: number;
    /** Title of the alert.  */
    title: React.ReactNode;
    /** @deprecated Sets the heading level to use for the alert title. Default is h4. */
    titleHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /** Sets the element to use as the alert title. Default is h4. */
    component?: keyof JSX.IntrinsicElements;
    /** Adds accessible text to the alert toggle. */
    toggleAriaLabel?: string;
    /** Position of the tooltip which is displayed if text is truncated. */
    tooltipPosition?: TooltipPosition | 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    /** Truncate title to number of lines. */
    truncateTitle?: number;
    /** Adds alert variant styles.  */
    variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
    /** Variant label text for screen readers. */
    variantLabel?: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const Alert: React.FunctionComponent<AlertProps>;
//# sourceMappingURL=Alert.d.ts.map