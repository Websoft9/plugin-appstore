import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface TabContentProps extends Omit<React.HTMLProps<HTMLElement>, 'ref'>, OUIAProps {
    /** content rendered inside the tab content area if used outside Tabs component */
    children?: any;
    /** Child to show in the content area */
    child?: React.ReactElement<any>;
    /** class of tab content area if used outside Tabs component */
    className?: string;
    /** Identifies the active Tab  */
    activeKey?: number | string;
    /** uniquely identifies the controlling Tab if used outside Tabs component */
    eventKey?: number | string;
    /** Callback for the section ref */
    innerRef?: React.Ref<any>;
    /** id passed from parent to identify the content section */
    id: string;
    /** title of controlling Tab if used outside Tabs component */
    'aria-label'?: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const TabContent: React.ForwardRefExoticComponent<TabContentProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=TabContent.d.ts.map