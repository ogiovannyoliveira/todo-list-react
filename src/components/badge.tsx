import React from "react";
import Text from "./text";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

export const BADGE_VARIANTS = cva('inline-flex items-center justify-center rounded-full', {
  variants: {
    variant: {
      none: '',
      primary: 'bg-green-light',
      secondary: 'bg-pink-light',
    },
    size: {
      sm: 'py-0.5 px-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  }
})

export const BADGE_TEXT_VARIANTS = cva('', {
  variants: {
    variant: {
      none: '',
      primary: 'text-green-dark',
      secondary: 'text-pink-dark',
    },
  },
  defaultVariants: {
    variant: 'primary',
  }
})

export const BADGE_SKELETON_VARIANTS = cva('', {
  variants: {
    size: {
      sm: 'w-6 h-6',
    },
  },
  defaultVariants: {
    size: 'sm',
  }
});

interface BadgeProps extends
  React.ComponentProps<'div'>,
  VariantProps<typeof BADGE_VARIANTS>
{
  loading?: boolean
}

function Badge({
  loading,
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  if (loading) {
    return <Skeleton
      rounded='full'
      className={
        cx(
          BADGE_VARIANTS({ variant: 'none' }),
          BADGE_SKELETON_VARIANTS({ size }),
          className,
        )
      }
    />;
  }

  return (
    <div className={BADGE_VARIANTS({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={BADGE_TEXT_VARIANTS({ variant })}>
        {children}
      </Text>
    </div>
  );
}

export default Badge;