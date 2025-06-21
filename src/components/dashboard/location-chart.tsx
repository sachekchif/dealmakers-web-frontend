import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function LocationChart({
  title,
  chartData,
}: {
  title?: string;
  chartData: any[];
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
        {/* <ChartContainer
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
        </ChartContainer> */}

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
