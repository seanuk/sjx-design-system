import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Shows that something is loading. It takes the surrounding text colour. Change `aria-label` when \"Loading\" isn't specific enough.",
      },
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-(--number-spacing-sm)">
      <Spinner />
      <Spinner className="size-(--grid-24)" />
      <Spinner className="size-(--grid-32)" />
    </div>
  ),
}

export const Colours: Story = {
  render: () => (
    <div className="flex items-center gap-(--number-spacing-sm)">
      <Spinner className="text-primary" />
      <Spinner className="text-(--color-content-tertiary)" />
      <Spinner className="text-(--color-error-default)" />
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner data-icon="inline-start" />
      Saving
    </Button>
  ),
}
