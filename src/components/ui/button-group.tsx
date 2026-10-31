import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { Separator } from "@/components/ui/separator"

// Only the corners and borders where children meet are removed, so the outer
// corners stay at whatever radius each child's own size sets.
const buttonGroupVariants = cva(
  "flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-(--number-spacing-xs) [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>[data-slot]:has(~[data-slot])]:rounded-r-(--number-radius-none) [&>[data-slot]~[data-slot]]:rounded-l-(--number-radius-none) [&>[data-slot]~[data-slot]]:border-l-(length:--number-border-width-none)",
        vertical:
          "flex-col [&>[data-slot]:has(~[data-slot])]:rounded-b-(--number-radius-none) [&>[data-slot]~[data-slot]]:rounded-t-(--number-radius-none) [&>[data-slot]~[data-slot]]:border-t-(length:--number-border-width-none)",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex items-center gap-(--number-spacing-xs) rounded-(--button-default-corner) border-(length:--number-border-width-sm) border-input bg-muted px-[calc(var(--grid-12)-var(--number-border-width-sm))] text-label-md [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-(--grid-16)",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "button-group-text",
    },
  })
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "relative self-stretch bg-input data-horizontal:mx-(--grid-1) data-horizontal:w-auto data-vertical:my-(--grid-1) data-vertical:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
