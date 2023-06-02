import * as React from 'react';
export interface MenuToggleActionProps {
    /** Additional classes added to the MenuToggleAction */
    className?: string;
    /** Flag to show if the action button is disabled */
    isDisabled?: boolean;
    /** A callback for when the action button is clicked */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Element to be rendered inside the <button> */
    children?: React.ReactNode;
    /** Id of the action button */
    id?: string;
}
export declare class MenuToggleAction extends React.Component<MenuToggleActionProps> {
    static displayName: string;
    static defaultProps: MenuToggleActionProps;
    render(): JSX.Element;
}
//# sourceMappingURL=MenuToggleAction.d.ts.map