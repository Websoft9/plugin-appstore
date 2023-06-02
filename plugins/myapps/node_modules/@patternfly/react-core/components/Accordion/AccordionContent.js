import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { AccordionContext } from './AccordionContext';
import { AccordionExpandedContentBody } from './AccordionExpandedContentBody';
export const AccordionContent = (_a) => {
    var { className = '', children = null, id = '', isHidden = false, isFixed = false, isCustomContent = false, 'aria-label': ariaLabel = '', 'aria-labelledby': ariaLabelledby, component } = _a, props = __rest(_a, ["className", "children", "id", "isHidden", "isFixed", "isCustomContent", 'aria-label', 'aria-labelledby', "component"]);
    const [hasScrollbar, setHasScrollbar] = React.useState(false);
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        if ((containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) && isFixed && !isHidden) {
            const { offsetHeight, scrollHeight } = containerRef.current;
            setHasScrollbar(offsetHeight < scrollHeight);
        }
        else if (!isFixed) {
            setHasScrollbar(false);
        }
    }, [containerRef, isFixed, isHidden]);
    return (React.createElement(AccordionContext.Consumer, null, ({ ContentContainer }) => {
        const Container = component || ContentContainer;
        return (React.createElement(Container, Object.assign({ ref: containerRef, id: id, className: css(styles.accordionExpandedContent, isFixed && styles.modifiers.fixed, !isHidden && styles.modifiers.expanded, className), hidden: isHidden }, (ariaLabel && { 'aria-label': ariaLabel }), (ariaLabelledby && { 'aria-labelledby': ariaLabelledby }), (hasScrollbar && { tabIndex: 0 }), (hasScrollbar && Container === 'div' && { role: 'region' }), props), isCustomContent ? children : React.createElement(AccordionExpandedContentBody, null, children)));
    }));
};
AccordionContent.displayName = 'AccordionContent';
//# sourceMappingURL=AccordionContent.js.map