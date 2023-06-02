"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionContent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const accordion_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Accordion/accordion"));
const AccordionContext_1 = require("./AccordionContext");
const AccordionExpandedContentBody_1 = require("./AccordionExpandedContentBody");
const AccordionContent = (_a) => {
    var { className = '', children = null, id = '', isHidden = false, isFixed = false, isCustomContent = false, 'aria-label': ariaLabel = '', 'aria-labelledby': ariaLabelledby, component } = _a, props = tslib_1.__rest(_a, ["className", "children", "id", "isHidden", "isFixed", "isCustomContent", 'aria-label', 'aria-labelledby', "component"]);
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
    return (React.createElement(AccordionContext_1.AccordionContext.Consumer, null, ({ ContentContainer }) => {
        const Container = component || ContentContainer;
        return (React.createElement(Container, Object.assign({ ref: containerRef, id: id, className: (0, react_styles_1.css)(accordion_1.default.accordionExpandedContent, isFixed && accordion_1.default.modifiers.fixed, !isHidden && accordion_1.default.modifiers.expanded, className), hidden: isHidden }, (ariaLabel && { 'aria-label': ariaLabel }), (ariaLabelledby && { 'aria-labelledby': ariaLabelledby }), (hasScrollbar && { tabIndex: 0 }), (hasScrollbar && Container === 'div' && { role: 'region' }), props), isCustomContent ? children : React.createElement(AccordionExpandedContentBody_1.AccordionExpandedContentBody, null, children)));
    }));
};
exports.AccordionContent = AccordionContent;
exports.AccordionContent.displayName = 'AccordionContent';
//# sourceMappingURL=AccordionContent.js.map