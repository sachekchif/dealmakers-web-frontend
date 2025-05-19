"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Package2, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Transaction {
  id: string;
  marketplace: {
    name: string;
    rating: number;
    logo: string;
  };
  date: string;
  category: string;
  transactionId: string;
  amount: string;
  status: "Completed" | "Pending";
}
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
      marketplace: {
        name: "Jumia King",
        rating: 4.9,
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
      marketplace: {
        name: "Elizabeth Blessing",
        rating: 4.8,
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Fashion",
      transactionId: "11723456790",
      amount: "₦5,000.00",
      status: "Pending",
    },
    {
      id: "3",
      marketplace: {
        name: "Jumia King",
        rating: 4.9,
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Fashion",
      transactionId: "11723456791",
      amount: "₦5,000.00",
      status: "Completed",
    },
    {
      id: "4",
      marketplace: {
        name: "Elizabeth Blessing",
        rating: 4.8,
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Fashion",
      transactionId: "#11723456792",
      amount: "₦5,000.00",
      status: "Completed",
    },
    {
      id: "5",
      marketplace: {
        name: "Jumia King",
        rating: 4.9,
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Fashion",
      transactionId: "11723456793",
      amount: "₦5,000.00",
      status: "Pending",
    },
    {
      id: "6",
      marketplace: {
        name: "Elizabeth Blessing",
        rating: 4.8,
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Fashion",
      transactionId: "11723456794",
      amount: "₦5,000.00",
      status: "Completed",
    },
    {
      id: "7",
      marketplace: {
        name: "Jumia King",
        rating: 4.9,
        logo: "/placeholder.svg?height=40&width=40",
      },
      date: "27th March, 2024, 2:39 PM",
      category: "Fashion",
      transactionId: "11723456795",
      amount: "₦5,000.00",
      status: "Completed",
    },
  ];

  useEffect(() => {
    if (isKYCCompleted) {
      setTtransactions(transactions);
    } else {
      setTtransactions([]);
    }
  }, [isKYCCompleted]);

  const handleRowClick = (transactionId: string) => {
    router.push(`wallet/transactions/${transactionId}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Transaction History</h2>
        <Button variant="link" className="text-blue-500 h-auto p-0">
          See All
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox />
                </TableHead>
                <TableHead>Marketplace & Clients</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Ttransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-96">
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <Package2 className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-lg font-medium">No Activity Found</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                Ttransactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleRowClick(transaction.transactionId)}
                  >
                    <TableCell className="align-top pt-4">
                      <Checkbox onClick={(e) => e.stopPropagation()} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                          {transaction.marketplace.name.includes("Jumia") ? (
                            <div className="w-full h-full bg-green-500 flex items-center justify-center">
                              <span className="text-white text-xs">JK</span>
                            </div>
                          ) : (
                            <div className="w-full h-full bg-orange-500 flex items-center justify-center">
                              <span className="text-white text-xs">EB</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {transaction.marketplace.name}
                          </div>
                          <div className="flex items-center text-xs text-yellow-500">
                            <Star className="h-3 w-3 fill-current mr-0.5" />
                            <span>{transaction.marketplace.rating}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-600 hover:bg-blue-50"
                      >
                        {transaction.transactionId}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      {transaction.amount}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          transaction.status === "Completed"
                            ? "bg-green-100 text-green-600 hover:bg-green-100"
                            : "bg-orange-100 text-orange-600 hover:bg-orange-100"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
