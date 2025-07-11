import { CurrencyStatCard, StatCard } from "@/components/dashboard/stats-card";

export default function StatCards() {
  const stats = [
    {
      title: "Wallet Balance",
      value: "59000",
      change: { value: "-0.03%", trend: "down" as const },
    },
    {
      title: "Purchase Made",
      value: "1200000",
      count: 49000,
      change: { value: "+15.03%", trend: "up" as const },
    },
    {
      title: "Pending Purchase",
      value: "25000",
      count: 12000000,
      change: { value: "+6.08%", trend: "up" as const },
    },
    {
      title: "Canceled Purchase",
      value: "6300",
      count: 500,
      change: { value: "+0%", trend: "neutral" as const },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <CurrencyStatCard
          index={index}
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          count={stat.count}
        />
      ))}
    </div>
  );
}
