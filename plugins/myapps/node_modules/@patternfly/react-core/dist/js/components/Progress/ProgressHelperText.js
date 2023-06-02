"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressHelperText = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const progress_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Progress/progress"));
const ProgressHelperText = (_a) => {
    var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
    return (React.createElement("div", Object.assign({ className: progress_1.default.progressHelperText }, props), children));
};
exports.ProgressHelperText = ProgressHelperText;
exports.ProgressHelperText.displayName = 'ProgressHelperText';
//# sourceMappingURL=ProgressHelperText.js.map