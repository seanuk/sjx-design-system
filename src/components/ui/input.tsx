import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { inputStyles } from "@/lib/input-styles"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        inputStyles,
        "h-(--grid-40) w-full min-w-(--grid-0) py-(--number-spacing-none) text-(length:--text-body-lg) leading-(--text-body-md--line-height) file:inline-flex file:h-(--grid-24) file:border-(length:--number-border-width-none) file:bg-transparent file:text-body-md file:font-(weight:--text-button-md--font-weight) file:text-foreground disabled:pointer-events-none md:text-(length:--text-body-md)",
        className
      )}
      {...props}
    />
  )
}

export { Input }
