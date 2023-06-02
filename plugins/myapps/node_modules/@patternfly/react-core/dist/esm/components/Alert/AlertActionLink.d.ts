import * as React from 'react';
import { ButtonProps } from '../Button';
/** Renders buttons styled as links beneath the alert title and description when this sub-component
 * is passed into the alert's actionLinks property.
 */
export interface AlertActionLinkProps extends ButtonProps {
    /** Content rendered inside the alert action link.  */
    children?: string;
    /** Additional classes added to the alert action link.  */
    className?: string;
}
export declare const AlertActionLink: React.FunctionComponent<AlertActionLinkProps>;
//# sourceMappingURL=AlertActionLink.d.ts.map