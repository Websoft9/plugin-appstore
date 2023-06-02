import React from 'react';
import { useWizardContext } from '../WizardContext';
/**
 * Set a unique footer for the wizard. stepId is only required if inactive steps are hidden instead of unmounted.
 * @param footer
 * @param stepId
 */
export const useWizardFooter = (footer, stepId) => {
    const { activeStep, setFooter } = useWizardContext();
    React.useEffect(() => {
        if (footer && (!stepId || (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === stepId)) {
            setFooter(footer);
            // Reset the footer on unmount.
            return () => {
                setFooter(null);
            };
        }
    }, [activeStep, footer, setFooter, stepId]);
};
//# sourceMappingURL=useWizardFooter.js.map