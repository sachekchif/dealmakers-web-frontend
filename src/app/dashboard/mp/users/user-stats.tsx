import { GeneralStatCard, StatCard } from "@/components/dashboard/stats-card";

export default function UserStats() {
  const stats = [
    {
      title: "Total Users",
      value: "18000",
      change: { value: "-0.33%", trend: "down" as const },
    },
    {
      title: "Active Users",
      value: "16150",
      change: { value: "+15.03%", trend: "up" as const },
    },
    {
      title: "New Users",
      value: "1500",
      change: { value: "0%", trend: "neutral" as const },
    },
    {
      title: "Pending Users",
      value: "350",
      change: { value: "+6.08%", trend: "up" as const },
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <GeneralStatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          index={index}
        />
      ))}
    </div>
  );
}
