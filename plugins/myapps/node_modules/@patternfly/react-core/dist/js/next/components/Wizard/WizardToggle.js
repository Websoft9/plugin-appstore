"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardToggle = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const caret_down_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/caret-down-icon'));
const constants_1 = require("../../../helpers/constants");
const Wizard_1 = require("../Wizard");
const types_1 = require("./types");
const WizardToggle = ({ steps, activeStep, footer, nav, isNavExpanded, toggleNavExpanded, 'aria-label': ariaLabel = 'Wizard toggle' }) => {
    const isActiveSubStep = (0, types_1.isWizardSubStep)(activeStep);
    const nonSubSteps = steps.filter(step => !(0, types_1.isWizardSubStep)(step));
    const wizardToggleIndex = nonSubSteps.indexOf((0, types_1.isWizardSubStep)(activeStep) ? steps.find(step => step.id === activeStep.parentId) : activeStep) + 1;
    const handleKeyClicks = react_1.default.useCallback((event) => {
        if (isNavExpanded && event.key === constants_1.KeyTypes.Escape) {
            toggleNavExpanded === null || toggleNavExpanded === void 0 ? void 0 : toggleNavExpanded(event);
        }
    }, [isNavExpanded, toggleNavExpanded]);
    // Open/close collapsable navigation on keydown event
    react_1.default.useEffect(() => {
        const target = typeof document !== 'undefined' ? document.body : null;
        target === null || target === void 0 ? void 0 : target.addEventListener('keydown', handleKeyClicks, false);
        return () => {
            target === null || target === void 0 ? void 0 : target.removeEventListener('keydown', handleKeyClicks, false);
        };
    }, [handleKeyClicks]);
    const bodyContent = steps.map(step => {
        var _a;
        const props = ((_a = step.component) === null || _a === void 0 ? void 0 : _a.props) || {};
        const { children, body } = props, propsWithoutChildren = tslib_1.__rest(props, ["children", "body"]);
        return (react_1.default.createElement(react_1.default.Fragment, { key: step.id },
            (activeStep === null || activeStep === void 0 ? void 0 : activeStep.name) === step.name &&
                (body || body === undefined ? react_1.default.createElement(Wizard_1.WizardBody, Object.assign({}, body), children) : children),
            react_1.default.createElement("div", { key: step.id, style: { display: 'none' } },
                react_1.default.createElement(Wizard_1.WizardStep, Object.assign({}, propsWithoutChildren)))));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { onClick: toggleNavExpanded, className: (0, react_styles_1.css)(wizard_1.default.wizardToggle, isNavExpanded && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavExpanded },
            react_1.default.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardToggleList) },
                react_1.default.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardToggleListItem) },
                    react_1.default.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardToggleNum) }, wizardToggleIndex),
                    " ", activeStep === null || activeStep === void 0 ? void 0 :
                    activeStep.name,
                    isActiveSubStep && react_1.default.createElement(angle_right_icon_1.default, { className: (0, react_styles_1.css)(wizard_1.default.wizardToggleSeparator), "aria-hidden": "true" })),
                isActiveSubStep && react_1.default.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardToggleListItem) }, activeStep === null || activeStep === void 0 ? void 0 : activeStep.name)),
            react_1.default.createElement("span", { className: (0, react_styles_1.css)(wizard_1.default.wizardToggleIcon) },
                react_1.default.createElement(caret_down_icon_1.default, { "aria-hidden": "true" }))),
        react_1.default.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardOuterWrap) },
            react_1.default.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardInnerWrap) },
                nav,
                bodyContent),
            footer)));
};
exports.WizardToggle = WizardToggle;
exports.WizardToggle.displayName = 'WizardToggle';
//# sourceMappingURL=WizardToggle.js.map