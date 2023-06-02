import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import { KeyTypes } from '../../../helpers/constants';
import { WizardBody, WizardStep } from '../Wizard';
import { isWizardSubStep } from './types';
export const WizardToggle = ({ steps, activeStep, footer, nav, isNavExpanded, toggleNavExpanded, 'aria-label': ariaLabel = 'Wizard toggle' }) => {
    const isActiveSubStep = isWizardSubStep(activeStep);
    const nonSubSteps = steps.filter(step => !isWizardSubStep(step));
    const wizardToggleIndex = nonSubSteps.indexOf(isWizardSubStep(activeStep) ? steps.find(step => step.id === activeStep.parentId) : activeStep) + 1;
    const handleKeyClicks = React.useCallback((event) => {
        if (isNavExpanded && event.key === KeyTypes.Escape) {
            toggleNavExpanded === null || toggleNavExpanded === void 0 ? void 0 : toggleNavExpanded(event);
        }
    }, [isNavExpanded, toggleNavExpanded]);
    // Open/close collapsable navigation on keydown event
    React.useEffect(() => {
        const target = typeof document !== 'undefined' ? document.body : null;
        target === null || target === void 0 ? void 0 : target.addEventListener('keydown', handleKeyClicks, false);
        return () => {
            target === null || target === void 0 ? void 0 : target.removeEventListener('keydown', handleKeyClicks, false);
        };
    }, [handleKeyClicks]);
    const bodyContent = steps.map(step => {
        var _a;
        const props = ((_a = step.component) === null || _a === void 0 ? void 0 : _a.props) || {};
        const { children, body } = props, propsWithoutChildren = __rest(props, ["children", "body"]);
        return (React.createElement(React.Fragment, { key: step.id },
            (activeStep === null || activeStep === void 0 ? void 0 : activeStep.name) === step.name &&
                (body || body === undefined ? React.createElement(WizardBody, Object.assign({}, body), children) : children),
            React.createElement("div", { key: step.id, style: { display: 'none' } },
                React.createElement(WizardStep, Object.assign({}, propsWithoutChildren)))));
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: toggleNavExpanded, className: css(styles.wizardToggle, isNavExpanded && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavExpanded },
            React.createElement("span", { className: css(styles.wizardToggleList) },
                React.createElement("span", { className: css(styles.wizardToggleListItem) },
                    React.createElement("span", { className: css(styles.wizardToggleNum) }, wizardToggleIndex),
                    " ", activeStep === null || activeStep === void 0 ? void 0 :
                    activeStep.name,
                    isActiveSubStep && React.createElement(AngleRightIcon, { className: css(styles.wizardToggleSeparator), "aria-hidden": "true" })),
                isActiveSubStep && React.createElement("span", { className: css(styles.wizardToggleListItem) }, activeStep === null || activeStep === void 0 ? void 0 : activeStep.name)),
            React.createElement("span", { className: css(styles.wizardToggleIcon) },
                React.createElement(CaretDownIcon, { "aria-hidden": "true" }))),
        React.createElement("div", { className: css(styles.wizardOuterWrap) },
            React.createElement("div", { className: css(styles.wizardInnerWrap) },
                nav,
                bodyContent),
            footer)));
};
WizardToggle.displayName = 'WizardToggle';
//# sourceMappingURL=WizardToggle.js.map