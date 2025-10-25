import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const ICON_VARIANTS = cva('', {
  variants: {
    animate: {
      false: '',
      true: 'animate-spin',
    },
  },
  defaultVariants: {
    animate: false,
  }
})

interface IconProps extends 
  React.ComponentProps<"svg">,
  VariantProps<typeof ICON_VARIANTS> 
{
  svg: React.FC<React.ComponentProps<"svg">>
}

function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
  return <SvgComponent className={ICON_VARIANTS({ animate, className })} {...props} />
}

export default Icon;