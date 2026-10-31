import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chip } from "@/components/ui/chip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const campaigns = [
  { name: "Summer launch", state: "active", sent: 24000, opens: 41.2, revenue: 18420 },
  { name: "Welcome series", state: "active", sent: 8150, opens: 62.8, revenue: 9310 },
  { name: "Autumn preview", state: "paused", sent: 12600, opens: 38.5, revenue: 6275 },
  { name: "Customer survey", state: "processing", sent: 3400, opens: 27.1, revenue: 0 },
  { name: "Spring sale", state: "disabled", sent: 31250, opens: 44.9, revenue: 24890 },
] as const

const number = new Intl.NumberFormat("en-US")
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

function CampaignHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Campaign</TableHead>
        <TableHead numeric>Sent</TableHead>
        <TableHead numeric>Opens</TableHead>
        <TableHead numeric>Revenue</TableHead>
      </TableRow>
    </TableHeader>
  )
}

function CampaignRows() {
  return (
    <TableBody>
      {campaigns.map(({ name, sent, opens, revenue }) => (
        <TableRow key={name}>
          <TableCell>{name}</TableCell>
          <TableCell numeric>{number.format(sent)}</TableCell>
          <TableCell numeric>{opens}%</TableCell>
          <TableCell numeric>{money.format(revenue)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Rows and columns of data, styled with design tokens. Set `density` to `compact` for 32px rows or leave it as `comfortable` for 48px rows. Set `numeric` on a column's head and cells to right-align it and line up its digits. Sorting, filtering and selection aren't built in. Wide tables scroll sideways inside their container.",
      },
    },
  },
  argTypes: {
    density: { control: "inline-radio", options: ["compact", "comfortable"] },
  },
  args: { density: "comfortable" },
  render: (args) => (
    <Table {...args}>
      <CampaignHeader />
      <CampaignRows />
    </Table>
  ),
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Density: Story = {
  render: () => (
    <div className="grid gap-(--number-spacing-md) desktop-sm:grid-cols-2">
      <div className="flex flex-col gap-(--number-spacing-xs)">
        <h3 className="text-heading-sm">Compact: 32px rows</h3>
        <Table density="compact">
          <CampaignHeader />
          <CampaignRows />
        </Table>
      </div>
      <div className="flex flex-col gap-(--number-spacing-xs)">
        <h3 className="text-heading-sm">Comfortable: 48px rows</h3>
        <Table density="comfortable">
          <CampaignHeader />
          <CampaignRows />
        </Table>
      </div>
    </div>
  ),
}

export const WithTotals: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Campaigns sent this year.</TableCaption>
      <CampaignHeader />
      <CampaignRows />
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell numeric>
            {number.format(campaigns.reduce((sum, row) => sum + row.sent, 0))}
          </TableCell>
          <TableCell numeric />
          <TableCell numeric>
            {money.format(campaigns.reduce((sum, row) => sum + row.revenue, 0))}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const WithStatusAndActions: Story = {
  render: () => (
    <Card className="py-(--number-spacing-none) pt-(--card-spacing)">
      <CardHeader>
        <CardTitle>Campaigns</CardTitle>
      </CardHeader>
      <CardContent className="px-(--number-spacing-none)">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead>Status</TableHead>
              <TableHead numeric>Sent</TableHead>
              <TableHead numeric>Revenue</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map(({ name, state, sent, revenue }) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <Chip variant="status" state={state} size="sm" className="capitalize">
                    {state}
                  </Chip>
                </TableCell>
                <TableCell numeric>{number.format(sent)}</TableCell>
                <TableCell numeric>{money.format(revenue)}</TableCell>
                <TableCell className="w-(--grid-48) py-(--number-spacing-none) text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          aria-label={`Actions for ${name}`}
                        />
                      }
                    >
                      <MoreHorizontalIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  ),
}

export const SelectedRow: Story = {
  render: (args) => (
    <Table {...args}>
      <CampaignHeader />
      <TableBody>
        {campaigns.map(({ name, sent, opens, revenue }, index) => (
          <TableRow key={name} data-state={index === 1 ? "selected" : undefined}>
            <TableCell>{name}</TableCell>
            <TableCell numeric>{number.format(sent)}</TableCell>
            <TableCell numeric>{opens}%</TableCell>
            <TableCell numeric>{money.format(revenue)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
