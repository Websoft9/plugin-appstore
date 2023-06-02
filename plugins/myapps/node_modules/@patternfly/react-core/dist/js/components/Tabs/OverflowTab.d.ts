import React from 'react';
import { TabProps } from './Tab';
export interface OverflowTabProps extends React.HTMLProps<HTMLLIElement> {
    /** Additional classes added to the overflow tab */
    className?: string;
    /** The tabs that should be displayed in the menu */
    overflowingTabs?: TabProps[];
    /** Flag which shows the count of overflowing tabs when enabled */
    showTabCount?: boolean;
    /** The text which displays when an overflowing tab isn't selected */
    defaultTitleText?: string;
    /** The aria label applied to the button which toggles the tab overflow menu */
    toggleAriaLabel?: string;
    /** @beta Opt-in for updated popper that does not use findDOMNode. */
    removeFindDomNode?: boolean;
    /** z-index of the overflow tab */
    zIndex?: number;
}
export declare const OverflowTab: React.FunctionComponent<OverflowTabProps>;
//# sourceMappingURL=OverflowTab.d.ts.map