import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Transaction {
  id: string;
  user: {
    name: string;
    bank: string;
    avatar: string;
  };
  date: string;
  type: "Withdrawal" | "Deposit";
  transactionId: string;
  amount: string;
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
      amount: "₦5,000.00",
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
      amount: "₦25,000.00",
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
      amount: "₦85,000.00",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          Recent Transaction
        </CardTitle>
        <Button
          asChild={true}
          variant="link"
          className="text-blue-500 h-auto p-0"
        >
          <Link href="/dashboard/wallet" className="flex items-center gap-1">
            See All
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30px]">
                <Checkbox />
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">Bank Details</div>
              </TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Transaction Type</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 bg-orange-500">
                      <AvatarImage
                        src={transaction.user.avatar || "/placeholder.svg"}
                        alt={transaction.user.name}
                      />
                      <AvatarFallback>JK</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{transaction.user.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {transaction.user.bank}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.type === "Withdrawal"
                        ? "destructive"
                        : "default"
                    }
                    className={
                      transaction.type === "Withdrawal"
                        ? "bg-red-100 text-red-600 hover:bg-red-100"
                        : "bg-green-100 text-green-600 hover:bg-green-100"
                    }
                  >
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 text-blue-600 hover:bg-blue-50"
                  >
                    {transaction.transactionId}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
