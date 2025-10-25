import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import Icon from "./icon";
import Text from "./text";
import SpinnerIcon from '../assets/icons/spinner.svg?react';

export const BUTTON_VARIANTS = cva(`
  flex items-center justify-center cursor-pointer
  transition rounded-lg group gap-2
`, {
  variants: {
    variant: {
      primary: 'bg-gray-200 hover:bg-pink-light'
    },
    size: {
      md: 'h-14 py-4 px-5'
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
    handling: {
      true: 'pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    handling: false,
  }
});

export const BUTTON_ICON_VARIANTS = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-pink-base',
    },
    size: {
      md: 'w-5 h-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }
});

export const BUTTON_TEXT_VARIANTS = cva('', {
  variants: {
    variant: {
      primary: 'text-gray-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps extends 
  Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
  VariantProps<typeof BUTTON_VARIANTS>
{
  icon?: React.ComponentProps<typeof Icon>['svg'];
  handling?: boolean;
}

function Button({
  variant,
  size,
  disabled,
  className,
  children,
  handling,
  icon,
  ...props
}: ButtonProps) {
  return <button className={BUTTON_VARIANTS({ size, disabled, className, handling })} {...props}>
    {
      icon && 
      <Icon 
        svg={handling ? SpinnerIcon : icon}
        animate={handling}
        className={BUTTON_ICON_VARIANTS({ variant, size })} 
      />
    }
    <Text variant='body-md-bold' className={BUTTON_TEXT_VARIANTS({ variant })}>
      {children}
    </Text>
  </button>;
}

export default Button;