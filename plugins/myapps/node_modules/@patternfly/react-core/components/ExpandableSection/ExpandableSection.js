import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import { css } from '@patternfly/react-styles';
import lineClamp from '@patternfly/react-tokens/dist/esm/c_expandable_section_m_truncate__content_LineClamp';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { debounce } from '../../helpers/util';
import { getResizeObserver } from '../../helpers/resizeObserver';
export var ExpandableSectionVariant;
(function (ExpandableSectionVariant) {
    ExpandableSectionVariant["default"] = "default";
    ExpandableSectionVariant["truncate"] = "truncate";
})(ExpandableSectionVariant || (ExpandableSectionVariant = {}));
const setLineClamp = (lines, element) => {
    if (!element || lines < 1) {
        return;
    }
    element.style.setProperty(lineClamp.name, lines.toString());
};
export class ExpandableSection extends React.Component {
    constructor(props) {
        super(props);
        this.expandableContentRef = React.createRef();
        this.observer = () => { };
        this.checkToggleVisibility = () => {
            var _a;
            if ((_a = this.expandableContentRef) === null || _a === void 0 ? void 0 : _a.current) {
                const maxLines = this.props.truncateMaxLines || parseInt(lineClamp.value);
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
        this.handleResize = debounce(this.resize, 250);
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
            this.observer = getResizeObserver(expandableContent, this.handleResize, false);
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
        truncateMaxLines } = _a, props = __rest(_a, ["onToggle", "isActive", "className", "toggleText", "toggleTextExpanded", "toggleTextCollapsed", "toggleContent", "children", "isExpanded", "isDetached", "displaySize", "isWidthLimited", "isIndented", "contentId", "variant", "truncateMaxLines"]);
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
        const expandableToggle = !isDetached && (React.createElement("button", { className: css(styles.expandableSectionToggle), type: "button", "aria-expanded": propOrStateIsExpanded, onClick: () => onToggle(!propOrStateIsExpanded) },
            variant !== ExpandableSectionVariant.truncate && (React.createElement("span", { className: css(styles.expandableSectionToggleIcon) },
                React.createElement(AngleRightIcon, { "aria-hidden": true }))),
            React.createElement("span", { className: css(styles.expandableSectionToggleText) }, toggleContent || computedToggleText)));
        return (React.createElement("div", Object.assign({ className: css(styles.expandableSection, propOrStateIsExpanded && styles.modifiers.expanded, isActive && styles.modifiers.active, isDetached && styles.modifiers.detached, displaySize === 'large' && styles.modifiers.displayLg, isWidthLimited && styles.modifiers.limitWidth, isIndented && styles.modifiers.indented, variant === ExpandableSectionVariant.truncate && styles.modifiers.truncate, className) }, props),
            variant === ExpandableSectionVariant.default && expandableToggle,
            React.createElement("div", { ref: this.expandableContentRef, className: css(styles.expandableSectionContent), hidden: variant !== ExpandableSectionVariant.truncate && !propOrStateIsExpanded, id: contentId }, children),
            variant === ExpandableSectionVariant.truncate && this.state.hasToggle && expandableToggle));
    }
}
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