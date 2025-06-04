import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { RecentTransactionsTable } from "./recent-transaction-table";
import { recentTransactionsColumns } from "./columns/recent-transactions-table-column";

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
      transactionId: "#119234890",
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
      transactionId: "#119234890",
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
      transactionId: "#119234990",
      amount: 85000,
    },
  ];

  return (
    <Card className="shadow-none gap-2 border-none px-0">
      <CardHeader className="flex flex-row items-center justify-between px-0 ">
        <CardTitle className="text-lg font-medium">
          Recent Transaction
        </CardTitle>
        <Button
          asChild={true}
          variant="link"
          className="text-primary h-auto p-0"
        >
          <Link href="/dashboard/wallet" className="flex items-center gap-1">
            See All
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="px-0">
        <RecentTransactionsTable
          data={transactions}
          columns={recentTransactionsColumns}
        />
      </CardContent>
    </Card>
  );
}
