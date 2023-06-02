"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowMenu = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const overflow_menu_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/OverflowMenu/overflow-menu"));
const react_styles_1 = require("@patternfly/react-styles");
const OverflowMenuContext_1 = require("./OverflowMenuContext");
const util_1 = require("../../helpers/util");
const constants_1 = require("../../helpers/constants");
const resizeObserver_1 = require("../../helpers/resizeObserver");
class OverflowMenu extends React.Component {
    constructor(props) {
        super(props);
        this.observer = () => { };
        this.handleResize = () => {
            const breakpointWidth = constants_1.globalWidthBreakpoints[this.props.breakpoint];
            if (!breakpointWidth) {
                // eslint-disable-next-line no-console
                console.error('OverflowMenu will not be visible without a valid breakpoint.');
                return;
            }
            const relativeWidth = this.state.breakpointRef ? this.state.breakpointRef.clientWidth : window.innerWidth;
            const isBelowBreakpoint = relativeWidth < breakpointWidth;
            if (this.state.isBelowBreakpoint !== isBelowBreakpoint) {
                this.setState({ isBelowBreakpoint });
            }
        };
        this.handleResizeWithDelay = (0, util_1.debounce)(this.handleResize, 250);
        this.state = {
            isBelowBreakpoint: false,
            breakpointRef: undefined
        };
    }
    getBreakpointRef() {
        const { breakpointReference } = this.props;
        if (breakpointReference.current) {
            return breakpointReference.current;
        }
        else if (typeof breakpointReference === 'function') {
            return breakpointReference();
        }
    }
    componentDidMount() {
        const reference = this.props.breakpointReference ? this.getBreakpointRef() : undefined;
        this.setState({ breakpointRef: reference });
        this.observer = (0, resizeObserver_1.getResizeObserver)(reference, this.handleResizeWithDelay);
        this.handleResize();
    }
    componentDidUpdate(prevProps, prevState) {
        const reference = this.props.breakpointReference ? this.getBreakpointRef() : undefined;
        if (prevState.breakpointRef !== reference) {
            // To remove any previous observer/event listener from componentDidMount before adding a new one
            this.observer();
            this.setState({ breakpointRef: reference });
            this.observer = (0, resizeObserver_1.getResizeObserver)(reference, this.handleResizeWithDelay);
            this.handleResize();
        }
    }
    componentWillUnmount() {
        this.observer();
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = this.props, { className, breakpoint, children, breakpointReference } = _a, props = tslib_1.__rest(_a, ["className", "breakpoint", "children", "breakpointReference"]);
        return (React.createElement("div", Object.assign({}, props, { className: (0, react_styles_1.css)(overflow_menu_1.default.overflowMenu, className) }),
            React.createElement(OverflowMenuContext_1.OverflowMenuContext.Provider, { value: { isBelowBreakpoint: this.state.isBelowBreakpoint } }, children)));
    }
}
exports.OverflowMenu = OverflowMenu;
OverflowMenu.displayName = 'OverflowMenu';
OverflowMenu.contextType = OverflowMenuContext_1.OverflowMenuContext;
//# sourceMappingURL=OverflowMenu.js.map