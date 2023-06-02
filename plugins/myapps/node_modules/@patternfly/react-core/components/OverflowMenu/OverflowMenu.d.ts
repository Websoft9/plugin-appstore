import * as React from 'react';
export interface OverflowMenuProps extends React.HTMLProps<HTMLDivElement> {
    /** Any elements that can be rendered in the menu */
    children?: any;
    /** Additional classes added to the OverflowMenu. */
    className?: string;
    /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
    breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** A container reference to base the specified breakpoint on instead of the viewport width. */
    breakpointReference?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
}
export interface OverflowMenuState extends React.HTMLProps<HTMLDivElement> {
    isBelowBreakpoint: boolean;
    breakpointRef: HTMLElement;
}
export declare class OverflowMenu extends React.Component<OverflowMenuProps, OverflowMenuState> {
    static displayName: string;
    constructor(props: OverflowMenuProps);
    observer: any;
    getBreakpointRef(): any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<OverflowMenuProps>, prevState: Readonly<OverflowMenuState>): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    handleResizeWithDelay: (...args: any[]) => void;
    render(): JSX.Element;
}
//# sourceMappingURL=OverflowMenu.d.ts.map