import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  change: {
    value: string
    trend: "up" | "down" | "neutral"
  }
}

function StatCard({ title, value, change }: StatCardProps) {
  return (
    <Card className="bg-gray-50">
      <CardContent className="p-4">
        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-500 mb-1">{title}</div>
          <div className="flex items-baseline justify-between">
            <div className="text-2xl font-bold">{value}</div>
            <div
              className={cn(
                "flex items-center text-xs",
                change.trend === "up" && "text-green-600",
                change.trend === "down" && "text-red-600",
                change.trend === "neutral" && "text-gray-500",
              )}
            >
              {change.trend === "up" && <ArrowUp className="h-3 w-3 mr-1" />}
              {change.trend === "down" && <ArrowDown className="h-3 w-3 mr-1" />}
              {change.value}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DisputeStats() {
  const stats = [
    {
      title: "All Disputes",
      value: "12",
      change: { value: "-0.33%", trend: "down" as const },
    },
    {
      title: "Completed Users",
      value: "0",
      change: { value: "0%", trend: "neutral" as const },
    },
    {
      title: "Pending Disputes",
      value: "6",
      change: { value: "+6.08%", trend: "up" as const },
    },
    {
      title: "Urgent Disputes",
      value: "2",
      change: { value: "+15.03%", trend: "up" as const },
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} change={stat.change} />
      ))}
    </div>
  )
}
