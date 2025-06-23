import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardHeader, CardTitle } from "@/components/ui/card";

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: "up" | "down" | "neutral";
  };
  index: number;
}

export function StatCard({ title, value, change, index }: StatCardProps) {
  return (
    <Card
      className={cn(
        index % 2 === 0 ? "bg-secondary" : "bg-accent",
        " shadow-none gap-4"
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-3xl font-bold">{value}</div>
          {change && (
            <div
              className={cn(
                "flex items-center text-xs",
                change.trend === "up" && "text-green-600",
                change.trend === "down" && "text-red-600",
                change.trend === "neutral" && "text-gray-500"
              )}
            >
              {change.trend === "up" && <ArrowUp className="h-3 w-3 mr-1" />}
              {change.trend === "down" && (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {change.value}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface StatCardV1Props {
  title: string;
  value: string | number;
  className?: string;
  currency?: string;
}

export function StatCardV1({
  title,
  value,
  className,
  currency = "₦",
}: StatCardV1Props) {
  const formattedValue =
    typeof value === "number" ? value.toLocaleString() : value;

  return (
    <Card
      className={cn(
        "border-2 border-cyan-400 bg-gray-50/50 rounded-2xl p-6",
        className
      )}
    >
      <CardContent className="p-0 space-y-3">
        <div className="space-y-1">
          <h3 className="text-gray-500 text-base font-normal">{title}</h3>
          <div className="w-8 h-1 bg-blue-600 rounded-full" />
        </div>
        <div className="text-4xl font-bold text-gray-800">
          {currency}
          {formattedValue}
        </div>
      </CardContent>
    </Card>
  );
}
