// marketplace-dialog.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Marketplace } from "../_columns/marketplace-table-column";

interface MarketplaceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  marketplace?: Marketplace | null;
  onSave: (marketplace: Omit<Marketplace, "id">) => void;
}

export function MarketplaceDialog({
  open,
  onOpenChange,
  marketplace,
  onSave,
}: MarketplaceDialogProps) {
  const [formData, setFormData] = useState({
    marketplaceId: "",
    commissions: "",
    status: "enabled" as "enabled" | "disabled",
  });

  useEffect(() => {
    if (marketplace) {
      setFormData({
        marketplaceId: marketplace.marketplaceId,
        commissions: marketplace.commissions.toString(),
        status: marketplace.status,
      });
    } else {
      setFormData({
        marketplaceId: "",
        commissions: "",
        status: "enabled",
      });
    }
  }, [marketplace, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.marketplaceId.trim() || !formData.commissions.trim()) {
      return;
    }

    onSave({
      marketplaceId: formData.marketplaceId.trim(),
      commissions: parseFloat(formData.commissions),
      status: formData.status,
    });
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {marketplace ? "Edit Marketplace" : "Create New Marketplace"}
          </DialogTitle>
          <DialogDescription>
            {marketplace
              ? "Update the marketplace information below."
              : "Fill in the details to create a new marketplace."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="marketplaceId">Marketplace ID</Label>
            <Input
              id="marketplaceId"
              value={formData.marketplaceId}
              onChange={(e) =>
                setFormData({ ...formData, marketplaceId: e.target.value })
              }
              placeholder="Enter marketplace ID (e.g., JIJI, JUMIA)"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commissions">Commission Amount (₦)</Label>
            <Input
              id="commissions"
              type="number"
              min="0"
              step="0.01"
              value={formData.commissions}
              onChange={(e) =>
                setFormData({ ...formData, commissions: e.target.value })
              }
              placeholder="Enter commission amount"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value: "enabled" | "disabled") =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enabled">Enabled</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              {marketplace ? "Update" : "Create"} Marketplace
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
