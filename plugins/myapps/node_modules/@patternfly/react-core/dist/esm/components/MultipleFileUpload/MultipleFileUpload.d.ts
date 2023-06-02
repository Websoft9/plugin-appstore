import * as React from 'react';
import { DropzoneProps } from 'react-dropzone';
/** Acts as a container for all other MultipleFileUpload sub-components. This sub-component
 * also provides the functionality for file uploads, and access to the uploaded files via
 * a callback.
 */
export interface MultipleFileUploadProps extends Omit<React.HTMLProps<HTMLDivElement>, 'value'> {
    /** Content rendered inside the multi upload field */
    children?: React.ReactNode;
    /** Class to add to outer div */
    className?: string;
    /** Optional extra props to customize react-dropzone. */
    dropzoneProps?: DropzoneProps;
    /** Flag setting the component to horizontal styling mode */
    isHorizontal?: boolean;
    /** When files are dropped or uploaded this callback will be called with all accepted files */
    onFileDrop?: (data: File[]) => void;
}
export declare const MultipleFileUploadContext: React.Context<{
    open: () => void;
}>;
export declare const MultipleFileUpload: React.FunctionComponent<MultipleFileUploadProps>;
//# sourceMappingURL=MultipleFileUpload.d.ts.map