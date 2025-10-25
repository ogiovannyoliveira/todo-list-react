import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const CONTAINER_VARIANTS = cva('mx-auto', {
  variants: {
    size: {
      md: 'max-w-[31.5rem] px-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface ContainerProps extends
  React.ComponentProps<'div'>,
  VariantProps<typeof CONTAINER_VARIANTS>
{
  as?: keyof React.JSX.IntrinsicElements;
}

function Container({
  as = 'div',
  size,
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: CONTAINER_VARIANTS({ size, className }),
      ...props
    },
    children,
  );
}

export default Container;