"use client";

import { HistoryTable } from "@/components/dashboard/tables";
import { Input } from "@/components/ui/input";
import { User, UsersColumns } from "../_columns/users-table-column";

export default function UserHistory() {
  // Inside your UserHistory component
  const users: User[] = [
    {
      id: "1",
      name: "David Abolaji Victor",
      email: "davidabolaji2014@google.com",
      phone: "+234-812-345-234",
      status: "Suspended",
      avatar: "/avatars/david-1.jpg",
    },
    {
      id: "2",
      name: "David Abolaji Victor",
      email: "davidabolaji2014@google.com",
      phone: "+234-812-345-234",
      status: "Suspended",
      avatar: "/avatars/david-2.jpg",
    },
    {
      id: "3",
      name: "David Abolaji Victor",
      email: "davidabolaji2014@google.com",
      phone: "+234-812-345-234",
      status: "Active",
      avatar: "/avatars/david-3.jpg",
    },
    {
      id: "4",
      name: "David Abolaji Victor",
      email: "davidabolaji2014@google.com",
      phone: "+234-812-345-234",
      status: "Suspended",
      avatar: "/avatars/david-4.jpg",
    },
    {
      id: "5",
      name: "Sarah Johnson",
      email: "sarah.johnson@gmail.com",
      phone: "+234-803-567-890",
      status: "Active",
      avatar: "/avatars/sarah.jpg",
    },
    {
      id: "6",
      name: "Michael Chen",
      email: "m.chen@yahoo.com",
      phone: "+234-901-234-567",
      status: "Active",
      avatar: "/avatars/michael.jpg",
    },
    {
      id: "7",
      name: "Aisha Bello",
      email: "aisha.bello@outlook.com",
      phone: "+234-706-789-012",
      status: "Suspended",
      avatar: "/avatars/aisha.jpg",
    },
    {
      id: "8",
      name: "James Wilson",
      email: "james.wilson@hotmail.com",
      phone: "+234-813-456-789",
      status: "Active",
      avatar: "/avatars/james.jpg",
    },
    {
      id: "9",
      name: "Fatima Ibrahim",
      email: "fatima.ibrahim@gmail.com",
      phone: "+234-805-123-456",
      status: "Active",
      avatar: "/avatars/fatima.jpg",
    },
    {
      id: "10",
      name: "Emmanuel Okafor",
      email: "e.okafor@yahoo.com",
      phone: "+234-702-987-654",
      status: "Suspended",
      avatar: "/avatars/emmanuel.jpg",
    },
  ];
  const handleFilterDispute = (value: string) => {
    return;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Dispute History</h2>

        <div className="flex items-center">
          <Input
            placeholder="Filter by Transaction ID"
            // value={(table.getColumn("transactionId")?.getFilterValue() as string) ?? ""}
            onChange={(event) => handleFilterDispute(event.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>

      <HistoryTable columns={UsersColumns} data={users} />
    </div>
  );
}
