import * as React from 'react';
/** Properties for adding search attributes to an advanced search input. These properties must
 * be passed in as an object within an array to the search input component's attribute properrty.
 */
export interface SearchInputSearchAttribute {
    /** The search attribute's value to be provided in the search input's query string.
     * It should have no spaces and be unique for every attribute.
     */
    attr: string;
    /** The search attribute's display name. It is used to label the field in the advanced
     * search menu.
     */
    display: React.ReactNode;
}
/** Properties for creating an expandable search input. These properties should be passed into
 * the search input component's expandableInput property.
 */
export interface SearchInputExpandable {
    /** Flag to indicate if the search input is expanded. */
    isExpanded: boolean;
    /** Callback function to toggle the expandable search input. */
    onToggleExpand: (event: React.SyntheticEvent<HTMLButtonElement>, isExpanded: boolean) => void;
    /** An accessible label for the expandable search input toggle. */
    toggleAriaLabel: string;
}
/** The main search input component. */
export interface SearchInputProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'results' | 'ref'> {
    /** Delimiter in the query string for pairing attributes with search values.
     * Required whenever attributes are passed as props.
     */
    advancedSearchDelimiter?: string;
    /** The container to append the menu to.
     * If your menu is being cut off you can append it to an element higher up the DOM tree.
     * Some examples:
     * appendTo={() => document.body}
     * appendTo={document.getElementById('target')}
     */
    appendTo?: HTMLElement | (() => HTMLElement) | 'inline';
    /** An accessible label for the search input. */
    'aria-label'?: string;
    /** Array of attribute values used for dynamically generated advanced search. */
    attributes?: string[] | SearchInputSearchAttribute[];
    /** Additional classes added to the search input. */
    className?: string;
    /** Object that makes the search input expandable/collapsible. */
    expandableInput?: SearchInputExpandable;
    formAdditionalItems?: React.ReactNode;
    /** Attribute label for strings unassociated with one of the provided listed attributes. */
    hasWordsAttrLabel?: React.ReactNode;
    /** A suggestion for autocompleting. */
    hint?: string;
    /** Type of the input */
    type?: 'text' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url';
    /** @hide A reference object to attach to the input box. */
    innerRef?: React.RefObject<any>;
    /** A flag for controlling the open state of a custom advanced search implementation. */
    isAdvancedSearchOpen?: boolean;
    /** Flag indicating if search input is disabled. */
    isDisabled?: boolean;
    /** Flag indicating if the next navigation button is disabled. */
    isNextNavigationButtonDisabled?: boolean;
    /** Flag indicating if the previous navigation button is disabled. */
    isPreviousNavigationButtonDisabled?: boolean;
    /** Accessible label for the button to navigate to next result. */
    nextNavigationButtonAriaLabel?: string;
    /** A callback for when the input value changes. */
    onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
    /** A callback for when the user clicks the clear button. */
    onClear?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    /** A callback for when the user clicks to navigate to next result. */
    onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    /** A callback for when the user clicks to navigate to previous result. */
    onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    /** A callback for when the search button is clicked. */
    onSearch?: (event: React.SyntheticEvent<HTMLButtonElement>, value: string, attrValueMap: {
        [key: string]: string;
    }) => void;
    /** A callback for when the open advanced search button is clicked. */
    onToggleAdvancedSearch?: (event: React.SyntheticEvent<HTMLButtonElement>, isOpen?: boolean) => void;
    /** Accessible label for the button which opens the advanced search form menu. */
    openMenuButtonAriaLabel?: string;
    /** Placeholder text of the search input. */
    placeholder?: string;
    /** Accessible label for the button to navigate to previous result. */
    previousNavigationButtonAriaLabel?: string;
    /** @beta Opt-in for updated popper that does not use findDOMNode. */
    removeFindDomNode?: boolean;
    /** z-index of the advanced search form when appendTo is not inline. */
    zIndex?: number;
    /** Label for the button which resets the advanced search form and clears the search input. */
    resetButtonLabel?: string;
    /** The number of search results returned. Either a total number of results,
     * or a string representing the current result over the total number of results. i.e. "1 / 5". */
    resultsCount?: number | string;
    /** Label for the button which calls the onSearch event handler. */
    submitSearchButtonLabel?: string;
    /** Value of the search input. */
    value?: string;
    /** Name attribue for the search input */
    name?: string;
}
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=SearchInput.d.ts.map