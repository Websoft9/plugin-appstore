"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chip = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Button_1 = require("../Button");
const Tooltip_1 = require("../Tooltip");
const times_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/times-icon'));
const chip_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Chip/chip"));
const GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
const helpers_1 = require("../../helpers");
class Chip extends React.Component {
    constructor(props) {
        super(props);
        this.span = React.createRef();
        this.setChipStyle = () => ({
            '--pf-c-chip__text--MaxWidth': this.props.textMaxWidth
        });
        this.renderOverflowChip = () => {
            const _a = this.props, { children, className, onClick, ouiaId, textMaxWidth, style, component, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            tooltipPosition, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            isOverflowChip, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            closeBtnAriaLabel, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            isReadOnly } = _a, props = tslib_1.__rest(_a, ["children", "className", "onClick", "ouiaId", "textMaxWidth", "style", "component", "tooltipPosition", "isOverflowChip", "closeBtnAriaLabel", "isReadOnly"]);
            const Component = component;
            return (React.createElement(Component, Object.assign({ onClick: onClick }, (textMaxWidth && Object.assign({ style: this.setChipStyle() }, style)), { className: (0, react_styles_1.css)(chip_1.default.chip, chip_1.default.modifiers.overflow, className) }, (component === 'button' ? { type: 'button' } : {}), (0, helpers_1.getOUIAProps)('OverflowChip', ouiaId !== undefined ? ouiaId : this.state.ouiaStateId), props),
                React.createElement("span", { className: (0, react_styles_1.css)(chip_1.default.chipText) }, children)));
        };
        this.renderChip = (randomId) => {
            const { children, tooltipPosition } = this.props;
            if (this.state.isTooltipVisible) {
                return (React.createElement(Tooltip_1.Tooltip, { position: tooltipPosition, content: children }, this.renderInnerChip(randomId)));
            }
            return this.renderInnerChip(randomId);
        };
        this.state = {
            isTooltipVisible: false,
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(Chip.displayName)
        };
    }
    componentDidMount() {
        this.setState({
            isTooltipVisible: Boolean(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth)
        });
    }
    renderInnerChip(id) {
        const _a = this.props, { children, className, onClick, closeBtnAriaLabel, isReadOnly, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isOverflowChip, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tooltipPosition, component, ouiaId } = _a, props = tslib_1.__rest(_a, ["children", "className", "onClick", "closeBtnAriaLabel", "isReadOnly", "isOverflowChip", "tooltipPosition", "component", "ouiaId"]);
        const Component = component;
        return (React.createElement(Component, Object.assign({}, (this.props.textMaxWidth && {
            style: this.setChipStyle()
        }), { className: (0, react_styles_1.css)(chip_1.default.chip, className) }, (this.state.isTooltipVisible && { tabIndex: 0 }), (0, helpers_1.getOUIAProps)(Chip.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId), props),
            React.createElement("span", { ref: this.span, className: (0, react_styles_1.css)(chip_1.default.chipText), id: id }, children),
            !isReadOnly && (React.createElement(Button_1.Button, { onClick: onClick, variant: "plain", "aria-label": closeBtnAriaLabel, id: `remove_${id}`, "aria-labelledby": `remove_${id} ${id}`, ouiaId: ouiaId || closeBtnAriaLabel },
                React.createElement(times_icon_1.default, { "aria-hidden": "true" })))));
    }
    render() {
        const { isOverflowChip } = this.props;
        return (React.createElement(GenerateId_1.GenerateId, null, randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(this.props.id || randomId))));
    }
}
exports.Chip = Chip;
Chip.displayName = 'Chip';
Chip.defaultProps = {
    closeBtnAriaLabel: 'close',
    className: '',
    isOverflowChip: false,
    isReadOnly: false,
    tooltipPosition: 'top',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: (_e) => undefined,
    component: 'div'
};
//# sourceMappingURL=Chip.js.map