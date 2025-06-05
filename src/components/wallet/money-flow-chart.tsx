"use client";

import { ArrowUp, Calendar } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

export default function MoneyFlowChart({ chartData }: MoneyFlowChartProps) {
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
      <CardContent className="p-0">
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
