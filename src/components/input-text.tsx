import { cva, type VariantProps, cx } from "class-variance-authority";
import { TEXT_VARIANTS } from "./text";

export const INPUT_TEXT_VARIANTS = cva(`\
  border-b border-solid border-gray-200 focus:border-pink-base
  bg-transparent, outline-none
`, {
  variants: {
    size: {
      md: 'pb-2 px-2',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
  },
});

interface InputTextProps extends
  Omit<React.ComponentProps<'input'>, 'size' | 'disabled'>,
  VariantProps<typeof INPUT_TEXT_VARIANTS> {}

function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return <input
    type="text"
    className={cx(
      INPUT_TEXT_VARIANTS({ size, disabled }),
      TEXT_VARIANTS(),
      className,
    )}
    {...props}
  />;
}

export default InputText;