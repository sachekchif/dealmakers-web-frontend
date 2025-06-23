"use client";

import { Button } from "@/components/ui/button";
import UserStats from "./user-stats";
import UserDialog from "./user-dialog";
import UserHistory from "./user-history";
import CustomersLocation from "../customers-location";

export default function ClientUsersPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <UserStats />

      <div>
        <UserDialog
          trigger={<Button>Invite User</Button>}
          onSubmit={async (values) => {
            // In a real app, this would be an API call
            console.log("User invited:", values);
          }}
        />
      </div>

      <UserHistory />
      <CustomersLocation />
    </div>
  );
}
