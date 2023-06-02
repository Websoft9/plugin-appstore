import * as React from 'react';
/** Acts as an expandable container for all uploaded file statuses.
 * An optional text and/or icon can also be passed into this sub-component.
 * This sub-component can be conditionally rendered when at least 1 file has been
 * attempted to be uploaded.
 */
export interface MultipleFileUploadStatusProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside multi file upload status list */
    children?: React.ReactNode;
    /** Class to add to outer div */
    className?: string;
    /** String to show in the status toggle */
    statusToggleText?: string;
    /** Icon to show in the status toggle */
    statusToggleIcon?: 'danger' | 'success' | 'inProgress' | React.ReactNode;
}
export declare const MultipleFileUploadStatus: React.FunctionComponent<MultipleFileUploadStatusProps>;
//# sourceMappingURL=MultipleFileUploadStatus.d.ts.map