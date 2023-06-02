import React from 'react';
export declare enum Weekday {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
export interface CalendarMonthInlineProps {
    /** Component wrapping the calendar month when used inline. Recommended to be 'article'. */
    component?: keyof JSX.IntrinsicElements;
    /** Title of the calendar rendered above the inline calendar month. Recommended to be a 'title' component. */
    title?: React.ReactNode;
    /** Id of the accessible label of the calendar month. Recommended to map to the title. */
    ariaLabelledby?: string;
}
/** Additional properties that extend from and can be passed to the main component. These
 * properties allow customizing the calendar formatting and aria-labels.
 */
export interface CalendarFormat {
    /** Accessible label for the date cells. */
    cellAriaLabel?: (date: Date) => string;
    /** How to format days in buttons in table cells. */
    dayFormat?: (date: Date) => React.ReactNode;
    /** If using the default formatters which locale to use. Undefined defaults to current locale.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
     */
    locale?: string;
    /** How to format days in header for screen readers. */
    longWeekdayFormat?: (date: Date) => React.ReactNode;
    /** How to format months in month select. */
    monthFormat?: (date: Date) => React.ReactNode;
    /** Accessible label for the previous month button. */
    prevMonthAriaLabel?: string;
    /** Accessible label for the next month button. */
    nextMonthAriaLabel?: string;
    /** Which date to start range styles from. */
    rangeStart?: Date;
    /** How to format week days in header. */
    weekdayFormat?: (date: Date) => React.ReactNode;
    /** Day of week that starts the week. 0 is Sunday, 6 is Saturday. */
    weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | Weekday;
    /** Accessible label for the year input. */
    yearInputAriaLabel?: string;
    /** Props used to ensure accessibility when displaying the calendar month inline. */
    inlineProps?: CalendarMonthInlineProps;
}
export interface CalendarProps extends CalendarFormat, Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
    /** Additional classes to add to the outer div of the calendar month. */
    className?: string;
    /** Month/year to base other dates around. */
    date?: Date;
    /** Flag to set browser focus on the passed date. **/
    isDateFocused?: boolean;
    /** Callback when date is selected. */
    onChange?: (date: Date) => void;
    /** Callback when month or year is changed. */
    onMonthChange?: (newDate?: Date, event?: React.MouseEvent | React.ChangeEvent | React.FormEvent<HTMLInputElement>) => void;
    /** @hide Internal prop to allow pressing escape in select menu to not close popover. */
    onSelectToggle?: (open: boolean) => void;
    /** Functions that returns if a date is valid and selectable. */
    validators?: ((date: Date) => boolean)[];
}
/** The main calendar month component. */
export declare const CalendarMonth: {
    ({ date: dateProp, locale, monthFormat, weekdayFormat, longWeekdayFormat, dayFormat, weekStart, onChange, validators, className, onSelectToggle, onMonthChange, rangeStart, prevMonthAriaLabel, nextMonthAriaLabel, yearInputAriaLabel, cellAriaLabel, isDateFocused, inlineProps, ...props }: CalendarProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CalendarMonth.d.ts.map