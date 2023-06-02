import * as React from 'react';
export interface ModalBoxProps extends React.HTMLProps<HTMLDivElement> {
    /** Id to use for the modal box description. */
    'aria-describedby': string;
    /** Accessible descriptor of the modal. */
    'aria-label'?: string;
    /** Id to use for the modal box label. */
    'aria-labelledby'?: string;
    /** Content rendered inside the modal box. */
    children: React.ReactNode;
    /** Additional classes added to the modal box. */
    className?: string;
    /** Alternate position of the modal. */
    position?: 'top';
    /** Offset from alternate position. Can be any valid CSS length/percentage. */
    positionOffset?: string;
    /** Variant of the modal. */
    variant?: 'small' | 'medium' | 'large' | 'default';
}
export declare const ModalBox: React.FunctionComponent<ModalBoxProps>;
//# sourceMappingURL=ModalBox.d.ts.map