import { cva, type VariantProps } from "class-variance-authority";

export const SKELETON_VARIANTS = cva(`
  animate-pulse bg-gray-200 pointer-events-none
`, {
  variants: {
    rounded: {
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    rounded: 'lg',
  },
});

interface SkeletonProps extends
  React.ComponentProps<'div'>,
  VariantProps<typeof SKELETON_VARIANTS>
{
  as?: keyof React.JSX.IntrinsicElements;
}

function Skeleton({
  rounded,
  className,
  ...props
}: SkeletonProps) {
  return <div
    className={
      SKELETON_VARIANTS({
        rounded,
        className
      })
    }
    {...props}
  />;
}

export default Skeleton;