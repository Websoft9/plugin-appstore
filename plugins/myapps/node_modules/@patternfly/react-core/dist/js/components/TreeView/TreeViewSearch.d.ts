import * as React from 'react';
/** Renders a search input for the tree view. This sub-component should be passed into the
 * tree view component's toolbar property.
 */
export interface TreeViewSearchProps extends React.HTMLProps<HTMLInputElement> {
    /** Accessible label for the search input. */
    'aria-label'?: string;
    /** Classes applied to the wrapper for the search input. */
    className?: string;
    /** Id for the search input. */
    id?: string;
    /** Name for the search input. */
    name?: string;
    /** Callback for search input. */
    onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TreeViewSearch: React.FunctionComponent<TreeViewSearchProps>;
//# sourceMappingURL=TreeViewSearch.d.ts.map