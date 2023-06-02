"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.TimestampTooltipVariant = exports.TimestampFormat = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const timestamp_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Timestamp/timestamp"));
const react_styles_1 = require("@patternfly/react-styles");
const Tooltip_1 = require("../Tooltip");
const datetimeUtils_1 = require("../../helpers/datetimeUtils");
var TimestampFormat;
(function (TimestampFormat) {
    TimestampFormat["full"] = "full";
    TimestampFormat["long"] = "long";
    TimestampFormat["medium"] = "medium";
    TimestampFormat["short"] = "short";
})(TimestampFormat = exports.TimestampFormat || (exports.TimestampFormat = {}));
var TimestampTooltipVariant;
(function (TimestampTooltipVariant) {
    TimestampTooltipVariant["default"] = "default";
    TimestampTooltipVariant["custom"] = "custom";
})(TimestampTooltipVariant = exports.TimestampTooltipVariant || (exports.TimestampTooltipVariant = {}));
const Timestamp = (_a) => {
    var { children, className, customFormat, date: dateProp, dateFormat, displaySuffix = '', is12Hour, locale, timeFormat, tooltip } = _a, props = tslib_1.__rest(_a, ["children", "className", "customFormat", "date", "dateFormat", "displaySuffix", "is12Hour", "locale", "timeFormat", "tooltip"]);
    const [date, setDate] = React.useState(() => {
        const initDate = new Date(dateProp);
        if ((0, datetimeUtils_1.isValidDate)(initDate)) {
            return initDate;
        }
        return new Date();
    });
    React.useEffect(() => {
        const dateFromProp = new Date(dateProp);
        if ((0, datetimeUtils_1.isValidDate)(dateFromProp) && dateFromProp.toString() !== new Date(date).toString()) {
            setDate(dateFromProp);
        }
        else if (!dateProp) {
            setDate(new Date());
        }
    }, [dateProp]);
    const hasTimeFormat = timeFormat && !customFormat;
    const formatOptions = Object.assign(Object.assign(Object.assign({}, (dateFormat && !customFormat && { dateStyle: dateFormat })), (customFormat && Object.assign({}, customFormat))), (is12Hour !== undefined && { hour12: is12Hour }));
    const dateAsLocaleString = new Date(date).toLocaleString(locale, Object.assign(Object.assign({}, formatOptions), (hasTimeFormat && { timeStyle: timeFormat })));
    const defaultDisplay = `${dateAsLocaleString}${displaySuffix ? ' ' + displaySuffix : ''}`;
    const utcTimeFormat = timeFormat !== 'short' ? 'medium' : 'short';
    const convertToUTCString = (date) => new Date(date).toUTCString().slice(0, -3);
    const utcDateString = new Date(convertToUTCString(date)).toLocaleString(locale, Object.assign(Object.assign({}, formatOptions), (hasTimeFormat && { timeStyle: utcTimeFormat })));
    const defaultTooltipContent = `${utcDateString}${(tooltip === null || tooltip === void 0 ? void 0 : tooltip.suffix) ? ' ' + tooltip.suffix : ' UTC'}`;
    const { dateTime } = props, propsWithoutDateTime = tslib_1.__rest(props, ["dateTime"]);
    const timestamp = (React.createElement("span", Object.assign({ className: (0, react_styles_1.css)(timestamp_1.default.timestamp, tooltip && timestamp_1.default.modifiers.helpText, className) }, (tooltip && { tabIndex: 0 }), propsWithoutDateTime),
        React.createElement("time", { className: "pf-c-timestamp__text", dateTime: dateTime || new Date(date).toISOString() }, !children ? defaultDisplay : children)));
    return tooltip ? (React.createElement(Tooltip_1.Tooltip, Object.assign({ content: tooltip.variant === TimestampTooltipVariant.default ? defaultTooltipContent : tooltip.content }, tooltip.tooltipProps), timestamp)) : (timestamp);
};
exports.Timestamp = Timestamp;
exports.Timestamp.displayName = 'Timestamp';
//# sourceMappingURL=Timestamp.js.map