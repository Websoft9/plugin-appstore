import * as React from 'react';
import { ButtonProps } from '../Button';
export interface AlertToggleExpandButtonProps extends ButtonProps {
    /** Accessible label for the toggle button. */
    'aria-label'?: string;
    /** Flag to indicate if the content is expanded. */
    isExpanded?: boolean;
    /** A callback for when the toggle button is clicked. */
    onToggleExpand?: () => void;
    /** Variant label for the toggle button. */
    variantLabel?: string;
}
export declare const AlertToggleExpandButton: React.FunctionComponent<AlertToggleExpandButtonProps>;
//# sourceMappingURL=AlertToggleExpandButton.d.ts.map