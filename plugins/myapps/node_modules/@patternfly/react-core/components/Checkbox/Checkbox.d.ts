import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
import { OUIAProps } from '../../helpers';
export interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'>, OUIAProps {
    /** Additional classes added to the checkbox. */
    className?: string;
    /** Flag to show if the checkbox selection is valid or invalid. */
    isValid?: boolean;
    /** Flag to show if the checkbox is disabled. */
    isDisabled?: boolean;
    /** Flag to show if the checkbox is required. */
    isRequired?: boolean;
    /** Flag to show if the checkbox is checked. If null, the checkbox will be indeterminate (partially checked). */
    isChecked?: boolean | null;
    checked?: boolean;
    /** A callback for when the checkbox selection changes. */
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    /** Label text of the checkbox. */
    label?: React.ReactNode;
    /** Id of the checkbox. */
    id: string;
    /** Aria-label of the checkbox. */
    'aria-label'?: string;
    /** Description text of the checkbox. */
    description?: React.ReactNode;
    /** Body text of the checkbox */
    body?: React.ReactNode;
    /** Sets the input wrapper component to render. Defaults to <div> */
    component?: React.ElementType;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface CheckboxState {
    ouiaStateId: string;
}
export declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static displayName: string;
    static defaultProps: PickOptional<CheckboxProps>;
    constructor(props: any);
    private handleChange;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Checkbox.d.ts.map