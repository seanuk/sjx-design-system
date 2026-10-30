import * as React from "react"
import { inputStyles } from "@/lib/input-styles"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        inputStyles,
        "flex field-sizing-content min-h-(--grid-64) w-full py-[calc(var(--input-default-padding-t-b)-var(--input-default-border-width))] text-(length:--text-body-lg) leading-(--text-body-md--line-height) md:text-(length:--text-body-md)",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
