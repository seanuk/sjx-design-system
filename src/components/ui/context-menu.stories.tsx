import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { CopyIcon, PencilIcon, Trash2Icon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

function Area() {
  return (
    <ContextMenuTrigger className="flex h-(--grid-160) w-(--grid-320) items-center justify-center rounded-(--number-radius-xs) border-(length:--number-border-width-sm) border-dashed border-input text-body-md text-muted-foreground">
      Right-click here
    </ContextMenuTrigger>
  )
}

const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A list of actions opened by right-clicking or long-pressing an area. Make sure every action can also be reached another way, as it stays hidden until opened. A `ContextMenuLabel` must sit inside a `ContextMenuGroup`.",
      },
    },
  },
  render: (args) => (
    <ContextMenu {...args}>
      <Area />
      <ContextMenuContent>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem disabled>Move</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIconsAndShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <Area />
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>Document</ContextMenuLabel>
          <ContextMenuItem>
            <PencilIcon />
            Edit
            <ContextMenuShortcut>⌘E</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <CopyIcon />
            Duplicate
            <ContextMenuShortcut>⌘D</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2Icon />
          Delete
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <Area />
      <ContextMenuContent>
        <ContextMenuItem>New file</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>Copy link</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>Download</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

function SelectionItemsExample() {
  const [grid, setGrid] = React.useState(true)
  const [sort, setSort] = React.useState("newest")

  return (
    <ContextMenu>
      <Area />
      <ContextMenuContent>
        <ContextMenuCheckboxItem checked={grid} onCheckedChange={setGrid}>
          Show grid
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Sort by</ContextMenuLabel>
          <ContextMenuRadioGroup value={sort} onValueChange={setSort}>
            <ContextMenuRadioItem value="newest">Newest</ContextMenuRadioItem>
            <ContextMenuRadioItem value="oldest">Oldest</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const SelectionItems: Story = {
  render: () => <SelectionItemsExample />,
}
