"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { HistoryTable } from "@/components/dashboard/tables";
import {
  WalletTransaction,
  WalletTransactionsColumns,
} from "../_columns/wallet-transactions-table-column";
import { TransactionType } from "./page";

// Sample transaction data - defined outside component to prevent recreation
const WALLET_TRANSACTIONS_DATA: WalletTransaction[] = [
  {
    id: "1",
    user: {
      name: "Joshua King",
      bank: "GTBANK",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "27th March, 2024. 2:39 PM",
    type: "withdrawal",
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
    type: "deposit",
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
    type: "withdrawal",
    transactionId: "11723456795",
    amount: 85000,
  },
  {
    id: "4",
    user: {
      name: "Amina Bello",
      bank: "ACCESS BANK",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "12th April, 2024. 10:12 AM",
    type: "deposit",
    transactionId: "11723456801",
    amount: 120000,
  },
  {
    id: "5",
    user: {
      name: "Chinedu Okafor",
      bank: "UBA",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "15th April, 2024. 4:50 PM",
    type: "withdrawal",
    transactionId: "11723456807",
    amount: 15000,
  },
  {
    id: "6",
    user: {
      name: "Ngozi Adeyemi",
      bank: "ZENITH BANK",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "20th April, 2024. 11:45 AM",
    type: "deposit",
    transactionId: "11723456815",
    amount: 60000,
  },
  {
    id: "7",
    user: {
      name: "Bola Martins",
      bank: "FIRST BANK",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "25th April, 2024. 9:00 AM",
    type: "withdrawal",
    transactionId: "11723456821",
    amount: 20000,
  },
  {
    id: "8",
    user: {
      name: "Musa Ibrahim",
      bank: "STANBIC IBTC",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "1st May, 2024. 3:18 PM",
    type: "deposit",
    transactionId: "11723456830",
    amount: 75000,
  },
  {
    id: "9",
    user: {
      name: "Adaeze Uche",
      bank: "FIDELITY BANK",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "5th May, 2024. 7:30 PM",
    type: "withdrawal",
    transactionId: "11723456845",
    amount: 30000,
  },
  {
    id: "10",
    user: {
      name: "Joshua King",
      bank: "GTBANK",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "9th May, 2024. 1:15 PM",
    type: "deposit",
    transactionId: "11723456858",
    amount: 45000,
  },
];

export default function WalletTransactionHistory({
  transactionType,
}: TransactionType) {
  const router = useRouter();
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<WalletTransaction[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Memoize filtered data based on transactionType
  const filteredByType = useMemo(() => {
    if (transactionType) {
      return WALLET_TRANSACTIONS_DATA.filter(
        (tx) => tx.type.toLowerCase() === transactionType.toLowerCase()
      );
    }
    return WALLET_TRANSACTIONS_DATA;
  }, [transactionType]);

  // Initialize transactions
  useEffect(() => {
    setTransactions(filteredByType);
    setFilteredTransactions(filteredByType);
  }, [filteredByType]);

  const handleRowClick = useCallback((transactionId: string) => {
    router.push(`wallet/transaction/${transactionId}`);
  }, [router]);

  const handleFilterTransactions = useCallback((value: string) => {
    setSearchTerm(value);
    
    if (!value.trim()) {
      setFilteredTransactions(filteredByType);
      return;
    }

    const searchValue = value.toLowerCase().trim();
    const filtered = filteredByType.filter(
      (tx) =>
        tx.transactionId.toLowerCase().includes(searchValue) ||
        tx.user.name.toLowerCase().includes(searchValue) ||
        tx.user.bank.toLowerCase().includes(searchValue) ||
        tx.amount.toString().includes(searchValue)
    );
    
    setFilteredTransactions(filtered);
  }, [filteredByType]);

  // Update filtered transactions when filteredByType changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredTransactions(filteredByType);
    } else {
      // Reapply search filter on new data
      const searchValue = searchTerm.toLowerCase().trim();
      const filtered = filteredByType.filter(
        (tx) =>
          tx.transactionId.toLowerCase().includes(searchValue) ||
          tx.user.name.toLowerCase().includes(searchValue) ||
          tx.user.bank.toLowerCase().includes(searchValue) ||
          tx.amount.toString().includes(searchValue)
      );
      setFilteredTransactions(filtered);
    }
  }, [filteredByType, searchTerm]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Transactions History</h2>

        <div className="flex items-center">
          <Input
            placeholder="Filter by Transaction ID"
            value={searchTerm}
            onChange={(event) => handleFilterTransactions(event.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>

      <HistoryTable data={filteredTransactions} columns={WalletTransactionsColumns} />
    </div>
  );
}