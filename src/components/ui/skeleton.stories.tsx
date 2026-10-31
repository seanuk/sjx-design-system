import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A placeholder shown while content loads. Size it with grid tokens to match the content it stands in for.",
      },
    },
  },
  args: { className: "h-(--grid-16) w-(--grid-200)" },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Profile: Story = {
  render: () => (
    <div className="flex items-center gap-(--number-spacing-sm)">
      <Skeleton className="size-(--grid-40) rounded-(--number-radius-full)" />
      <div className="flex flex-col gap-(--number-spacing-xs)">
        <Skeleton className="h-(--grid-16) w-(--grid-200)" />
        <Skeleton className="h-(--grid-16) w-(--grid-144)" />
      </div>
    </div>
  ),
}

export const CardPlaceholder: Story = {
  render: () => (
    <div className="flex w-(--grid-320) flex-col gap-(--number-spacing-sm)">
      <Skeleton className="h-(--grid-160) rounded-(--number-radius-sm)" />
      <Skeleton className="h-(--grid-16) w-(--grid-240)" />
      <Skeleton className="h-(--grid-16) w-(--grid-160)" />
    </div>
  ),
}
