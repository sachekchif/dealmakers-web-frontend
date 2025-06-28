"use client";

import { HistoryTable } from "@/components/dashboard/tables";
import { Dispute, DisputesColumns } from "../_columns/disputes-table-column";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Download } from "lucide-react";

export default function DisputeHistory() {
  const disputes: Dispute[] = [
    {
      id: "1",
      transactionId: "#019234890",
      dateTime: "27th March, 2024. 2:39 PM",
      transactionType: "Service",
      buyerName: "John Mark",
      sellerName: "Joshua King",
      amount: 5000,
      preferredResolution: "Refund",
      status: "Completed",
    },
    {
      id: "2",
      transactionId: "#019234891",
      dateTime: "27th March, 2024. 1:15 PM",
      transactionType: "Product",
      buyerName: "Sarah Johnson",
      sellerName: "Mike Wilson",
      amount: 12500,
      preferredResolution: "Replacement",
      status: "Pending",
    },
    {
      id: "3",
      transactionId: "#019234892",
      dateTime: "26th March, 2024. 4:22 PM",
      transactionType: "Service",
      buyerName: "David Brown",
      sellerName: "Lisa Davis",
      amount: 8000,
      preferredResolution: "Refund",
      status: "In Progress",
    },
    {
      id: "4",
      transactionId: "#019234893",
      dateTime: "26th March, 2024. 11:30 AM",
      transactionType: "Product",
      buyerName: "Emma Thompson",
      sellerName: "James Miller",
      amount: 25000,
      preferredResolution: "Partial Refund",
      status: "Completed",
    },
    {
      id: "5",
      transactionId: "#019234894",
      dateTime: "25th March, 2024. 3:45 PM",
      transactionType: "Service",
      buyerName: "Robert Taylor",
      sellerName: "Anna Garcia",
      amount: 15000,
      preferredResolution: "Refund",
      status: "Failed",
    },
    {
      id: "1",
      transactionId: "#019234890",
      dateTime: "27th March, 2024. 2:39 PM",
      transactionType: "Service",
      buyerName: "John Mark",
      sellerName: "Joshua King",
      amount: 5000,
      preferredResolution: "Refund",
      status: "Completed",
    },
    {
      id: "2",
      transactionId: "#019234891",
      dateTime: "27th March, 2024. 1:15 PM",
      transactionType: "Product",
      buyerName: "Sarah Johnson",
      sellerName: "Mike Wilson",
      amount: 12500,
      preferredResolution: "Replacement",
      status: "Pending",
    },
    {
      id: "3",
      transactionId: "#019234892",
      dateTime: "26th March, 2024. 4:22 PM",
      transactionType: "Service",
      buyerName: "David Brown",
      sellerName: "Lisa Davis",
      amount: 8000,
      preferredResolution: "Refund",
      status: "In Progress",
    },
    {
      id: "4",
      transactionId: "#019234893",
      dateTime: "26th March, 2024. 11:30 AM",
      transactionType: "Product",
      buyerName: "Emma Thompson",
      sellerName: "James Miller",
      amount: 25000,
      preferredResolution: "Partial Refund",
      status: "Completed",
    },
    {
      id: "5",
      transactionId: "#019234894",
      dateTime: "25th March, 2024. 3:45 PM",
      transactionType: "Service",
      buyerName: "Robert Taylor",
      sellerName: "Anna Garcia",
      amount: 15000,
      preferredResolution: "Refund",
      status: "Failed",
    },
    {
      id: "1",
      transactionId: "#019234890",
      dateTime: "27th March, 2024. 2:39 PM",
      transactionType: "Service",
      buyerName: "John Mark",
      sellerName: "Joshua King",
      amount: 5000,
      preferredResolution: "Refund",
      status: "Completed",
    },
    {
      id: "2",
      transactionId: "#019234891",
      dateTime: "27th March, 2024. 1:15 PM",
      transactionType: "Product",
      buyerName: "Sarah Johnson",
      sellerName: "Mike Wilson",
      amount: 12500,
      preferredResolution: "Replacement",
      status: "Pending",
    },
    {
      id: "3",
      transactionId: "#019234892",
      dateTime: "26th March, 2024. 4:22 PM",
      transactionType: "Service",
      buyerName: "David Brown",
      sellerName: "Lisa Davis",
      amount: 8000,
      preferredResolution: "Refund",
      status: "In Progress",
    },
    {
      id: "4",
      transactionId: "#019234893",
      dateTime: "26th March, 2024. 11:30 AM",
      transactionType: "Product",
      buyerName: "Emma Thompson",
      sellerName: "James Miller",
      amount: 25000,
      preferredResolution: "Partial Refund",
      status: "Completed",
    },
    {
      id: "5",
      transactionId: "#019234894",
      dateTime: "25th March, 2024. 3:45 PM",
      transactionType: "Service",
      buyerName: "Robert Taylor",
      sellerName: "Anna Garcia",
      amount: 15000,
      preferredResolution: "Refund",
      status: "Failed",
    },
  ];

  const handleFilterTransaction = (value: string) => {
    // Implement filtering logic here
    console.log("Filtering by:", value);
  };

  const handleExport = () => {
    // Implement export functionality
    console.log("Exporting transactions...");
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Dispute History</h2>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Filter by Transaction ID, Buyer, or Seller"
            onChange={(event) => handleFilterTransaction(event.target.value)}
            className="max-w-sm"
          />
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <HistoryTable columns={DisputesColumns} data={disputes} />
    </div>
  );
}
