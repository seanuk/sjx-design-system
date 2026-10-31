import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Variant names follow shadcn: `default` is Primary, `secondary` is Secondary, `ghost` is Tertiary and `destructive` is Destructive. Size `sm` is Small, `default` is Medium and `lg` is Large. Mark icons with `data-icon` so the button uses the tighter icon padding.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
      table: {
        type: {
          summary:
            '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
        },
      },
    },
    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "default",
        "lg",
        "icon-xs",
        "icon-sm",
        "icon",
        "icon-lg",
      ],
      table: {
        type: {
          summary:
            '"xs" | "sm" | "default" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg"',
        },
      },
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Button label",
    variant: "default",
    size: "default",
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: { variant: "secondary" },
}

export const Tertiary: Story = {
  args: { variant: "ghost" },
}

export const Destructive: Story = {
  args: { variant: "destructive" },
}

export const Link: Story = {
  args: { variant: "link" },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-sm)">
      <Button {...args} size="sm" />
      <Button {...args} size="default" />
      <Button {...args} size="lg" />
    </div>
  ),
}

export const IconLayouts: Story = {
  render: ({ children, ...args }) => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-sm)">
      <Button {...args}>
        <ArrowLeft data-icon="inline-start" />
        {children}
        <ArrowRight data-icon="inline-end" />
      </Button>
      <Button {...args}>{children}</Button>
      <Button {...args}>
        <ArrowLeft data-icon="inline-start" />
        {children}
      </Button>
      <Button {...args}>
        {children}
        <ArrowRight data-icon="inline-end" />
      </Button>
      <Button {...args} size="icon" aria-label="Back">
        <ArrowLeft />
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-sm)">
      <Button {...args} variant="default" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="ghost" />
      <Button {...args} variant="destructive" />
      <Button {...args} variant="link" />
    </div>
  ),
  args: { disabled: true },
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: true } },
}
