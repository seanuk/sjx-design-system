import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { clearForcedFocus } from "@/stories/clear-forced-focus"

function ViewMenu() {
  const [statusBar, setStatusBar] = React.useState(true)
  const [zoom, setZoom] = React.useState("100")

  return (
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
          Status bar
        </MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarGroup>
          <MenubarLabel>Zoom</MenubarLabel>
          <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
            <MenubarRadioItem value="100">100%</MenubarRadioItem>
            <MenubarRadioItem value="150">150%</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
  )
}

const meta = {
  title: "Components/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A row of menus for app-level commands, like a desktop app's File and Edit menus. Arrow keys move between menus. For links around a site, use NavigationMenu instead.",
      },
    },
  },
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New file
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email</MenubarItem>
              <MenubarItem>Copy link</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Redo
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <ViewMenu />
    </Menubar>
  ),
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Focused: Story = {
  decorators: [clearForcedFocus],
  parameters: {
    pseudo: { focusVisible: ['[data-slot="menubar-trigger"]:first-child'] },
  },
}
