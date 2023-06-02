import * as React from 'react';
export declare const isVariantIcon: (icon: any) => icon is string;
export interface ModalBoxTitleProps {
    /** Additional classes added to the modal box title. */
    className?: string;
    /** Id of the modal box title. */
    id: string;
    /** Content rendered inside the modal box title. */
    title: React.ReactNode;
    /** Optional alert icon (or other) to show before the title. When the predefined alert types
     * are used the default styling will be automatically applied. */
    titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'default' | React.ComponentType<any>;
    /** Optional title label text for screen readers. */
    titleLabel?: string;
}
export declare const ModalBoxTitle: React.FunctionComponent<ModalBoxTitleProps>;
//# sourceMappingURL=ModalBoxTitle.d.ts.map