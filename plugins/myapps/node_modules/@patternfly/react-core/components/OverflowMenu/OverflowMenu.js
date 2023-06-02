import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { css } from '@patternfly/react-styles';
import { OverflowMenuContext } from './OverflowMenuContext';
import { debounce } from '../../helpers/util';
import { globalWidthBreakpoints } from '../../helpers/constants';
import { getResizeObserver } from '../../helpers/resizeObserver';
export class OverflowMenu extends React.Component {
    constructor(props) {
        super(props);
        this.observer = () => { };
        this.handleResize = () => {
            const breakpointWidth = globalWidthBreakpoints[this.props.breakpoint];
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
        this.handleResizeWithDelay = debounce(this.handleResize, 250);
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
        this.observer = getResizeObserver(reference, this.handleResizeWithDelay);
        this.handleResize();
    }
    componentDidUpdate(prevProps, prevState) {
        const reference = this.props.breakpointReference ? this.getBreakpointRef() : undefined;
        if (prevState.breakpointRef !== reference) {
            // To remove any previous observer/event listener from componentDidMount before adding a new one
            this.observer();
            this.setState({ breakpointRef: reference });
            this.observer = getResizeObserver(reference, this.handleResizeWithDelay);
            this.handleResize();
        }
    }
    componentWillUnmount() {
        this.observer();
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = this.props, { className, breakpoint, children, breakpointReference } = _a, props = __rest(_a, ["className", "breakpoint", "children", "breakpointReference"]);
        return (React.createElement("div", Object.assign({}, props, { className: css(styles.overflowMenu, className) }),
            React.createElement(OverflowMenuContext.Provider, { value: { isBelowBreakpoint: this.state.isBelowBreakpoint } }, children)));
    }
}
OverflowMenu.displayName = 'OverflowMenu';
OverflowMenu.contextType = OverflowMenuContext;
//# sourceMappingURL=OverflowMenu.js.map