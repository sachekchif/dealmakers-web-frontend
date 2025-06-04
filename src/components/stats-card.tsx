import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  change: {
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
        " shadow-none"
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-3xl font-bold">{value}</div>
          <div
            className={cn(
              "flex items-center text-xs",
              change.trend === "up" && "text-green-600",
              change.trend === "down" && "text-red-600",
              change.trend === "neutral" && "text-gray-500"
            )}
          >
            {change.trend === "up" && <ArrowUp className="h-3 w-3 mr-1" />}
            {change.trend === "down" && <ArrowDown className="h-3 w-3 mr-1" />}
            {change.value}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
