import * as React from 'react';
import { ToggleMenuBaseProps } from '../../helpers/Popper/Popper';
import { OUIAProps } from '../../helpers';
export interface ContextSelectorProps extends Omit<ToggleMenuBaseProps, 'menuAppendTo'>, OUIAProps {
    /** content rendered inside the Context Selector */
    children?: React.ReactNode;
    /** Classes applied to root element of Context Selector */
    className?: string;
    /** Flag to indicate if Context Selector is opened */
    isOpen?: boolean;
    /** Function callback called when user clicks toggle button */
    onToggle?: (event: any, value: boolean) => void;
    /** Function callback called when user selects item */
    onSelect?: (event: any, value: React.ReactNode) => void;
    /** The container to append the menu to. Defaults to 'inline'.
     * If your menu is being cut off you can append it to an element higher up the DOM tree.
     * Some examples:
     * menuAppendTo="parent"
     * menuAppendTo={() => document.body}
     * menuAppendTo={document.getElementById('target')}
     */
    menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline' | 'parent';
    /** Flag indicating that the context selector should expand to full height */
    isFullHeight?: boolean;
    /** Labels the Context Selector for Screen Readers */
    screenReaderLabel?: string;
    /** Component or string that will be used in the context selector.
     * This prop is placed in a button, and cannot contain any interactive elements
     */
    toggleText?: React.ReactNode;
    /** Aria-label for the Context Selector Search Button */
    searchButtonAriaLabel?: string;
    /** Value in the Search field */
    searchInputValue?: string;
    /** Function callback called when user changes the Search Input */
    onSearchInputChange?: (value: string) => void;
    /** Search Input placeholder */
    searchInputPlaceholder?: string;
    /** Function callback for when Search Button is clicked */
    onSearchButtonClick?: (event?: React.SyntheticEvent<HTMLButtonElement>) => void;
    /** Footer of the context selector */
    footer?: React.ReactNode;
    /** Flag to indicate the toggle has no border or background */
    isPlain?: boolean;
    /** Flag to indicate if toggle is textual toggle */
    isText?: boolean;
    /** Flag to disable focus trap */
    disableFocusTrap?: boolean;
    /** Flag for indicating that the context selector menu should automatically flip vertically when
     * it reaches the boundary. This prop can only be used when the context selector component is not
     * appended inline, e.g. `menuAppendTo="parent"`
     */
    isFlipEnabled?: boolean;
    /** Id of the context selector */
    id?: string;
    /** @beta Opt-in for updated popper that does not use findDOMNode. */
    removeFindDomNode?: boolean;
    /** z-index of the context selector when menuAppendTo is not inline. */
    zIndex?: number;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare class ContextSelector extends React.Component<ContextSelectorProps, {
    ouiaStateId: string;
}> {
    static displayName: string;
    static defaultProps: ContextSelectorProps;
    constructor(props: ContextSelectorProps);
    parentRef: React.RefObject<HTMLDivElement>;
    popperRef: React.RefObject<HTMLDivElement>;
    onEnterPressed: (event: any) => void;
    render(): JSX.Element;
}
//# sourceMappingURL=ContextSelector.d.ts.map