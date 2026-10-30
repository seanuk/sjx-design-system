import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  "aria-label": ariaLabel,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      className={cn("data-horizontal:w-full data-vertical:h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-vertical:h-full data-vertical:min-h-(--grid-160) data-vertical:w-auto data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-(--number-radius-full) bg-(--selection-primary-border) select-none data-disabled:bg-(--color-border-secondary) data-horizontal:h-(--grid-4) data-horizontal:w-full data-vertical:h-full data-vertical:w-(--grid-4)"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-(--selection-primary-surface-selected) select-none data-disabled:bg-(--selection-disabled-surface-selected) data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            aria-label={ariaLabel}
            className="relative block size-(--grid-16) shrink-0 rounded-(--number-radius-full) border-(length:--number-border-width-md) border-(--selection-primary-surface-selected) bg-(--selection-primary-content) transition-[color,box-shadow] select-none after:absolute after:-inset-(--grid-8) hover:bg-(--input-primary-surface-hover) active:bg-(--input-primary-surface-hover) has-[:focus-visible]:shadow-(--shadow-focus-primary) data-disabled:pointer-events-none data-disabled:border-(--selection-disabled-surface-selected) data-disabled:bg-(--selection-disabled-surface-unselected)"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
