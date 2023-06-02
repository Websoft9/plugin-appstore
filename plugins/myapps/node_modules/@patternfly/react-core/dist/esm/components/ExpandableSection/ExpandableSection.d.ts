import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
export declare enum ExpandableSectionVariant {
    default = "default",
    truncate = "truncate"
}
/** The main expandable section component. */
export interface ExpandableSectionProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the expandable section. */
    children?: React.ReactNode;
    /** Additional classes added to the expandable section. */
    className?: string;
    /** Id of the content of the expandable section. When passing in the isDetached property, this
     * property's value should match the contenId property of the expandable section toggle sub-component.
     */
    contentId?: string;
    /** Display size variant. Set to "large" for disclosure styling. */
    displaySize?: 'default' | 'large';
    /** Forces active state. */
    isActive?: boolean;
    /** Indicates the expandable section has a detached toggle. */
    isDetached?: boolean;
    /** Flag to indicate if the content is expanded. */
    isExpanded?: boolean;
    /** Flag to indicate if the content is indented. */
    isIndented?: boolean;
    /** Flag to indicate the width of the component is limited. Set to "true" for disclosure styling. */
    isWidthLimited?: boolean;
    /** Callback function to toggle the expandable section. Detached expandable sections should
     * use the onToggle property of the expandable section toggle sub-component.
     */
    onToggle?: (isExpanded: boolean) => void;
    /** React node that appears in the attached toggle in place of the toggleText property. */
    toggleContent?: React.ReactNode;
    /** Text that appears in the attached toggle. */
    toggleText?: string;
    /** Text that appears in the attached toggle when collapsed (will override toggleText if
     * both are specified; used for uncontrolled expandable with dynamic toggle text).
     */
    toggleTextCollapsed?: string;
    /** Text that appears in the attached toggle when expanded (will override toggleText if
     * both are specified; used for uncontrolled expandable with dynamic toggle text).
     */
    toggleTextExpanded?: string;
    /** @beta Truncates the expandable content to the specified number of lines when using the
     * "truncate" variant.
     */
    truncateMaxLines?: number;
    /** @beta Determines the variant of the expandable section. When passing in "truncate" as the
     * variant, the expandable content will be truncated after 3 lines by default.
     */
    variant?: 'default' | 'truncate';
}
interface ExpandableSectionState {
    isExpanded: boolean;
    hasToggle: boolean;
    previousWidth: number;
}
export declare class ExpandableSection extends React.Component<ExpandableSectionProps, ExpandableSectionState> {
    static displayName: string;
    constructor(props: ExpandableSectionProps);
    expandableContentRef: React.RefObject<HTMLDivElement>;
    observer: any;
    static defaultProps: PickOptional<ExpandableSectionProps>;
    private calculateToggleText;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ExpandableSectionProps): void;
    componentWillUnmount(): void;
    checkToggleVisibility: () => void;
    resize: () => void;
    handleResize: (...args: any[]) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ExpandableSection.d.ts.map