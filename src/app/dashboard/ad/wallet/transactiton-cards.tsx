import { CurrencyStatCard, StatCard } from "@/components/dashboard/stats-card";
import { TransactionType } from "./page";
import { count } from "console";

const WithdrawData = [
  // generate Data for withdrawal transactions
  // with title, value, and change and count properties

  {
    title: "Successful Withdrawals",
    value: "67440000",
    count: 3522,
    change: { value: "-0.03%", trend: "down" as const },
  },
  {
    title: "Pending Withdrawals",
    value: "12000000",
    count: 100,
    change: { value: "+15.03%", trend: "up" as const },
  },
  {
    title: "Rejected Withdrawals",
    value: "4230000",
    count: 550,
    change: { value: "+6.08%", trend: "up" as const },
  },
  {
    title: "Initiated Withdrawals",
    value: "60000",
    count: 150,
    change: { value: "+0%", trend: "neutral" as const },
  },
];

const DepositData = [
  {
    title: "Successful Deposits",
    value: "50000000",
    count: 2500,
    change: { value: "-0.03%", trend: "down" as const },
  },
  {
    title: "Pending Deposits",
    value: "10000000",
    count: 200,
    change: { value: "+15.03%", trend: "up" as const },
  },
  {
    title: "Rejected Deposits",
    value: "719000",
    count: 380,
    change: { value: "+6.08%", trend: "up" as const },
  },
  {
    title: "Initiated Deposits",
    value: "673000",
    count: 300,
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
          count={stat.count}
          index={index}
        />
      ))}
    </div>
  );
}
