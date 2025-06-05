import { recentTransactionsColumns } from "./columns/recent-transactions-table-column";
import RecentTableContainer from "../ui/recent-table-container";

export interface Transaction {
  id: string;
  user: {
    name: string;
    bank: string;
    avatar: string;
  };
  date: string;
  type: "Withdrawal" | "Deposit";
  transactionId: string;
  amount: number;
}

export default function RecentTransactions() {
  const transactions: Transaction[] = [
    {
      id: "1",
      user: {
        name: "Joshua King",
        bank: "GTBANK",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024. 2:39 PM",
      type: "Withdrawal",
      transactionId: "11723456790",
      amount: 5000,
    },
    {
      id: "2",
      user: {
        name: "Joshua King",
        bank: "GTBANK",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024. 2:39 PM",
      type: "Deposit",
      transactionId: "11723456793",
      amount: 25000,
    },
    {
      id: "3",
      user: {
        name: "Joshua King",
        bank: "GTBANK",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024. 2:39 PM",
      type: "Withdrawal",
      transactionId: "11723456795",
      amount: 85000,
    },
  ];

  return (
    <RecentTableContainer
      title="Recent Transactions"
      data={transactions}
      columns={recentTransactionsColumns} // your existing columns
      seeAllHref="/dashboard/wallet"
      seeAllText="See All"
      showSeeAll={true}
    />
  );
}
