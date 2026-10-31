// Popup, item and part styles shared by Dropdown Menu, Context Menu and Menubar.
// The popup's padding plus the item's radius add up to the popup's radius, so
// the corners stay concentric.
export const menuPopupStyles =
  "z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-(--number-radius-xs) bg-popover p-(--number-spacing-xxs) text-popover-foreground shadow-md ring-(length:--number-border-width-sm) ring-(--color-border-secondary) duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95"

export const menuItemStyles =
  "group/menu-item relative flex cursor-default items-center gap-(--number-spacing-xs) rounded-(--number-radius-xxs) px-(--number-spacing-xs) py-(--number-spacing-xxs) text-body-md outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-(--number-spacing-lg) data-disabled:pointer-events-none data-disabled:text-(--color-disabled) [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-(--grid-16)"

export const menuDestructiveItemStyles =
  "data-[variant=destructive]:text-(--color-content-error) data-[variant=destructive]:focus:bg-(--color-error-surface) data-[variant=destructive]:focus:text-(--color-error-content)"

export const menuSubTriggerStyles =
  "data-popup-open:bg-accent data-popup-open:text-accent-foreground"

// Checkbox and radio items keep room on the right for the check.
export const menuIndicatorItemStyles = "pr-(--number-spacing-lg)"

export const menuIndicatorStyles =
  "pointer-events-none absolute right-(--grid-8) flex items-center justify-center"

export const menuLabelStyles =
  "px-(--number-spacing-xs) py-(--number-spacing-xxs) text-label-sm text-muted-foreground data-inset:pl-(--number-spacing-lg)"

export const menuSeparatorStyles =
  "-mx-(--number-spacing-xxs) my-(--number-spacing-xxs) h-(--grid-1) bg-border"

export const menuShortcutStyles =
  "ml-auto pl-(--number-spacing-md) text-label-sm text-muted-foreground group-focus/menu-item:text-accent-foreground"
