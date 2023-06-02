import * as React from 'react';
export interface SliderStepProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
    /** Additional classes added to the slider step. */
    className?: string;
    /** Flag indicating the step is active. */
    isActive?: boolean;
    /** Flag indicating that the label should be hidden. */
    isLabelHidden?: boolean;
    /** Flag indicating that the tick should be hidden. */
    isTickHidden?: boolean;
    /** Step label. **/
    label?: string;
    /** Step value. **/
    value?: number;
}
export declare const SliderStep: React.FunctionComponent<SliderStepProps>;
//# sourceMappingURL=SliderStep.d.ts.map