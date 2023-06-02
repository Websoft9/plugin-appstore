import React from 'react';
import { MenuGroupProps } from '../../../components/Menu';
export interface SelectGroupProps extends Omit<MenuGroupProps, 'ref'> {
    /** Anything which can be rendered in a select group */
    children: React.ReactNode;
    /** Classes applied to root element of select group */
    className?: string;
    /** Label of the select group */
    label?: string;
}
export declare const SelectGroup: React.FunctionComponent<SelectGroupProps>;
//# sourceMappingURL=SelectGroup.d.ts.map