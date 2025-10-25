import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import Icon from "./icon";
import Skeleton from "./skeleton";
import SpinnerIcon from '../assets/icons/spinner.svg?react';

export const BUTTON_ICON_VARIANTS = cva(`
  inline-flex items-center justify-center cursor-pointer transition group
`, {
  variants: {
    variant: {
      none: '',
      primary: 'bg-green-base hover:bg-green-dark',
      secondary: 'bg-gray-200 hover:bg-pink-dark',
      tertiary: 'bg-transparent hover:bg-gray-200',
    },
    size: {
      sm: 'w-6 h-6 p-1 rounded',
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
    size: 'sm',
    disabled: false,
    handling: false,
  }
});

export const BUTTON_ICON_ICON_VARIANTS = cva('transition', {
  variants: {
    variant: {
      none: '',
      primary: 'fill-white',
      secondary: 'fill-pink-base group-hover:fill-white',
      tertiary: 'fill-gray-300 group-hover:fill-gray-400',
    },
    size: {
      sm: 'w-4 h-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

interface ButtonIconProps extends 
  Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
  VariantProps<typeof BUTTON_ICON_VARIANTS>
{
  icon: React.ComponentProps<typeof Icon>['svg'];
  loading?: boolean;
  handling?: boolean;
}

function ButtonIcon({
  loading,
  handling,
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return <Skeleton 
      rounded="sm"
      className={
        BUTTON_ICON_VARIANTS({ variant: 'none', size, className })
      }
    />;
  }

  return <button 
    className={BUTTON_ICON_VARIANTS({
      variant,
      handling,
      size,
      disabled,
      className,
    })}
    {...props}
  >
    <Icon
      className={BUTTON_ICON_ICON_VARIANTS({ variant, size })}
      svg={handling ? SpinnerIcon : icon}
      animate={handling}
    />
  </button>;
}

export default ButtonIcon;