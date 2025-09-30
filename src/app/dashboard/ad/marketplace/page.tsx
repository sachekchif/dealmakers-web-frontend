// marketplace-page.tsx (Updated with Commission Dialog Integration)
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
// import { DataTable } from "@/components/ui/data-table";
import {
  MarketplaceColumns,
  Marketplace,
} from "../_columns/marketplace-table-column";
import { CommissionDialog } from "./commission-dialog";
import { HistoryTable } from "@/components/dashboard/tables";

// Mock data - replace with your actual data source
const initialMarketplaces: Marketplace[] = [
  {
    id: 1,
    marketplaceId: "JIJI",
    commissions: 25000,
    status: "enabled",
  },
  {
    id: 2,
    marketplaceId: "JUMIA",
    commissions: 35000,
    status: "disabled",
  },
  {
    id: 3,
    marketplaceId: "KONGA",
    commissions: 20000,
    status: "enabled",
  },
];

interface CommissionAssignment {
  marketplaceId: string;
  percentage: number;
  commissionType: "fixed" | "percentage";
  minAmount?: number;
  maxAmount?: number;
  effectiveDate: string;
  notes?: string;
}

export default function MarketplacePage() {
  const [marketplaces, setMarketplaces] =
    useState<Marketplace[]>(initialMarketplaces);
  const [isCommissionDialogOpen, setIsCommissionDialogOpen] = useState(false);
  const [commissionMarketplace, setCommissionMarketplace] =
    useState<Marketplace | null>(null);

  // Handle commission assignment
  const handleSaveCommission = (commissionData: CommissionAssignment) => {
    // In a real application, you would send this data to your backend
    console.log("Commission assigned:", commissionData);

    // You can update the marketplace's commission based on the assignment
    if (commissionMarketplace && commissionData.commissionType === "fixed") {
      setMarketplaces((prev) =>
        prev.map((m) =>
          m.id === commissionMarketplace.id
            ? { ...m, commissions: commissionData.percentage }
            : m
        )
      );
    }

    // Show success message (you can implement toast notifications)
    alert(
      `Commission assigned successfully to ${commissionData.marketplaceId}!`
    );

    setIsCommissionDialogOpen(false);
    setCommissionMarketplace(null);
  };

  // Event listeners for table actions
  useEffect(() => {
    const handleAssignCommissions = (event: CustomEvent) => {
      const marketplace = event.detail as Marketplace;
      setCommissionMarketplace(marketplace);
      setIsCommissionDialogOpen(true);
    };

    // Add event listeners
    window.addEventListener(
      "assignCommissions",
      handleAssignCommissions as EventListener
    );

    return () => {
      // Cleanup event listeners
      window.removeEventListener(
        "assignCommissions",
        handleAssignCommissions as EventListener
      );
    };
  }, [marketplaces]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Marketplaces</h1>
          <p className="text-muted-foreground">
            Manage marketplace integrations and commissions
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <HistoryTable columns={MarketplaceColumns} data={marketplaces} />
      </div>

      {/* Commission Dialog */}
      <CommissionDialog
        open={isCommissionDialogOpen}
        onOpenChange={setIsCommissionDialogOpen}
        marketplace={commissionMarketplace}
        onSave={handleSaveCommission}
      />
    </div>
  );
}
