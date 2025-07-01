import { StatCardV1 } from "@/components/dashboard/stats-card";

export default function StatCards() {
  const stats = [
    {
      title: "Current Escrow Balance",
      value: 150000,
    },
    {
      title: "Total Escrow Payouts",
      value: 265000,
    },
    {
      title: "Total Escrow Payings",
      value: 6000,
    },
    {
      title: "Total Commission",
      value: 80000,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCardV1 key={stat.title} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}
