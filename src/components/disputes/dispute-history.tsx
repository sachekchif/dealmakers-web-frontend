"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Dispute {
  id: string
  type: string
  date: string
  hoursLeft: number
  resolution: string
  transactionId: string
  amount: string
}

export default function DisputeHistory() {
  const router = useRouter()

  // Sample dispute data
  const disputes: Dispute[] = [
    {
      id: "1",
      type: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: "₦5,000.00",
    },
    {
      id: "2",
      type: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: "₦5,000.00",
    },
    {
      id: "3",
      type: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: "₦5,000.00",
    },
    {
      id: "4",
      type: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: "₦5,000.00",
    },
    {
      id: "5",
      type: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: "₦5,000.00",
    },
    {
      id: "6",
      type: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: "₦5,000.00",
    },
    {
      id: "7",
      type: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: "₦5,000.00",
    },
  ]

  const handleViewDispute = (disputeId: string) => {
    router.push(`/disputes/${disputeId}`)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Dispute History</h2>
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
                <TableHead>
                  <div className="flex items-center gap-1">Dispute Type</div>
                </TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Dispute Resolution</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputes.map((dispute) => (
                <TableRow key={dispute.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{dispute.type}</div>
                  </TableCell>
                  <TableCell>
                    {dispute.date}. <span className="text-red-500">{dispute.hoursLeft} Hours Left</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                      {dispute.resolution}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
                      {dispute.transactionId}
                    </Badge>
                  </TableCell>
                  <TableCell>{dispute.amount}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600"
                      onClick={() => handleViewDispute(dispute.id)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
