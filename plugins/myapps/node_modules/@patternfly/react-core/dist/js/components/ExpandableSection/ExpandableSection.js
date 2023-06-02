"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandableSection = exports.ExpandableSectionVariant = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const expandable_section_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ExpandableSection/expandable-section"));
const react_styles_1 = require("@patternfly/react-styles");
const c_expandable_section_m_truncate__content_LineClamp_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_expandable_section_m_truncate__content_LineClamp'));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const util_1 = require("../../helpers/util");
const resizeObserver_1 = require("../../helpers/resizeObserver");
var ExpandableSectionVariant;
(function (ExpandableSectionVariant) {
    ExpandableSectionVariant["default"] = "default";
    ExpandableSectionVariant["truncate"] = "truncate";
})(ExpandableSectionVariant = exports.ExpandableSectionVariant || (exports.ExpandableSectionVariant = {}));
const setLineClamp = (lines, element) => {
    if (!element || lines < 1) {
        return;
    }
    element.style.setProperty(c_expandable_section_m_truncate__content_LineClamp_1.default.name, lines.toString());
};
class ExpandableSection extends React.Component {
    constructor(props) {
        super(props);
        this.expandableContentRef = React.createRef();
        this.observer = () => { };
        this.checkToggleVisibility = () => {
            var _a;
            if ((_a = this.expandableContentRef) === null || _a === void 0 ? void 0 : _a.current) {
                const maxLines = this.props.truncateMaxLines || parseInt(c_expandable_section_m_truncate__content_LineClamp_1.default.value);
                const totalLines = this.expandableContentRef.current.scrollHeight /
                    parseInt(getComputedStyle(this.expandableContentRef.current).lineHeight);
                this.setState({
                    hasToggle: totalLines > maxLines
                });
            }
        };
        this.resize = () => {
            const { offsetWidth } = this.expandableContentRef.current;
            if (this.state.previousWidth !== offsetWidth) {
                this.setState({ previousWidth: offsetWidth });
                this.checkToggleVisibility();
            }
        };
        this.handleResize = (0, util_1.debounce)(this.resize, 250);
        this.state = {
            isExpanded: props.isExpanded,
            hasToggle: true,
            previousWidth: undefined
        };
    }
    calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded) {
        if (propOrStateIsExpanded && toggleTextExpanded !== '') {
            return toggleTextExpanded;
        }
        if (!propOrStateIsExpanded && toggleTextCollapsed !== '') {
            return toggleTextCollapsed;
        }
        return toggleText;
    }
    componentDidMount() {
        if (this.props.variant === ExpandableSectionVariant.truncate) {
            const expandableContent = this.expandableContentRef.current;
            this.setState({ previousWidth: expandableContent.offsetWidth });
            this.observer = (0, resizeObserver_1.getResizeObserver)(expandableContent, this.handleResize, false);
            if (this.props.truncateMaxLines) {
                setLineClamp(this.props.truncateMaxLines, expandableContent);
            }
            this.checkToggleVisibility();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.variant === ExpandableSectionVariant.truncate &&
            prevProps.truncateMaxLines !== this.props.truncateMaxLines) {
            const expandableContent = this.expandableContentRef.current;
            setLineClamp(this.props.truncateMaxLines, expandableContent);
            this.checkToggleVisibility();
        }
    }
    componentWillUnmount() {
        if (this.props.variant === ExpandableSectionVariant.truncate) {
            this.observer();
        }
    }
    render() {
        const _a = this.props, { onToggle: onToggleProp, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isActive, className, toggleText, toggleTextExpanded, toggleTextCollapsed, toggleContent, children, isExpanded, isDetached, displaySize, isWidthLimited, isIndented, contentId, variant, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        truncateMaxLines } = _a, props = tslib_1.__rest(_a, ["onToggle", "isActive", "className", "toggleText", "toggleTextExpanded", "toggleTextCollapsed", "toggleContent", "children", "isExpanded", "isDetached", "displaySize", "isWidthLimited", "isIndented", "contentId", "variant", "truncateMaxLines"]);
        let onToggle = onToggleProp;
        let propOrStateIsExpanded = isExpanded;
        // uncontrolled
        if (isExpanded === undefined) {
            propOrStateIsExpanded = this.state.isExpanded;
            onToggle = isOpen => {
                this.setState({ isExpanded: isOpen }, () => onToggleProp(this.state.isExpanded));
            };
        }
        const computedToggleText = this.calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded);
        const expandableToggle = !isDetached && (React.createElement("button", { className: (0, react_styles_1.css)(expandable_section_1.default.expandableSectionToggle), type: "button", "aria-expanded": propOrStateIsExpanded, onClick: () => onToggle(!propOrStateIsExpanded) },
            variant !== ExpandableSectionVariant.truncate && (React.createElement("span", { className: (0, react_styles_1.css)(expandable_section_1.default.expandableSectionToggleIcon) },
                React.createElement(angle_right_icon_1.default, { "aria-hidden": true }))),
            React.createElement("span", { className: (0, react_styles_1.css)(expandable_section_1.default.expandableSectionToggleText) }, toggleContent || computedToggleText)));
        return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(expandable_section_1.default.expandableSection, propOrStateIsExpanded && expandable_section_1.default.modifiers.expanded, isActive && expandable_section_1.default.modifiers.active, isDetached && expandable_section_1.default.modifiers.detached, displaySize === 'large' && expandable_section_1.default.modifiers.displayLg, isWidthLimited && expandable_section_1.default.modifiers.limitWidth, isIndented && expandable_section_1.default.modifiers.indented, variant === ExpandableSectionVariant.truncate && expandable_section_1.default.modifiers.truncate, className) }, props),
            variant === ExpandableSectionVariant.default && expandableToggle,
            React.createElement("div", { ref: this.expandableContentRef, className: (0, react_styles_1.css)(expandable_section_1.default.expandableSectionContent), hidden: variant !== ExpandableSectionVariant.truncate && !propOrStateIsExpanded, id: contentId }, children),
            variant === ExpandableSectionVariant.truncate && this.state.hasToggle && expandableToggle));
    }
}
exports.ExpandableSection = ExpandableSection;
ExpandableSection.displayName = 'ExpandableSection';
ExpandableSection.defaultProps = {
    className: '',
    toggleText: '',
    toggleTextExpanded: '',
    toggleTextCollapsed: '',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle: (isExpanded) => undefined,
    isActive: false,
    isDetached: false,
    displaySize: 'default',
    isWidthLimited: false,
    isIndented: false,
    contentId: '',
    variant: 'default'
};
//# sourceMappingURL=ExpandableSection.js.map