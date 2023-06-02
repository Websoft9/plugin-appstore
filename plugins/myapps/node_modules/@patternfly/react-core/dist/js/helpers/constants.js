"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalHeightBreakpoints = exports.globalWidthBreakpoints = exports.KeyTypes = exports.ValidatedOptions = exports.KEYHANDLER_DIRECTION = exports.SIDE = exports.KEY_CODES = void 0;
const tslib_1 = require("tslib");
const global_breakpoint_sm_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_breakpoint_sm'));
const global_breakpoint_md_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_breakpoint_md'));
const global_breakpoint_lg_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_breakpoint_lg'));
const global_breakpoint_xl_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_breakpoint_xl'));
const global_breakpoint_2xl_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_breakpoint_2xl'));
const global_height_breakpoint_sm_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_height_breakpoint_sm'));
const global_height_breakpoint_md_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_height_breakpoint_md'));
const global_height_breakpoint_lg_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_height_breakpoint_lg'));
const global_height_breakpoint_xl_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_height_breakpoint_xl'));
const global_height_breakpoint_2xl_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_height_breakpoint_2xl'));
exports.KEY_CODES = { ARROW_UP: 38, ARROW_DOWN: 40, ESCAPE_KEY: 27, TAB: 9, ENTER: 13, SPACE: 32 };
exports.SIDE = { RIGHT: 'right', LEFT: 'left', BOTH: 'both', NONE: 'none' };
exports.KEYHANDLER_DIRECTION = { UP: 'up', DOWN: 'down', RIGHT: 'right', LEFT: 'left' };
var ValidatedOptions;
(function (ValidatedOptions) {
    ValidatedOptions["success"] = "success";
    ValidatedOptions["error"] = "error";
    ValidatedOptions["warning"] = "warning";
    ValidatedOptions["default"] = "default";
})(ValidatedOptions = exports.ValidatedOptions || (exports.ValidatedOptions = {}));
exports.KeyTypes = {
    Tab: 'Tab',
    Space: ' ',
    Escape: 'Escape',
    Enter: 'Enter',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight'
};
exports.globalWidthBreakpoints = {
    sm: parseInt(global_breakpoint_sm_1.default.value),
    md: parseInt(global_breakpoint_md_1.default.value),
    lg: parseInt(global_breakpoint_lg_1.default.value),
    xl: parseInt(global_breakpoint_xl_1.default.value),
    '2xl': parseInt(global_breakpoint_2xl_1.default.value)
};
exports.globalHeightBreakpoints = {
    sm: parseInt(global_height_breakpoint_sm_1.default.value),
    md: parseInt(global_height_breakpoint_md_1.default.value),
    lg: parseInt(global_height_breakpoint_lg_1.default.value),
    xl: parseInt(global_height_breakpoint_xl_1.default.value),
    '2xl': parseInt(global_height_breakpoint_2xl_1.default.value)
};
//# sourceMappingURL=constants.js.map