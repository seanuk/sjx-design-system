import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
]

type ExampleProps = {
  disabled?: boolean
  invalid?: boolean
  size?: "sm" | "default"
  defaultValue?: string
  defaultOpen?: boolean
}

function Example({ disabled, invalid, size, ...props }: ExampleProps) {
  return (
    <Select items={items} disabled={disabled} {...props}>
      <SelectTrigger
        className="w-(--grid-320)"
        size={size}
        aria-label="Fruit"
        aria-invalid={invalid}
      >
        <SelectValue placeholder="Placeholder" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruit</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectItem value="none" disabled>
            Unavailable
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const meta = {
  title: "Components/Select",
  component: Example,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The trigger uses the `Input` styles. The list uses the input corner, `shadow-md` and the brand hover colour.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "default"] },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: { defaultValue: "banana" },
}

export const Small: Story = {
  args: { size: "sm" },
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: true } },
}

export const Open: Story = {
  args: { defaultOpen: true, defaultValue: "banana" },
  parameters: { docs: { disable: true } },
  tags: ["!autodocs"],
}

export const Error: Story = {
  args: { invalid: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}
