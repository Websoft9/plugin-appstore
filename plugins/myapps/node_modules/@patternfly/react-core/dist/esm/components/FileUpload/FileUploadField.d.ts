import * as React from 'react';
/** A more customizable file upload component for implementing custom logic. Drag and drop
 * functionality is not built in by default.
 */
export interface FileUploadFieldProps extends Omit<React.HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    /** Flag to allow editing of a text file's contents after it is selected from disk. */
    allowEditingUploadedText?: boolean;
    /** Aria-label for the text area. */
    'aria-label'?: string;
    /** Text for the browse button. */
    browseButtonText?: string;
    /** Additional children to render after (or instead of) the file preview. */
    children?: React.ReactNode;
    /** Additional classes added to the file upload field container element. */
    className?: string;
    /** Text for the clear button. */
    clearButtonText?: string;
    /** Value to be shown in the read-only filename field. */
    filename?: string;
    /** Aria-label for the read-only filename field. */
    filenameAriaLabel?: string;
    /** Placeholder string to display in the empty filename field. */
    filenamePlaceholder?: string;
    /** Flag to hide the built-in preview of the file (where available). If true, you can use
     * the children property to render an alternate preview.
     */
    hideDefaultPreview?: boolean;
    /** Unique id for the text area. Also used to generate ids for accessible labels. */
    id: string;
    /** Flag to disable the clear button. */
    isClearButtonDisabled?: boolean;
    /** Flag to show if the field is disabled. */
    isDisabled?: boolean;
    /** Flag to show if a file is being loaded. */
    isLoading?: boolean;
    /** Flag to show if the field is read only. */
    isReadOnly?: boolean;
    /** Flag to show if the field is required. */
    isRequired?: boolean;
    /** A callback for when the text area value changes. */
    onChange?: (value: string, filename: string, event: React.ChangeEvent<HTMLTextAreaElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Aria-valuetext for the loading spinner. */
    spinnerAriaValueText?: string;
    /** What type of file. Determines what is is expected by the value property (a string for
     * 'text' and 'dataURL', or a File object otherwise).
     */
    type?: 'text' | 'dataURL';
    /** Value to indicate if the field is modified to show that validation state.
     * If set to success, field will be modified to indicate valid state.
     * If set to error,  field will be modified to indicate error state.
     */
    validated?: 'success' | 'error' | 'default';
    /** Value of the file's contents (string if text file, File object otherwise). */
    value?: string | File;
    /** A reference object to attach to the file upload field container element. */
    containerRef?: React.Ref<HTMLDivElement>;
    /** Flag to show if a file is being dragged over the file upload field. */
    isDragActive?: boolean;
    /** A callback for when the browse button is clicked. */
    onBrowseButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** A callback for when the clear button is clicked. */
    onClearButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Callback for when focus is lost on the text area field. */
    onTextAreaBlur?: (event?: any) => void;
    /** A callback for when the text area is clicked. Can also be set via the onClick property
     * of the file upload component. */
    onTextAreaClick?: (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
    /** Text area text changed. */
    onTextChange?: (text: string) => void;
    /** Placeholder string to display in the empty text area field. */
    textAreaPlaceholder?: string;
}
export declare const FileUploadField: React.FunctionComponent<FileUploadFieldProps>;
//# sourceMappingURL=FileUploadField.d.ts.map