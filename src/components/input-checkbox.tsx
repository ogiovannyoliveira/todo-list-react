import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";
import Skeleton from "./skeleton";

export const INPUT_CHECKBOX_WRAPPER_VARIANTS = cva(`
  inline-flex justify-center items-center
  relative group
`);

export const INPUT_CHECKBOX_VARIANTS = cva(`
  appearance-none peer flex items-center justify-center cursor-pointer
  transition overflow-hidden
`, {
  variants: {
    variant: {
      none: '',
      default: `
        border-2 border-solid
      border-green-base hover:border-green-dark hover:bg-green-dark/20
      checked:border-green-base checked:bg-green-base
      group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
      `,
    },
    size: {
      md: 'w-5 h-5 rounded-sm',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    disabled: false,
  },
});

export const INPUT_CHECKBOX_ICON_VARIANTS = cva(`
  absolute top-1/2 left-1 -translate-y-1/2
  hidden peer-checked:block fill-white
`, {
  variants: {
    size: {
      md: 'w-3 h-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface InputCheckboxProps extends
  Omit<React.ComponentProps<'input'>, 'size' | 'disabled'>,
  VariantProps<typeof INPUT_CHECKBOX_VARIANTS>
{
  loading?: boolean;
}

function InputCheckbox({
  loading,
  variant,
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return <Skeleton
      rounded='sm'
      className={
        INPUT_CHECKBOX_VARIANTS({ size, variant: 'none', className })
      }
    />
  }

  return (
    <label className={INPUT_CHECKBOX_WRAPPER_VARIANTS({ className })}>
      <input
        type="checkbox"
        className={INPUT_CHECKBOX_VARIANTS({ variant, size, disabled })}
        {...props}
      />
      <Icon
        className={INPUT_CHECKBOX_ICON_VARIANTS({ size })}
        svg={CheckIcon}
      />
    </label>
  );
}

export default InputCheckbox;