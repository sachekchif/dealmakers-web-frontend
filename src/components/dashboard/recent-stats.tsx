import { StatCard } from "../stats-card";

export default function StatCards() {
  const stats = [
    {
      title: "Wallet Balance",
      value: "0",
      change: { value: "-0.03%", trend: "down" as const },
    },
    {
      title: "Purchase Made",
      value: "12",
      change: { value: "+15.03%", trend: "up" as const },
    },
    {
      title: "Pending Purchase",
      value: "2",
      change: { value: "+6.08%", trend: "up" as const },
    },
    {
      title: "Canceled Purchase",
      value: "6",
      change: { value: "+0%", trend: "neutral" as const },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard
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
