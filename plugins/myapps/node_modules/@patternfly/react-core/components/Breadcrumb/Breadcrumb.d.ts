import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface BreadcrumbProps extends React.HTMLProps<HTMLElement>, OUIAProps {
    /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
    children?: React.ReactNode;
    /** Additional classes added to the breadcrumb nav. */
    className?: string;
    /** Aria label added to the breadcrumb nav. */
    'aria-label'?: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;
//# sourceMappingURL=Breadcrumb.d.ts.map