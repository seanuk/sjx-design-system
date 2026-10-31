import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const secondaryStyles =
  "border-(--button-secondary-border) bg-(--button-secondary-surface) text-(--button-secondary-content) hover:bg-(--button-secondary-surface-hover) aria-expanded:bg-(--button-secondary-surface-hover) disabled:border-(--button-secondary-border-disabled) disabled:bg-(--button-secondary-surface-disabled) disabled:text-(--button-secondary-content-disabled)"

// Borders sit inside the component's size, so padding subtracts the border width.
// Each size sets --btn-pl, --btn-pr and --btn-border.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-(--number-spacing-xs) border-(length:--btn-border) border-transparent pr-[calc(var(--btn-pr)-var(--btn-border))] pl-[calc(var(--btn-pl)-var(--btn-border))] font-(weight:--text-button-md--font-weight) tracking-(--tracking-button) whitespace-nowrap no-underline uppercase transition-all outline-none select-none focus-visible:shadow-(--shadow-focus-primary) disabled:pointer-events-none aria-invalid:shadow-(--shadow-focus-error) [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-(--button-primary-surface) text-(--button-primary-content) hover:bg-(--button-primary-surface-hover) aria-expanded:bg-(--button-primary-surface-hover) disabled:bg-(--button-primary-surface-disabled) disabled:text-(--button-primary-content-disabled)",
        secondary: secondaryStyles,
        outline: secondaryStyles,
        ghost:
          "bg-(--button-tertiary-surface) px-[calc(var(--grid-2)-var(--btn-border))] text-(--button-tertiary-content) hover:bg-(--button-tertiary-surface-hover) focus-visible:bg-(--button-tertiary-surface-hover) aria-expanded:bg-(--button-tertiary-surface-hover) disabled:text-(--color-disabled)",
        destructive:
          "bg-(--button-destructive-surface) text-(--button-destructive-content) hover:bg-(--button-destructive-surface-hover) aria-expanded:bg-(--button-destructive-surface-hover) disabled:bg-(--button-primary-surface-disabled) disabled:text-(--button-primary-content-disabled)",
        link: "font-(weight:--text-link-md--font-weight) tracking-normal text-(--button-tertiary-content) normal-case underline disabled:text-(--color-disabled)",
      },
      size: {
        default:
          "h-(--grid-40) rounded-(--button-default-corner) text-(length:--text-button-md) leading-(--text-button-md--line-height) [--btn-border:var(--button-default-border-width)] [--btn-pl:var(--button-default-padding-l-r)] [--btn-pr:var(--button-default-padding-l-r)] has-data-[icon=inline-end]:[--btn-pr:var(--button-default-padding-icon-edge)] has-data-[icon=inline-start]:[--btn-pl:var(--button-default-padding-icon-edge)] [&_svg:not([class*='size-'])]:size-(--grid-16)",
        xs: "h-(--grid-24) rounded-(--number-radius-xxs) text-(length:--text-label-xs) leading-(--text-label-xs--line-height) [--btn-border:var(--number-border-width-sm)] [--btn-pl:var(--number-spacing-xs)] [--btn-pr:var(--number-spacing-xs)] has-data-[icon=inline-end]:[--btn-pr:var(--number-spacing-xxs)] has-data-[icon=inline-start]:[--btn-pl:var(--number-spacing-xxs)] [&_svg:not([class*='size-'])]:size-(--grid-12)",
        sm: "h-(--grid-32) rounded-(--button-small-corner) text-(length:--text-button-sm) leading-(--text-button-sm--line-height) [--btn-border:var(--button-small-border-width)] [--btn-pl:var(--button-small-padding-l-r)] [--btn-pr:var(--button-small-padding-l-r)] has-data-[icon=inline-end]:[--btn-pr:var(--button-small-padding-icon-edge)] has-data-[icon=inline-start]:[--btn-pl:var(--button-small-padding-icon-edge)] [&_svg:not([class*='size-'])]:size-(--grid-16)",
        lg: "h-(--grid-56) rounded-(--button-large-corner) text-(length:--text-button-lg) leading-(--text-button-lg--line-height) [--btn-border:var(--button-large-border-width)] [--btn-pl:var(--button-large-padding-l-r)] [--btn-pr:var(--button-large-padding-l-r)] has-data-[icon=inline-end]:[--btn-pr:var(--button-large-padding-icon-edge)] has-data-[icon=inline-start]:[--btn-pl:var(--button-large-padding-icon-edge)] [&_svg:not([class*='size-'])]:size-(--grid-24)",
        icon: "size-(--grid-40) rounded-(--button-default-corner) p-(--number-spacing-none) [--btn-border:var(--button-default-border-width)] [&_svg:not([class*='size-'])]:size-(--grid-16)",
        "icon-xs":
          "size-(--grid-24) rounded-(--number-radius-xxs) p-(--number-spacing-none) [--btn-border:var(--number-border-width-sm)] [&_svg:not([class*='size-'])]:size-(--grid-16)",
        "icon-sm":
          "size-(--grid-32) rounded-(--button-small-corner) p-(--number-spacing-none) [--btn-border:var(--button-small-border-width)] [&_svg:not([class*='size-'])]:size-(--grid-16)",
        "icon-lg":
          "size-(--grid-56) rounded-(--button-large-corner) p-(--number-spacing-none) [--btn-border:var(--button-large-border-width)] [&_svg:not([class*='size-'])]:size-(--grid-24)",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
