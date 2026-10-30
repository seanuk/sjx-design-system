// Figma "Text input" surface, border, text and states, shared by every form
// control built on a native element. Figma strokes sit inside the frame, so
// padding subtracts the border width. Consumers set the text size, then the line
// height, because cn drops a line height that comes before a text size.
export const inputStyles =
  "rounded-(--input-default-corner) border-(length:--input-default-border-width) border-(--input-primary-border) bg-(--input-primary-surface) px-[calc(var(--input-default-padding-l-r)-var(--input-default-border-width))] text-(--input-primary-content) transition-colors outline-none placeholder:text-(--input-primary-placeholder) hover:bg-(--input-primary-surface-hover) focus-visible:border-(--color-border-focus) focus-visible:bg-(--input-primary-surface-hover) focus-visible:shadow-(--shadow-focus-primary) disabled:cursor-not-allowed disabled:border-(--input-disabled-border) disabled:bg-(--input-disabled-surface) disabled:text-(--input-disabled-content) disabled:placeholder:text-(--input-disabled-placeholder) aria-invalid:border-(--color-border-focus-error) aria-invalid:bg-(--input-primary-surface) aria-invalid:shadow-(--shadow-focus-error)"
