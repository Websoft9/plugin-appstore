import React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';
export const WizardBody = ({ children, hasNoPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, component: WrapperComponent = 'div' }) => (React.createElement(WrapperComponent, { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: css(styles.wizardMain) },
    React.createElement("div", { className: css(styles.wizardMainBody, hasNoPadding && styles.modifiers.noPadding) }, children)));
WizardBody.displayName = 'WizardBody';
//# sourceMappingURL=WizardBody.js.map