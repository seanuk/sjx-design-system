"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-(--grid-0) z-50 bg-(--color-black-t25) transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-(--number-spacing-sm) border-border bg-popover bg-clip-padding text-body-md text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-(--grid-0) data-[side=bottom]:bottom-(--grid-0) data-[side=bottom]:h-auto data-[side=bottom]:border-t-(length:--number-border-width-sm) data-[side=bottom]:data-ending-style:translate-y-(--grid-40) data-[side=bottom]:data-starting-style:translate-y-(--grid-40) data-[side=left]:inset-y-(--grid-0) data-[side=left]:left-(--grid-0) data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r-(length:--number-border-width-sm) data-[side=left]:data-ending-style:-translate-x-(--grid-40) data-[side=left]:data-starting-style:-translate-x-(--grid-40) data-[side=right]:inset-y-(--grid-0) data-[side=right]:right-(--grid-0) data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l-(length:--number-border-width-sm) data-[side=right]:data-ending-style:translate-x-(--grid-40) data-[side=right]:data-starting-style:translate-x-(--grid-40) data-[side=top]:inset-x-(--grid-0) data-[side=top]:top-(--grid-0) data-[side=top]:h-auto data-[side=top]:border-b-(length:--number-border-width-sm) data-[side=top]:data-ending-style:-translate-y-(--grid-40) data-[side=top]:data-starting-style:-translate-y-(--grid-40) data-[side=left]:tablet:max-w-(--grid-400) data-[side=right]:tablet:max-w-(--grid-400)",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-(--grid-8) right-(--grid-8)"
                size="icon-sm"
              />
            }
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex flex-col gap-(--number-spacing-xs) p-(--number-spacing-md) pb-(--number-spacing-none)",
        className
      )}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col-reverse gap-(--number-spacing-xs) border-t-(length:--number-border-width-sm) border-border bg-muted px-(--number-spacing-md) pt-[calc(var(--number-spacing-sm)-var(--number-border-width-sm))] pb-(--number-spacing-sm) tablet:flex-row tablet:justify-end",
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("pr-(--number-spacing-md) text-heading-md text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-body-md text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
