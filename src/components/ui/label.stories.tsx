import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Uses the `label-md` text style and the `--input-primary-label` token.",
      },
    },
  },
  args: { children: "Label" },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: (args) => (
    <div className="flex w-(--grid-320) flex-col gap-(--number-spacing-xs)">
      <Label {...args} htmlFor="label-input" />
      <Input id="label-input" placeholder="Placeholder" />
    </div>
  ),
}
