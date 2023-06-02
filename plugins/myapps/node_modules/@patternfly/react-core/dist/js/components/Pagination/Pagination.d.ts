import * as React from 'react';
import { ToggleTemplateProps } from './ToggleTemplate';
import { OUIAProps, PickOptional } from '../../helpers';
export declare enum PaginationVariant {
    bottom = "bottom",
    top = "top"
}
/** Properties to customize the content and behavior of the pagination dropdown options. These
 * properties should be passed into the pagination component's perPageOptions property.
 */
export interface PerPageOptions {
    /** The text title of the option, which is rendered inside the pagination dropdown menu. */
    title?: string;
    /** The value of the option, which determines how many items are displayed per page. */
    value?: number;
}
/** Properties to customize various pagination titles. The following properties should be
 * passed into the pagination component's title property.
 */
export interface PaginationTitles {
    /** Accessible label for the input displaying the current page. */
    currPage?: string;
    /** The type or title of the items being paginated. */
    items?: string;
    /** The title of the pagination options menu. */
    itemsPerPage?: string;
    /** Label for the English word "of". */
    ofWord?: string;
    /** Accessible label for the options toggle. */
    optionsToggle?: string;
    /** The title of a page displayed beside the page number. */
    page?: string;
    /** The title of a page displayed beside the page number (plural form). */
    pages?: string;
    /** Accessible label for the pagination component. */
    paginationTitle?: string;
    /** The suffix to be displayed after each option on the options menu dropdown. */
    perPageSuffix?: string;
    /** Accessible label for the button which moves to the first page. */
    toFirstPage?: string;
    /** Accessible label for the button which moves to the last page. */
    toLastPage?: string;
    /** Accessible label for the button which moves to the next page. */
    toNextPage?: string;
    /** Accessible label for the button which moves to the previous page. */
    toPreviousPage?: string;
}
export declare type OnSetPage = (_evt: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPage: number, perPage?: number, startIdx?: number, endIdx?: number) => void;
export declare type OnPerPageSelect = (_evt: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPerPage: number, newPage: number, startIdx?: number, endIdx?: number) => void;
/** The main pagination component. */
export interface PaginationProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
    /** What should be rendered inside the pagination. */
    children?: React.ReactNode;
    /** Additional classes for the pagination container. */
    className?: string;
    /** Indicate whether to show last full page of results when user selects perPage value
     * greater than remaining rows.
     */
    defaultToFullPage?: boolean;
    /** Direction of dropdown context menu. */
    dropDirection?: 'up' | 'down';
    /** Page to start at. */
    firstPage?: number;
    /** @beta Flag indicating that pagination should use page insets. */
    usePageInsets?: boolean;
    /** @beta Insets at various breakpoints. */
    inset?: {
        default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
        '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    };
    /** Flag indicating if pagination is compact. */
    isCompact?: boolean;
    /** Flag indicating if pagination is disabled. */
    isDisabled?: boolean;
    /** Flag indicating if pagination should not be sticky on mobile. */
    isStatic?: boolean;
    /** Flag indicating if pagination should stick to its position (based on variant). */
    isSticky?: boolean;
    /** Total number of items. */
    itemCount?: number;
    /** Last index of items on current page. */
    itemsEnd?: number;
    /** First index of items on current page. */
    itemsStart?: number;
    /** Start index of rows to display, used in place of providing page. */
    offset?: number;
    /** Current page number. */
    page?: number;
    /** Number of items per page. */
    perPage?: number;
    /** Component to be used for wrapping the toggle contents. Use "button" when you want
     * all of the toggle text to be clickable.
     */
    perPageComponent?: 'div' | 'button';
    /** Array of the number of items per page options. */
    perPageOptions?: PerPageOptions[];
    /** Function called when user clicks on navigate to first page. */
    onFirstClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks on navigate to last page. */
    onLastClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks on navigate to next page. */
    onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user inputs page number. */
    onPageInput?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user selects number of items per page. */
    onPerPageSelect?: OnPerPageSelect;
    /** Function called when user clicks on navigate to previous page. */
    onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user sets page. */
    onSetPage?: OnSetPage;
    /** Object with titles to display in pagination. */
    titles?: PaginationTitles;
    /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
     * itemCount, itemsTitle, and/or ofWord props.
     */
    toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
    /** Position where pagination is rendered. */
    variant?: 'top' | 'bottom' | PaginationVariant;
    /** Id to ideintify widget on page. */
    widgetId?: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare class Pagination extends React.Component<PaginationProps, {
    ouiaStateId: string;
}> {
    static displayName: string;
    paginationRef: React.RefObject<HTMLDivElement>;
    static defaultProps: PickOptional<PaginationProps>;
    state: {
        ouiaStateId: string;
    };
    getLastPage(): number;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PaginationProps & OUIAProps): void;
    render(): JSX.Element;
}
//# sourceMappingURL=Pagination.d.ts.map