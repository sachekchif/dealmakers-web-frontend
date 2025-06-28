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
import { MarketplaceDialog } from "./marketplace-dialog";
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
  const [isMarketplaceDialogOpen, setIsMarketplaceDialogOpen] = useState(false);
  const [isCommissionDialogOpen, setIsCommissionDialogOpen] = useState(false);
  const [selectedMarketplace, setSelectedMarketplace] =
    useState<Marketplace | null>(null);
  const [commissionMarketplace, setCommissionMarketplace] =
    useState<Marketplace | null>(null);

  // Handle marketplace CRUD operations
  const handleSaveMarketplace = (marketplaceData: Omit<Marketplace, "id">) => {
    if (selectedMarketplace) {
      // Update existing marketplace
      setMarketplaces((prev) =>
        prev.map((m) =>
          m.id === selectedMarketplace.id
            ? { ...marketplaceData, id: selectedMarketplace.id }
            : m
        )
      );
    } else {
      // Create new marketplace
      const newMarketplace: Marketplace = {
        ...marketplaceData,
        id: Math.max(...marketplaces.map((m) => m.id)) + 1,
      };
      setMarketplaces((prev) => [...prev, newMarketplace]);
    }
    setIsMarketplaceDialogOpen(false);
    setSelectedMarketplace(null);
  };

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
    const handleEditMarketplace = (event: CustomEvent) => {
      const marketplace = event.detail as Marketplace;
      setSelectedMarketplace(marketplace);
      setIsMarketplaceDialogOpen(true);
    };

    const handleToggleMarketplaceStatus = (event: CustomEvent) => {
      const marketplaceId = event.detail as number;
      setMarketplaces((prev) =>
        prev.map((m) =>
          m.id === marketplaceId
            ? { ...m, status: m.status === "enabled" ? "disabled" : "enabled" }
            : m
        )
      );
    };

    const handleDeleteMarketplace = (event: CustomEvent) => {
      const marketplaceId = event.detail as number;
      if (confirm("Are you sure you want to delete this marketplace?")) {
        setMarketplaces((prev) => prev.filter((m) => m.id !== marketplaceId));
      }
    };

    const handleDuplicateMarketplace = (event: CustomEvent) => {
      const marketplace = event.detail as Marketplace;
      const duplicatedMarketplace: Marketplace = {
        ...marketplace,
        id: Math.max(...marketplaces.map((m) => m.id)) + 1,
        marketplaceId: `${marketplace.marketplaceId}_COPY`,
      };
      setMarketplaces((prev) => [...prev, duplicatedMarketplace]);
    };

    const handleViewMarketplaceDetails = (event: CustomEvent) => {
      const marketplaceId = event.detail as number;
      // Navigate to marketplace details page
      window.location.href = `/marketplace/${marketplaceId}`;
    };

    const handleAssignCommissions = (event: CustomEvent) => {
      const marketplace = event.detail as Marketplace;
      setCommissionMarketplace(marketplace);
      setIsCommissionDialogOpen(true);
    };

    // Add event listeners
    window.addEventListener(
      "editMarketplace",
      handleEditMarketplace as EventListener
    );
    window.addEventListener(
      "toggleMarketplaceStatus",
      handleToggleMarketplaceStatus as EventListener
    );
    window.addEventListener(
      "deleteMarketplace",
      handleDeleteMarketplace as EventListener
    );
    window.addEventListener(
      "duplicateMarketplace",
      handleDuplicateMarketplace as EventListener
    );
    window.addEventListener(
      "viewMarketplaceDetails",
      handleViewMarketplaceDetails as EventListener
    );
    window.addEventListener(
      "assignCommissions",
      handleAssignCommissions as EventListener
    );

    return () => {
      // Cleanup event listeners
      window.removeEventListener(
        "editMarketplace",
        handleEditMarketplace as EventListener
      );
      window.removeEventListener(
        "toggleMarketplaceStatus",
        handleToggleMarketplaceStatus as EventListener
      );
      window.removeEventListener(
        "deleteMarketplace",
        handleDeleteMarketplace as EventListener
      );
      window.removeEventListener(
        "duplicateMarketplace",
        handleDuplicateMarketplace as EventListener
      );
      window.removeEventListener(
        "viewMarketplaceDetails",
        handleViewMarketplaceDetails as EventListener
      );
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
        <Button
          onClick={() => {
            setSelectedMarketplace(null);
            setIsMarketplaceDialogOpen(true);
          }}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Marketplace
        </Button>
      </div>

      <div className="space-y-4">
        <HistoryTable columns={MarketplaceColumns} data={marketplaces} />
      </div>

      {/* Marketplace Dialog */}
      <MarketplaceDialog
        open={isMarketplaceDialogOpen}
        onOpenChange={setIsMarketplaceDialogOpen}
        marketplace={selectedMarketplace}
        onSave={handleSaveMarketplace}
      />

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
