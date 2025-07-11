import { CurrencyStatCard, StatCard } from "@/components/dashboard/stats-card";
import { TransactionType } from "./page";

const WithdrawData = [
  {
    title: "Successful Withdrawals",
    value: "0",
    change: { value: "-0.03%", trend: "down" as const },
  },
  {
    title: "Pending Withdrawals",
    value: "12",
    change: { value: "+15.03%", trend: "up" as const },
  },
  {
    title: "Rejected Withdrawals",
    value: "2",
    change: { value: "+6.08%", trend: "up" as const },
  },
  {
    title: "Initiated Withdrawals",
    value: "6",
    change: { value: "+0%", trend: "neutral" as const },
  },
];

const DepositData = [
  {
    title: "Successful Deposits",
    value: "50000000",
    change: { value: "-0.03%", trend: "down" as const },
  },
  {
    title: "Pending Deposits",
    value: "10000000",
    change: { value: "+15.03%", trend: "up" as const },
  },
  {
    title: "Rejected Deposits",
    value: "200",
    change: { value: "+6.08%", trend: "up" as const },
  },
  {
    title: "Initiated Deposits",
    value: "600",
    change: { value: "+0%", trend: "neutral" as const },
  },
];
export default function TransactionCards({ transactionType }: TransactionType) {
  const stats = transactionType === "withdrawal" ? WithdrawData : DepositData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <CurrencyStatCard
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
