import * as React from 'react';
import { SearchInputSearchAttribute } from './SearchInput';
export interface AdvancedSearchMenuProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
    /** Delimiter in the query string for pairing attributes with search values.
     * Required whenever attributes are passed as props.
     */
    advancedSearchDelimiter?: string;
    /** Array of attribute values used for dynamically generated advanced search. */
    attributes?: string[] | SearchInputSearchAttribute[];
    /** Additional classes added to the advanced search menu. */
    className?: string;
    formAdditionalItems?: React.ReactNode;
    /** Function which builds an attribute-value map by parsing the value in the search input. */
    getAttrValueMap?: () => {
        [key: string]: string;
    };
    /** Attribute label for strings unassociated with one of the provided listed attributes. */
    hasWordsAttrLabel?: React.ReactNode;
    /** Flag for toggling the open/close state of the advanced search menu. */
    isSearchMenuOpen?: boolean;
    /** A callback for when the input value changes. */
    onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
    /** A callback for when the user clicks the clear button. */
    onClear?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    /** A callback for when the search button is clicked. */
    onSearch?: (event: React.SyntheticEvent<HTMLButtonElement>, value: string, attrValueMap: {
        [key: string]: string;
    }) => void;
    /** A callback for when the open advanced search button is clicked. */
    onToggleAdvancedMenu?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    /** Ref of the input element within the search input. */
    parentInputRef?: React.RefObject<any>;
    /** Ref of the div wrapping the whole search input. */
    parentRef?: React.RefObject<any>;
    /** Label for the button which resets the advanced search form and clears the search input. */
    resetButtonLabel?: string;
    /** Label for the button which calls the onSearch event handler. */
    submitSearchButtonLabel?: string;
    /** Value of the search input. */
    value?: string;
}
export declare const AdvancedSearchMenu: React.FunctionComponent<AdvancedSearchMenuProps>;
//# sourceMappingURL=AdvancedSearchMenu.d.ts.map