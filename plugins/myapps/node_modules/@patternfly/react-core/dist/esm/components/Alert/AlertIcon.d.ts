import * as React from 'react';
export declare const variantIcons: {
    success: React.ComponentClass<SVGIconProps, any>;
    danger: React.ComponentClass<SVGIconProps, any>;
    warning: React.ComponentClass<SVGIconProps, any>;
    info: React.ComponentClass<SVGIconProps, any>;
    default: React.ComponentClass<SVGIconProps, any>;
};
export interface AlertIconProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional class names added to the alert icon. */
    className?: string;
    /** A custom icon. If not set the icon is set according to the variant. */
    customIcon?: React.ReactNode;
    /** Variant of the alert icon. */
    variant: 'success' | 'danger' | 'warning' | 'info' | 'default';
}
export declare const AlertIcon: ({ variant, customIcon, className, ...props }: AlertIconProps) => JSX.Element;
//# sourceMappingURL=AlertIcon.d.ts.map