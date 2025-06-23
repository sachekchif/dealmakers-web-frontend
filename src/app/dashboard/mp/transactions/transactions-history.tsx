"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HistoryTable } from "@/components/dashboard/tables";
import {
  TransactionsColumns,
  Transaction,
} from "@/app/dashboard/us/_columns/transactions-table-column";
import { Input } from "@/components/ui/input";

type TransactionHistoryProps = {
  isKYCCompleted: boolean;
};

export default function TransactionHistory({
  isKYCCompleted,
}: TransactionHistoryProps) {
  const router = useRouter();
  const [Ttransactions, setTtransactions] = useState<Transaction[]>([]);
  // Sample transaction data
  const transactions: Transaction[] = [
    {
      id: "1",
      customerName: "Joshua King",
      marketplace: {
        name: "Jumia",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Fashion",
      transactionId: "11723456789",
      amount: "₦5,000.00",
      status: "Completed",
    },
    {
      id: "2",
      customerName: "Elizabeth Blessing",
      marketplace: {
        name: "Jiji",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Electronics",
      transactionId: "11723456790",
      amount: "₦15,000.00",
      status: "Pending",
    },
    {
      id: "3",
      customerName: "Kingsley Eze",
      marketplace: {
        name: "Konga",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "28th March, 2024, 1:15 PM",
      category: "Groceries",
      transactionId: "11723456791",
      amount: "₦12,750.00",
      status: "Completed",
    },
    {
      id: "4",
      customerName: "Ada Umeh",
      marketplace: {
        name: "PayPorte",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "29th March, 2024, 11:02 AM",
      category: "Beauty",
      transactionId: "11723456792",
      amount: "₦8,000.00",
      status: "Completed",
    },
    {
      id: "5",
      customerName: "Tolu Adeyemi",
      marketplace: {
        name: "Jumia",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "30th March, 2024, 3:45 PM",
      category: "Home & Living",
      transactionId: "11723456793",
      amount: "₦22,400.00",
      status: "Pending",
    },
    {
      id: "6",
      customerName: "Chioma Obi",
      marketplace: {
        name: "Slot",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "1st April, 2024, 9:10 AM",
      category: "Mobile Phones",
      transactionId: "11723456794",
      amount: "₦60,000.00",
      status: "Completed",
    },
    {
      id: "7",
      customerName: "David Mark",
      marketplace: {
        name: "Pointek",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "2nd April, 2024, 5:00 PM",
      category: "Computing",
      transactionId: "11723456795",
      amount: "₦45,999.00",
      status: "Completed",
    },
    // --- Newly added entries ---
    {
      id: "8",
      customerName: "Fatima Sanni",
      marketplace: {
        name: "Amazon NG",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "3rd April, 2024, 12:45 PM",
      category: "Books",
      transactionId: "11723456796",
      amount: "₦3,600.00",
      status: "Pending",
    },
    {
      id: "9",
      customerName: "Emeka Nwosu",
      marketplace: {
        name: "AliExpress",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "4th April, 2024, 10:30 AM",
      category: "Gadgets",
      transactionId: "11723456797",
      amount: "₦19,200.00",
      status: "Completed",
    },
    {
      id: "10",
      customerName: "Rukayat Balogun",
      marketplace: {
        name: "Supermart",
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "5th April, 2024, 4:22 PM",
      category: "Groceries",
      transactionId: "11723456798",
      amount: "₦10,500.00",
      status: "Completed",
    },
  ];

  useEffect(() => {
    if (isKYCCompleted) {
      setTtransactions(transactions as Transaction[]);
    } else {
      setTtransactions([]);
    }
  }, [isKYCCompleted]);

  const handleRowClick = (transactionId: string) => {
    router.push(`wallet/transaction/${transactionId}`);
  };

  const handleFilterTransactions = (value: string) => {
    return;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Transactions History</h2>

        <div className="flex items-center">
          <Input
            placeholder="Filter by Transaction ID"
            // value={(table.getColumn("transactionId")?.getFilterValue() as string) ?? ""}
            onChange={(event) => handleFilterTransactions(event.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>

      <HistoryTable columns={TransactionsColumns} data={Ttransactions} />
    </div>
  );
}
