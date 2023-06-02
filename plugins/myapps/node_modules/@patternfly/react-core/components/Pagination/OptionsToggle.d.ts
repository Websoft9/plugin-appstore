import * as React from 'react';
import { ToggleTemplateProps } from './ToggleTemplate';
export interface OptionsToggleProps extends React.HTMLProps<HTMLDivElement> {
    /** The first index of the items being paginated. */
    firstIndex?: number;
    /** Flag indicating if the options menu is disabled. */
    isDisabled?: boolean;
    /** Flag indicating if the options menu dropdown is open or not. */
    isOpen?: boolean;
    /** The total number of items being paginated. */
    itemCount?: number;
    /** The title of the pagination options menu. */
    itemsPerPageTitle?: string;
    /** The type or title of the items being paginated. */
    itemsTitle?: string;
    /** The last index of the items being paginated. */
    lastIndex?: number;
    /** Label for the English word "of". */
    ofWord?: string;
    /** Callback for toggle open on keyboard entry. */
    onEnter?: () => void;
    /** Event function that fires when user clicks the options menu toggle. */
    onToggle?: (isOpen: boolean) => void;
    /** Accessible label for the options toggle. */
    optionsToggle?: string;
    /** */
    parentRef?: HTMLElement;
    /** Component to be used for wrapping the toggle contents. Use "button" when you want
     * all of the toggle text to be clickable.
     */
    perPageComponent?: 'div' | 'button';
    /** Flag for indicating whether the toggle should be shown. */
    showToggle?: boolean;
    /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
     * itemCount, and/or itemsTitle props. */
    toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
    /** Id added to the title of the pagination options menu. */
    widgetId?: string;
}
export declare const OptionsToggle: React.FunctionComponent<OptionsToggleProps>;
//# sourceMappingURL=OptionsToggle.d.ts.map