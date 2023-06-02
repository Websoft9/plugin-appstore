import * as React from 'react';
export interface TreeViewListProps extends React.HTMLProps<HTMLUListElement> {
    /** Child nodes of the current tree view. */
    children: React.ReactNode;
    /** Flag indicating if the tree view is nested under another tree view. */
    isNested?: boolean;
    /** Toolbar to display above the tree view. */
    toolbar?: React.ReactNode;
}
export declare const TreeViewList: React.FunctionComponent<TreeViewListProps>;
//# sourceMappingURL=TreeViewList.d.ts.map