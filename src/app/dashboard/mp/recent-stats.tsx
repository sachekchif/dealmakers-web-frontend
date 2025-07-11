import {
  CurrencyStatCard,
  GeneralStatCard,
  StatCard,
} from "@/components/dashboard/stats-card";

export default function StatCards() {
  const stats = [
    {
      title: "Wallet Balance",
      value: "76400",
      change: { value: "-0.03%", trend: "down" as const },
    },
    {
      title: "Total Commissions",
      value: "6300",
      count: 1200,
      change: { value: "+15.03%", trend: "up" as const },
    },
    {
      title: "Total Users",
      value: "904",
      change: { value: "+6.08%", trend: "up" as const },
    },
    {
      title: "New Users",
      value: "150",
      change: { value: "+0%", trend: "neutral" as const },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.slice(0, 2).map((stat, index) => (
        <CurrencyStatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          index={index}
          count={stat.count}
        />
      ))}
      {stats.slice(2, 4).map((stat, index) => (
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
