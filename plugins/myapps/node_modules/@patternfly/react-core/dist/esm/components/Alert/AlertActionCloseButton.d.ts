import * as React from 'react';
import { ButtonProps } from '../Button';
/** Renders a close button for a dismissable alert when this sub-component is passed into
 * the alert's actionClose property.
 */
export interface AlertActionCloseButtonProps extends ButtonProps {
    /** Accessible label for the close button */
    'aria-label'?: string;
    /** Additional classes added to the alert action close button. */
    className?: string;
    /** A callback for when the close button is clicked. */
    onClose?: () => void;
    /** Variant Label for the close button. */
    variantLabel?: string;
}
export declare const AlertActionCloseButton: React.FunctionComponent<AlertActionCloseButtonProps>;
//# sourceMappingURL=AlertActionCloseButton.d.ts.map