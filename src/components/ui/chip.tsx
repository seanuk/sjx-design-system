import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { LoaderCircleIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  "group/chip inline-flex w-fit shrink-0 items-center justify-center rounded-(--chip-corner) border-(length:--chip-border-width) font-(weight:--text-button-md--font-weight) whitespace-nowrap transition-all outline-none select-none [--chip-dot:currentColor] focus-visible:shadow-(--shadow-focus-primary) [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        input: "",
        status: "",
        filter:
          "cursor-pointer hover:border-(--chip-primary-border) aria-pressed:border-(--chip-primary-border) aria-pressed:bg-(--chip-primary-surface) aria-pressed:text-(--chip-primary-content) aria-pressed:ring-(length:--chip-border-width) aria-pressed:ring-(--chip-primary-border) aria-pressed:ring-inset",
        suggestion: "cursor-pointer hover:border-(--chip-primary-border)",
      },
      tone: {
        default:
          "border-(--chip-default-border) bg-(--chip-default-surface) text-(--chip-default-content)",
        primary:
          "border-(--chip-primary-border) bg-(--chip-primary-surface) text-(--chip-primary-content)",
        info: "border-(--chip-info-border) bg-(--chip-info-surface) text-(--chip-info-content) [--chip-dot:var(--chip-info-dot)]",
        success:
          "border-(--chip-success-border) bg-(--chip-success-surface) text-(--chip-success-content) [--chip-dot:var(--chip-success-dot)]",
        warning:
          "border-(--chip-warning-border) bg-(--chip-warning-surface) text-(--chip-warning-content) [--chip-dot:var(--chip-warning-dot)]",
        error:
          "border-(--chip-error-border) bg-(--chip-error-surface) text-(--chip-error-content) [--chip-dot:var(--chip-error-dot)]",
        neutral:
          "border-(--chip-neutral-border) bg-(--chip-neutral-surface) text-(--chip-neutral-content)",
        solid:
          "border-(--chip-solid-border) bg-(--chip-solid-surface) text-(--chip-solid-content) [&_button]:hover:bg-(--color-white-t25)",
        outline:
          "border-(--chip-outline-border) bg-(--chip-outline-surface) text-(--chip-outline-content)",
      },
      size: {
        sm: "h-(--grid-24) min-w-(--grid-24) gap-(--number-spacing-xxs) px-[calc(var(--grid-8)-var(--chip-border-width))] text-label-sm has-data-[slot=chip-remove]:pr-[calc(var(--grid-4)-var(--chip-border-width))] [&_svg]:size-(--grid-12)",
        default:
          "h-(--grid-32) min-w-(--grid-32) gap-(--number-spacing-xs) px-[calc(var(--grid-12)-var(--chip-border-width))] text-label-md has-data-[slot=chip-remove]:pr-[calc(var(--grid-8)-var(--chip-border-width))] [&_svg]:size-(--grid-16)",
        lg: "h-(--grid-40) min-w-(--grid-40) gap-(--number-spacing-xs) px-[calc(var(--grid-16)-var(--chip-border-width))] text-label-lg has-data-[slot=chip-remove]:pr-[calc(var(--grid-8)-var(--chip-border-width))] [&_svg]:size-(--grid-16)",
      },
      disabled: {
        true: "pointer-events-none border-(--color-disabled) bg-(--color-surface-primary) text-(--color-disabled) [--chip-dot:var(--color-disabled)]",
      },
    },
    defaultVariants: {
      variant: "input",
      tone: "default",
      size: "default",
    },
  }
)

const chipStates = {
  active: "success",
  enabled: "success",
  paused: "warning",
  disabled: "error",
  processing: "info",
} as const

type ChipProps = Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> &
  Omit<VariantProps<typeof chipVariants>, "disabled"> & {
    /** Optional leading icon (Lucide component). Rendered before the label. */
    icon?: React.ComponentType
    /** `input` only. Renders a trailing remove button that calls this on click. */
    onRemove?: () => void
    /** Accessible label prefix for the remove button. */
    removeLabel?: string
    /** `filter` only. Whether the chip is pressed. */
    selected?: boolean
    /** `filter` and `suggestion` only. Fires when the chip is clicked. */
    onSelect?: () => void
    /** Mutes the chip and disables its interactions. */
    disabled?: boolean
    /** `status` only. Named state that sets the tone, plus the dot or spinner. */
    state?: keyof typeof chipStates
    /** Number shown after the label, or alone when there are no children. */
    count?: number
    /** Highest count to show. Anything above it shows as `${max}+`. */
    max?: number
    /** Leading status dot. On by default for `status`. */
    dot?: boolean
  }

function Chip({
  className,
  children,
  variant = "input",
  tone,
  size = "default",
  icon: Icon,
  onRemove,
  removeLabel = "Remove",
  selected = false,
  onSelect,
  onClick,
  disabled = false,
  state,
  count,
  max,
  dot,
  ...props
}: ChipProps) {
  const hasLabel = children !== undefined && children !== null
  const hasCount = count !== undefined
  const isProcessing = variant === "status" && state === "processing"
  const showDot = !isProcessing && (dot ?? variant === "status")

  const resolvedTone =
    tone ??
    (variant === "status" && state ? chipStates[state] : undefined) ??
    (hasCount && !hasLabel ? "solid" : "default")

  const classes = cn(
    chipVariants({ variant, tone: resolvedTone, size, disabled }),
    hasCount && !hasLabel && "px-[calc(var(--grid-8)-var(--chip-border-width))]",
    className
  )

  const content = (
    <>
      {showDot && (
        <span
          data-slot="chip-dot"
          aria-hidden
          className="size-(--grid-8) shrink-0 rounded-(--number-radius-full) bg-(--chip-dot)"
        />
      )}
      {isProcessing && <LoaderCircleIcon className="motion-safe:animate-spin" />}
      {Icon && <Icon />}
      {children}
      {hasCount && (
        <span data-slot="chip-count" className="tabular-nums">
          {max !== undefined && count > max ? `${max}+` : count}
        </span>
      )}
      {variant === "input" && onRemove && (
        <button
          type="button"
          data-slot="chip-remove"
          disabled={disabled}
          aria-label={
            typeof children === "string"
              ? `${removeLabel} ${children}`
              : removeLabel
          }
          onClick={onRemove}
          className="relative flex size-(--grid-16) shrink-0 cursor-pointer items-center justify-center rounded-(--chip-corner) outline-none after:absolute after:-inset-(--grid-4) hover:bg-(--color-black-t15) focus-visible:shadow-(--shadow-focus-primary)"
        >
          <XIcon />
        </button>
      )}
    </>
  )

  if (variant === "filter" || variant === "suggestion") {
    return (
      <button
        {...(props as React.ComponentProps<"button">)}
        type="button"
        data-slot="chip"
        disabled={disabled}
        aria-pressed={variant === "filter" ? selected : undefined}
        onClick={(event) => {
          onClick?.(event)
          onSelect?.()
        }}
        className={classes}
      >
        {content}
      </button>
    )
  }

  return (
    <span
      {...props}
      data-slot="chip"
      aria-disabled={disabled || undefined}
      onClick={onClick}
      className={classes}
    >
      {content}
    </span>
  )
}

export { Chip, chipVariants }
