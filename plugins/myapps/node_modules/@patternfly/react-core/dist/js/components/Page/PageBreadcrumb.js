"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBreadcrumb = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const page_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Page/page"));
const util_1 = require("../../helpers/util");
const PageContext_1 = require("./PageContext");
const PageBreadcrumb = (_a) => {
    var { className = '', children, isWidthLimited, sticky, stickyOnBreakpoint, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false, 'aria-label': ariaLabel } = _a, props = tslib_1.__rest(_a, ["className", "children", "isWidthLimited", "sticky", "stickyOnBreakpoint", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll", 'aria-label']);
    const { height, getVerticalBreakpoint } = React.useContext(PageContext_1.PageContext);
    React.useEffect(() => {
        if (hasOverflowScroll && !ariaLabel) {
            /* eslint-disable no-console */
            console.warn('PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.');
        }
    }, [hasOverflowScroll, ariaLabel]);
    return (React.createElement("section", Object.assign({ className: (0, react_styles_1.css)(page_1.default.pageMainBreadcrumb, (0, util_1.formatBreakpointMods)(stickyOnBreakpoint, page_1.default, 'sticky-', getVerticalBreakpoint(height), true), isWidthLimited && page_1.default.modifiers.limitWidth, sticky === 'top' && page_1.default.modifiers.stickyTop, sticky === 'bottom' && page_1.default.modifiers.stickyBottom, hasShadowTop && page_1.default.modifiers.shadowTop, hasShadowBottom && page_1.default.modifiers.shadowBottom, hasOverflowScroll && page_1.default.modifiers.overflowScroll, className) }, (hasOverflowScroll && { tabIndex: 0 }), { "aria-label": ariaLabel }, props),
        isWidthLimited && React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageMainBody) }, children),
        !isWidthLimited && children));
};
exports.PageBreadcrumb = PageBreadcrumb;
exports.PageBreadcrumb.displayName = 'PageBreadcrumb';
//# sourceMappingURL=PageBreadcrumb.js.map