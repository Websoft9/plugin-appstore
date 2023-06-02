import * as React from 'react';
export declare const MenuContext: React.Context<{
    menuId?: string;
    parentMenu?: string;
    onSelect?: (event?: any, itemId?: any) => void;
    onActionClick?: (event?: any, itemId?: any, actionId?: any) => void;
    activeItemId?: any;
    selected?: any | any[];
    drilldownItemPath?: string[];
    drilledInMenus?: string[];
    onDrillIn?: (event: React.KeyboardEvent | React.MouseEvent, fromItemId: string, toItemId: string, itemId: string) => void;
    onDrillOut?: (event: React.KeyboardEvent | React.MouseEvent, toItemId: string, itemId: string) => void;
    onGetMenuHeight?: (menuId: string, height: number) => void;
    flyoutRef?: React.Ref<HTMLLIElement>;
    setFlyoutRef?: (ref: React.Ref<HTMLLIElement>) => void;
    disableHover?: boolean;
    role?: string;
}>;
export declare const MenuItemContext: React.Context<{
    itemId?: any;
    isDisabled?: boolean;
}>;
//# sourceMappingURL=MenuContext.d.ts.map