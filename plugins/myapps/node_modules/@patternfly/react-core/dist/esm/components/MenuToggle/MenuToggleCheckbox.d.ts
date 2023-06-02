import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
import { OUIAProps } from '../../helpers';
export interface MenuToggleCheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'checked'>, OUIAProps {
    /** Additional classes added to the MenuToggleCheckbox */
    className?: string;
    /** Flag to show if the checkbox selection is valid or invalid */
    isValid?: boolean;
    /** Flag to show if the checkbox is disabled */
    isDisabled?: boolean;
    /** Flag to show if the checkbox is checked when it is controlled by React state.
     * To make the checkbox uncontrolled instead use the defaultChecked prop, but do not use both.
     */
    isChecked?: boolean | null;
    /** Flag to set the default checked value of the checkbox when it is uncontrolled by React state.
     * To make the checkbox controlled instead use the isChecked prop, but do not use both.
     */
    defaultChecked?: boolean | null;
    /** A callback for when the checkbox selection changes */
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    /** Element to be rendered inside the <span> */
    children?: React.ReactNode;
    /** Id of the checkbox */
    id: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare class MenuToggleCheckbox extends React.Component<MenuToggleCheckboxProps, {
    ouiaStateId: string;
}> {
    static displayName: string;
    static defaultProps: PickOptional<MenuToggleCheckboxProps>;
    constructor(props: MenuToggleCheckboxProps);
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    calculateChecked: () => boolean;
    render(): JSX.Element;
}
//# sourceMappingURL=MenuToggleCheckbox.d.ts.map