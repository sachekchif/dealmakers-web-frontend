"use client"

import DisputeStats from "@/components/disputes/dispute-stats"
import DisputeHistory from "@/components/disputes/dispute-history"
import DisputeDialog from "@/components/disputes/dispute-dialog"
import { Button } from "@/components/ui/button"

export default function ClientDisputesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <DisputeStats />

      <div>
        <DisputeDialog
          trigger={<Button className="bg-blue-500 hover:bg-blue-600">Create Dispute</Button>}
          onSubmit={async (values) => {
            // In a real app, this would be an API call
            console.log("Dispute created:", values)
          }}
        />
      </div>

      <DisputeHistory />
    </div>
  )
}
