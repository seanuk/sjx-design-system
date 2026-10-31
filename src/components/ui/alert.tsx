import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "group/alert relative grid w-full gap-y-(--grid-2) rounded-(--number-radius-xs) border-(length:--number-border-width-sm) px-[calc(var(--grid-12)-var(--number-border-width-sm))] py-[calc(var(--number-spacing-xs)-var(--number-border-width-sm))] text-left text-body-md has-data-[slot=alert-action]:pr-(--grid-80) has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-(--number-spacing-xs) *:[svg]:row-span-2 *:[svg]:translate-y-(--grid-4) *:[svg]:text-current *:[svg:not([class*='size-'])]:size-(--grid-16)",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground",
        destructive:
          "border-(--color-error-border) bg-(--color-error-surface) text-(--color-error-content) *:data-[slot=alert-description]:text-(--color-error-content)",
        info: "border-(--color-info-border) bg-(--color-info-surface) text-(--color-info-content) *:data-[slot=alert-description]:text-(--color-info-content)",
        success:
          "border-(--color-success-border) bg-(--color-success-surface) text-(--color-success-content) *:data-[slot=alert-description]:text-(--color-success-content)",
        warning:
          "border-(--color-warning-border) bg-(--color-warning-surface) text-(--color-warning-content) *:data-[slot=alert-description]:text-(--color-warning-content)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-(weight:--text-button-md--font-weight) group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-(--grid-4) [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-body-md text-pretty text-(--color-content-secondary) group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-(--grid-4) [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-(--number-spacing-sm)",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-(--number-spacing-xs) right-(--number-spacing-xs)", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
