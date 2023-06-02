import * as React from 'react';
import { TextInputProps } from '../TextInput/TextInput';
import { PopoverProps } from '../Popover/Popover';
import { CalendarFormat } from '../CalendarMonth';
/** The main date picker component. */
export interface DatePickerProps extends CalendarFormat, Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'> {
    /** The container to append the menu to. Defaults to 'parent'.
     * If your menu is being cut off you can append it to an element higher up the DOM tree.
     * Some examples:
     * menuAppendTo={() => document.body};
     * menuAppendTo={document.getElementById('target')}
     */
    appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement) | 'parent';
    /** Accessible label for the date picker. */
    'aria-label'?: string;
    /** Accessible label for the button to open the date picker. */
    buttonAriaLabel?: string;
    /** Additional classes added to the date picker. */
    className?: string;
    /** How to format the date in the text input. */
    dateFormat?: (date: Date) => string;
    /** How to format the date in the text input. */
    dateParse?: (value: string) => Date;
    /** Helper text to display alongside the date picker. */
    helperText?: React.ReactNode;
    /** Additional props for the text input. */
    inputProps?: TextInputProps;
    /** Flag indicating the date picker is disabled. */
    isDisabled?: boolean;
    /** Error message to display when the text input cannot be parsed. */
    invalidFormatText?: string;
    /** Callback called every time the text input loses focus. */
    onBlur?: (event: any, value: string, date?: Date) => void;
    /** Callback called every time the text input value changes. */
    onChange?: (event: React.FormEvent<HTMLInputElement>, value: string, date?: Date) => void;
    /** String to display in the empty text input as a hint for the expected date format. */
    placeholder?: string;
    /** Props to pass to the popover that contains the calendar month component. */
    popoverProps?: Partial<Omit<PopoverProps, 'appendTo'>>;
    /** Functions that returns an error message if a date is invalid. */
    validators?: ((date: Date) => string)[];
    /** Value of the text input. */
    value?: string;
}
/** Allows finer control over the calendar's open state when a React ref is passed into the
 * date picker component. Accessed via ref.current[property], e.g. ref.current.toggleCalendar().
 */
export interface DatePickerRef {
    /** Current calendar open status. */
    isCalendarOpen: boolean;
    /** Sets the calendar open status. */
    setCalendarOpen: (isOpen: boolean) => void;
    /** Toggles the calendar open status. If no parameters are passed, the calendar will simply
     * toggle its open status.
     * If the isOpen parameter is passed, that will set the calendar open status to the value
     * of the isOpen parameter.
     * If the eventKey parameter is set to 'Escape', that will invoke the date pickers
     * onEscapePress event to toggle the correct control appropriately.
     */
    toggleCalendar: (isOpen?: boolean, eventKey?: string) => void;
}
export declare const yyyyMMddFormat: (date: Date) => string;
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<DatePickerRef>>;
//# sourceMappingURL=DatePicker.d.ts.map