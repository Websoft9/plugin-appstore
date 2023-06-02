import * as React from 'react';
/** Automatically reads an uploaded file to render a visual representation of it, including
 * its name, size, and read status. This sub-component also allows custom reading of files
 * via various callbacks which will override the automatic reading behavior.
 */
export interface MultipleFileUploadStatusItemProps extends React.HTMLProps<HTMLLIElement> {
    /** Class to add to outer div */
    className?: string;
    /** Adds accessibility text to the status item deletion button */
    buttonAriaLabel?: string;
    /** The file object being represented by the status item */
    file?: File;
    /** A callback for when a selected file starts loading */
    onReadStarted?: (fileHandle: File) => void;
    /** A callback for when a selected file finishes loading */
    onReadFinished?: (fileHandle: File) => void;
    /** A callback for when the FileReader successfully reads the file */
    onReadSuccess?: (data: string, file: File) => void;
    /** A callback for when the FileReader API fails */
    onReadFail?: (error: DOMException, onReadFail: File) => void;
    /** Clear button was clicked */
    onClearClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** A callback to process file reading in a custom way */
    customFileHandler?: (file: File) => void;
    /** A custom icon to show in place of the generic file icon */
    fileIcon?: React.ReactNode;
    /** A custom name to display for the file rather than using built in functionality to auto-fill it */
    fileName?: string;
    /** A custom file size to display for the file rather than using built in functionality to auto-fill it */
    fileSize?: number;
    /** A custom value to display for the progress component rather than using built in functionality to auto-fill it */
    progressValue?: number;
    /** A custom variant to apply to the progress component rather than using built in functionality to auto-fill it */
    progressVariant?: 'danger' | 'success' | 'warning';
    /** Adds accessible text to the progress bar. Required when title not used and there is not any label associated with the progress bar */
    progressAriaLabel?: string;
    /** Associates the progress bar with it's label for accessibility purposes. Required when title not used */
    progressAriaLabelledBy?: string;
    /** Modifies the text announced by assistive technologies when the progress bar updates. */
    progressAriaLiveMessage?: string | ((loadPercentage: number) => string);
    /** Unique identifier for progress. Generated if not specified. */
    progressId?: string;
    /** @beta Additional content related to the status item. */
    progressHelperText?: React.ReactNode;
}
export declare const MultipleFileUploadStatusItem: React.FunctionComponent<MultipleFileUploadStatusItemProps>;
//# sourceMappingURL=MultipleFileUploadStatusItem.d.ts.map