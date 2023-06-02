"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusTrap = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const focus_trap_1 = require("focus-trap");
class FocusTrapBase extends React.Component {
    constructor(props) {
        super(props);
        this.divRef = this.props.innerRef || React.createRef();
        if (typeof document !== 'undefined') {
            this.previouslyFocusedElement = document.activeElement;
        }
    }
    componentDidMount() {
        // We need to hijack the returnFocusOnDeactivate option,
        // because React can move focus into the element before we arrived at
        // this lifecycle hook (e.g. with autoFocus inputs). So the component
        // captures the previouslyFocusedElement in componentWillMount,
        // then (optionally) returns focus to it in componentWillUnmount.
        this.focusTrap = (0, focus_trap_1.createFocusTrap)(this.divRef.current, Object.assign(Object.assign({}, this.props.focusTrapOptions), { returnFocusOnDeactivate: false }));
        if (this.props.active) {
            this.focusTrap.activate();
        }
        if (this.props.paused) {
            this.focusTrap.pause();
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.active && !this.props.active) {
            this.focusTrap.deactivate();
        }
        else if (!prevProps.active && this.props.active) {
            this.focusTrap.activate();
        }
        if (prevProps.paused && !this.props.paused) {
            this.focusTrap.unpause();
        }
        else if (!prevProps.paused && this.props.paused) {
            this.focusTrap.pause();
        }
    }
    componentWillUnmount() {
        this.focusTrap.deactivate();
        if (this.props.focusTrapOptions.returnFocusOnDeactivate !== false &&
            this.previouslyFocusedElement &&
            this.previouslyFocusedElement.focus) {
            this.previouslyFocusedElement.focus({ preventScroll: this.props.preventScrollOnDeactivate });
        }
    }
    render() {
        const _a = this.props, { children, className, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        focusTrapOptions, active, paused, preventScrollOnDeactivate, innerRef } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        rest = tslib_1.__rest(_a, ["children", "className", "focusTrapOptions", "active", "paused", "preventScrollOnDeactivate", "innerRef"]);
        return (React.createElement("div", Object.assign({ ref: this.divRef, className: className }, rest), children));
    }
}
FocusTrapBase.displayName = 'FocusTrap';
FocusTrapBase.defaultProps = {
    active: true,
    paused: false,
    focusTrapOptions: {},
    preventScrollOnDeactivate: false
};
exports.FocusTrap = React.forwardRef((props, ref) => (React.createElement(FocusTrapBase, Object.assign({ innerRef: ref }, props))));
//# sourceMappingURL=FocusTrap.js.map