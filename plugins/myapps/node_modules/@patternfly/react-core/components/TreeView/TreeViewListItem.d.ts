import React from 'react';
import { TreeViewDataItem } from './TreeView';
export interface TreeViewCheckProps extends Omit<Partial<React.InputHTMLAttributes<HTMLInputElement>>, 'checked'> {
    checked?: boolean | null;
}
export interface TreeViewListItemProps {
    /** Action of a tree view item, which can be either a button or dropdown component. */
    action?: React.ReactNode;
    /** Active items of tree view. */
    activeItems?: TreeViewDataItem[];
    /** Additional properties of the tree view item badge. */
    badgeProps?: any;
    /** Additional properties of the tree view item checkbox. */
    checkProps?: TreeViewCheckProps;
    /** Child nodes of a tree view item. */
    children?: React.ReactNode;
    /** Callback for item comparison function. */
    compareItems?: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean;
    /** Optional prop for a custom badge. */
    customBadgeContent?: React.ReactNode;
    /** Flag indicating if node is expanded by default. */
    defaultExpanded?: boolean;
    /** Expanded icon of a tree view item. */
    expandedIcon?: React.ReactNode;
    /** Flag indicating if a tree view item has a badge. */
    hasBadge?: boolean;
    /** Flag indicating if a tree view item has a checkbox. */
    hasCheck?: boolean;
    /** Default icon of a tree view item. */
    icon?: React.ReactNode;
    /** ID of a tree view item. */
    id?: string;
    /** Flag indicating if the tree view is using a compact variation. */
    isCompact?: boolean;
    /** Flag indicating if the node is expanded, overrides internal state. */
    isExpanded?: boolean;
    /** Flag indicating that tree nodes should be independently selectable, even when having
     * children.
     */
    isSelectable?: boolean;
    /** Data structure of tree view item. */
    itemData?: TreeViewDataItem;
    /** Internal content of a tree view item. */
    name: React.ReactNode;
    /** Callback for item checkbox selection. */
    onCheck?: (event: React.ChangeEvent<HTMLInputElement>, item: TreeViewDataItem, parent: TreeViewDataItem) => void;
    /** Callback for item selection. Note: calling event.preventDefault() will prevent the node
     * from toggling.
     */
    onSelect?: (event: React.MouseEvent, item: TreeViewDataItem, parent: TreeViewDataItem) => void;
    /** Parent item of tree view item. */
    parentItem?: TreeViewDataItem;
    /** Title of a tree view item. */
    title: React.ReactNode;
    /** Flag indicating the tree view should utilize memoization to help render large data sets.
     * Setting this property requires that the activeItems property is passed an array containing
     * every node in the selected item's path.
     */
    useMemo?: boolean;
}
export declare const TreeViewListItem: React.NamedExoticComponent<TreeViewListItemProps>;
//# sourceMappingURL=TreeViewListItem.d.ts.map