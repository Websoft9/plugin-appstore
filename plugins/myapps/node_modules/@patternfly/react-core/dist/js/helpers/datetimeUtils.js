"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
/**
 * @param {Date} date - A date to check the validity of
 */
const isValidDate = (date) => Boolean(date && !isNaN(date));
exports.isValidDate = isValidDate;
//# sourceMappingURL=datetimeUtils.js.map