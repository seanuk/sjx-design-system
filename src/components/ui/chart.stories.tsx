import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"
import type { LabelProps } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const visits = [
  { month: "Jan", desktop: 1860, mobile: 800, tablet: 320 },
  { month: "Feb", desktop: 3050, mobile: 2000, tablet: 410 },
  { month: "Mar", desktop: 2370, mobile: 1200, tablet: 380 },
  { month: "Apr", desktop: 730, mobile: 1900, tablet: 290 },
  { month: "May", desktop: 2090, mobile: 1300, tablet: 450 },
  { month: "Jun", desktop: 2140, mobile: 1600, tablet: 520 },
]

const config = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
  tablet: { label: "Tablet", color: "var(--chart-3)" },
} satisfies ChartConfig

const chartSize = "aspect-auto h-(--grid-240) w-full"
const chartMargin = { top: 8, right: 16, bottom: 0, left: 0 }
const formatTick = (value: number) => value.toLocaleString()

function Frame({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Wraps a Recharts chart with theme colours, a tooltip and a legend. Name each series in a `ChartConfig` and colour it with `--chart-1` to `--chart-5`, in that order, so a series keeps its colour. Show a legend for two or more series, and none for one. Marks: bars at most 24px wide with 4px rounded data ends, 2px lines, and solid hairline grids. Offer the numbers in a table as well, as in the WithTable story.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-(--grid-640)">
        <Story />
      </div>
    ),
  ],
  args: { config, children: <BarChart data={visits} /> },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const BarSingleSeries: Story = {
  render: () => (
    <Frame title="Desktop visits" description="January to June">
      <ChartContainer config={config} className={chartSize}>
        <BarChart accessibilityLayer data={visits} margin={chartMargin}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={formatTick}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            maxBarSize={24}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </Frame>
  ),
}

export const BarGrouped: Story = {
  render: () => (
    <Frame title="Visits by device" description="January to June">
      <ChartContainer config={config} className={chartSize}>
        <BarChart
          accessibilityLayer
          data={visits}
          margin={chartMargin}
          barSize={24}
          barGap={2}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={formatTick}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="mobile"
            fill="var(--color-mobile)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </Frame>
  ),
}

export const BarStacked: Story = {
  render: () => (
    <Frame title="Total visits" description="Stacked by device">
      <ChartContainer config={config} className={chartSize}>
        <BarChart accessibilityLayer data={visits} margin={chartMargin}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={formatTick}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="desktop"
            stackId="visits"
            fill="var(--color-desktop)"
            stroke="var(--card)"
            strokeWidth={2}
            maxBarSize={24}
          />
          <Bar
            dataKey="mobile"
            stackId="visits"
            fill="var(--color-mobile)"
            stroke="var(--card)"
            strokeWidth={2}
            maxBarSize={24}
          />
          <Bar
            dataKey="tablet"
            stackId="visits"
            fill="var(--color-tablet)"
            stroke="var(--card)"
            strokeWidth={2}
            maxBarSize={24}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </Frame>
  ),
}

function endLabel(name: string) {
  return function EndLabel({ x, y, index }: LabelProps & { index?: number }) {
    if (index !== visits.length - 1) return null
    return (
      <text
        x={Number(x) + 8}
        y={Number(y)}
        dominantBaseline="middle"
        className="fill-foreground text-label-sm"
      >
        {name}
      </text>
    )
  }
}

export const LineWithEndLabels: Story = {
  render: () => (
    <Frame title="Visits by device" description="January to June">
      <ChartContainer config={config} className={chartSize}>
        <LineChart
          accessibilityLayer
          data={visits}
          margin={{ ...chartMargin, right: 64 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={formatTick}
          />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            dataKey="desktop"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, stroke: "var(--card)", strokeWidth: 2 }}
          >
            <LabelList content={endLabel("Desktop")} />
          </Line>
          <Line
            dataKey="mobile"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, stroke: "var(--card)", strokeWidth: 2 }}
          >
            <LabelList content={endLabel("Mobile")} />
          </Line>
        </LineChart>
      </ChartContainer>
    </Frame>
  ),
}

export const AreaSingleSeries: Story = {
  render: () => (
    <Frame title="Mobile visits" description="January to June">
      <ChartContainer config={config} className={chartSize}>
        <AreaChart accessibilityLayer data={visits} margin={chartMargin}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={formatTick}
          />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="mobile"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            fill="var(--color-mobile)"
            fillOpacity={0.1}
            activeDot={{ r: 4, stroke: "var(--card)", strokeWidth: 2 }}
          />
        </AreaChart>
      </ChartContainer>
    </Frame>
  ),
}

export const WithTable: Story = {
  render: () => (
    <Frame title="Desktop visits" description="January to June">
      <div className="flex flex-col gap-(--number-spacing-sm)">
        <ChartContainer config={config} className={chartSize}>
          <BarChart accessibilityLayer data={visits} margin={chartMargin}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tickFormatter={formatTick}
          />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              maxBarSize={24}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
        <details className="text-body-md">
          <summary className="cursor-pointer">Show as a table</summary>
          <table className="mt-(--number-spacing-xs) w-full text-left tabular-nums">
            <thead className="text-muted-foreground">
              <tr>
                <th scope="col" className="font-(weight:--text-body-md--font-weight)">
                  Month
                </th>
                <th scope="col" className="font-(weight:--text-body-md--font-weight)">
                  Visits
                </th>
              </tr>
            </thead>
            <tbody>
              {visits.map(({ month, desktop }) => (
                <tr key={month}>
                  <td>{month}</td>
                  <td>{desktop.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>
    </Frame>
  ),
}
