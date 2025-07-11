import {
  WalletTransactionsColumns,
  WalletTransaction,
} from "./_columns/wallet-transactions-table-column";
import { RecentTableContainer } from "@/components/dashboard/tables";

export default function RecentTransactions() {
  const walletTransactions: WalletTransaction[] = [
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
        bank: "First BANK",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024. 2:39 PM",
      type: "Commission",
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
      title="Recent Wallet Transactions"
      data={walletTransactions}
      columns={WalletTransactionsColumns} // your existing columns
      seeAllHref="/dashboard/us/wallet"
      seeAllText="See All"
      showSeeAll={true}
    />
  );
}
