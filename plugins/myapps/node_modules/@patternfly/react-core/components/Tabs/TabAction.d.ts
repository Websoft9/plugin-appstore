import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface TabActionProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref' | 'type'>, OUIAProps {
    /** Content rendered in the tab action */
    children?: React.ReactNode;
    /** Additional classes added to the tab action span */
    className?: string;
    /** Click callback for tab action button */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /** Flag indicating if the tab action is disabled */
    isDisabled?: boolean;
    /** Accessible label for the tab action */
    'aria-label'?: string;
    /** @hide Callback for the section ref */
    innerRef?: React.Ref<any>;
}
export declare const TabAction: React.ForwardRefExoticComponent<TabActionProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=TabAction.d.ts.map