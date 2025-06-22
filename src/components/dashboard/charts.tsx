"use client";

import { Pie, PieChart } from "recharts";
import { ArrowUp, Calendar } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LocationData } from "@/app/dashboard/us/customers-location";

type MoneyFlowChartProps = {
  chartData: {
    percentage: string;
    dates: string[];
    dataPoints: number[];
  };
};

const chartConfig = {
  moneyFlow: {
    label: "Money Flow",
    color: "#0097C7",
  },
} satisfies ChartConfig;

export function MoneyFlowChart({ chartData }: MoneyFlowChartProps) {
  const [timeframe, setTimeframe] = useState("week");

  // Transform data for recharts
  const transformedData = chartData.dates.map((date, index) => ({
    date: date,
    moneyFlow: chartData.dataPoints[index] || 0,
  }));

  // Format Y-axis values (convert to k format)
  const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`;

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Money Flow</h3>
            <div className="flex items-center text-green-500 text-sm mt-1">
              <ArrowUp className="h-3 w-3 mr-1" />
              <span>{chartData.percentage}</span>
            </div>
          </div>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[100px] h-8 bg-gray-50">
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-2" />
                <SelectValue placeholder="Week" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-0 pr-8">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <AreaChart
            accessibilityLayer
            data={transformedData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs text-gray-400"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatYAxis}
              className="text-xs text-gray-400"
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(label) => `Date: ${label}`}
                  formatter={(value) => [
                    `${formatYAxis(value as number)}`,
                    "Money Flow",
                  ]}
                />
              }
            />
            <Area
              dataKey="moneyFlow"
              type="natural"
              fill="var(--color-moneyFlow)"
              fillOpacity={0.4}
              stroke="var(--color-moneyFlow)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function LocationChart({
  title,
  chartData,
}: {
  title?: string;
  chartData: LocationData[];
}) {
  const chartConfig = {
    percentage: {
      label: "Percentage",
    },
    "united-states": {
      label: "United States",
      color: "#f63b51", // blue-500
    },
    canada: {
      label: "Canada",
      color: "#d3de08", // green-600
    },
    mexico: {
      label: "Mexico",
      color: "#34d399", // green-400
    },
    other: {
      label: "Other",
      color: "#1f2937", // gray-800
    },
  } satisfies ChartConfig;

  return (
    <Card className={`shadow-none gap-2 border-none px-0`}>
      <CardHeader className="px-0">
        <CardTitle className="text-lg font-medium">
          {title} by Location
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6 items-center">
        <ChartContainer
          config={chartConfig}
          className="w-40 h-40 flex-shrink-0"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => [
                    `${value}%`,
                    chartConfig[name as keyof typeof chartConfig]?.label ||
                      name,
                  ]}
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="country"
              innerRadius={30}
              outerRadius={70}
              paddingAngle={2}
            />
          </PieChart>
        </ChartContainer>

        <div className="flex-1 space-y-2">
          {chartData.map((location) => {
            const configKey = location.country
              .toLowerCase()
              .replace(/\s+/g, "-") as keyof typeof chartConfig;
            const config = chartConfig[configKey];
            const color =
              config && "color" in config ? config.color : "#6b7280";

            return (
              <div
                key={location.country}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span>{location.country}</span>
                </div>
                <span className="font-medium">{location.percentage}%</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
