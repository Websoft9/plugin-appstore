"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandableSectionToggle = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const expandable_section_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ExpandableSection/expandable-section"));
const react_styles_1 = require("@patternfly/react-styles");
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const ExpandableSectionToggle = (_a) => {
    var { children, className = '', isExpanded = false, onToggle, contentId, direction = 'down', hasTruncatedContent = false } = _a, props = tslib_1.__rest(_a, ["children", "className", "isExpanded", "onToggle", "contentId", "direction", "hasTruncatedContent"]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(expandable_section_1.default.expandableSection, isExpanded && expandable_section_1.default.modifiers.expanded, expandable_section_1.default.modifiers.detached, hasTruncatedContent && expandable_section_1.default.modifiers.truncate, className) }, props),
        React.createElement("button", { className: (0, react_styles_1.css)(expandable_section_1.default.expandableSectionToggle), type: "button", "aria-expanded": isExpanded, "aria-controls": contentId, onClick: () => onToggle(!isExpanded) },
            !hasTruncatedContent && (React.createElement("span", { className: (0, react_styles_1.css)(expandable_section_1.default.expandableSectionToggleIcon, isExpanded && direction === 'up' && expandable_section_1.default.modifiers.expandTop) },
                React.createElement(angle_right_icon_1.default, { "aria-hidden": true }))),
            React.createElement("span", { className: (0, react_styles_1.css)(expandable_section_1.default.expandableSectionToggleText) }, children))));
};
exports.ExpandableSectionToggle = ExpandableSectionToggle;
exports.ExpandableSectionToggle.displayName = 'ExpandableSectionToggle';
//# sourceMappingURL=ExpandableSectionToggle.js.map