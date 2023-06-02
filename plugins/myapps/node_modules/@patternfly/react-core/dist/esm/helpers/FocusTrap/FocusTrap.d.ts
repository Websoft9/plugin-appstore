import * as React from 'react';
import { Options as FocusTrapOptions } from 'focus-trap';
interface FocusTrapProps extends Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
    children: React.ReactNode;
    className?: string;
    active?: boolean;
    paused?: boolean;
    focusTrapOptions?: FocusTrapOptions;
    /** Prevent from scrolling to the previously focused element on deactivation */
    preventScrollOnDeactivate?: boolean;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<HTMLDivElement>;
}
export declare const FocusTrap: React.ForwardRefExoticComponent<FocusTrapProps & React.RefAttributes<any>>;
export {};
//# sourceMappingURL=FocusTrap.d.ts.map