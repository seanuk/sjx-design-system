import type { Decorator } from "@storybook/nextjs-vite"

function clear(event: React.SyntheticEvent<HTMLDivElement>) {
  event.currentTarget
    .querySelectorAll(".pseudo-focus-visible")
    .forEach((element) => element.classList.remove("pseudo-focus-visible"))
}

// A Focused story forces the ring on load. This clears it on first use, so it behaves like real focus.
export const clearForcedFocus: Decorator = (Story) => (
  <div onPointerDownCapture={clear} onFocusCapture={clear}>
    <Story />
  </div>
)
