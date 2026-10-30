"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-(--number-spacing-xs) text-(length:--text-label-md) leading-(--text-label-md--line-height) font-(weight:--text-label-md--font-weight) text-(--input-primary-label) select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:text-(--input-disabled-label) peer-disabled:cursor-not-allowed peer-disabled:text-(--input-disabled-label) peer-data-disabled:cursor-not-allowed peer-data-disabled:text-(--input-disabled-label)",
        className
      )}
      {...props}
    />
  )
}

export { Label }
