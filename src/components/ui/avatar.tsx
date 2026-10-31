"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-(--grid-32) shrink-0 rounded-(--number-radius-full) select-none after:absolute after:inset-(--grid-0) after:rounded-(--number-radius-full) after:border-(length:--number-border-width-sm) after:border-border after:mix-blend-darken data-[size=lg]:size-(--grid-40) data-[size=sm]:size-(--grid-24)",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-(--number-radius-full) object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-(--number-radius-full) bg-muted text-label-md text-(--color-content-secondary) group-data-[size=sm]/avatar:text-label-sm",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-(--grid-0) bottom-(--grid-0) z-10 inline-flex items-center justify-center rounded-(--number-radius-full) bg-primary text-primary-foreground bg-blend-color ring-(length:--number-border-width-md) ring-background select-none",
        "group-data-[size=sm]/avatar:size-(--grid-8) group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-(--grid-12) group-data-[size=default]/avatar:[&>svg]:size-(--grid-8)",
        "group-data-[size=lg]/avatar:size-(--grid-12) group-data-[size=lg]/avatar:[&>svg]:size-(--grid-8)",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-(--grid-8) *:data-[slot=avatar]:ring-(length:--number-border-width-md) *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-(--grid-32) shrink-0 items-center justify-center rounded-(--number-radius-full) bg-muted text-label-md text-(--color-content-secondary) ring-(length:--number-border-width-md) ring-background group-has-data-[size=lg]/avatar-group:size-(--grid-40) group-has-data-[size=sm]/avatar-group:size-(--grid-24) group-has-data-[size=sm]/avatar-group:text-label-sm [&>svg]:size-(--grid-16) group-has-data-[size=lg]/avatar-group:[&>svg]:size-(--grid-24) group-has-data-[size=sm]/avatar-group:[&>svg]:size-(--grid-12)",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
