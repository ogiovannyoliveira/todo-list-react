import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const CARD_VARIANTS = cva(`
  rounded-lg border border-solid border-gray-200
  bg-white shadow-sm
`, {
  variants: {
    size: {
      none: '',
      md: 'p-5',
    },
  },
  defaultVariants: {
    size: 'none',
  }
});

interface CardProps extends
  React.ComponentProps<'div'>,
  VariantProps<typeof CARD_VARIANTS>
{
  as?: keyof React.JSX.IntrinsicElements;  
}

function Card({
  as = 'div',
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: CARD_VARIANTS({ size, className }),
      ...props
    },
    children,
  );
}

export default Card;