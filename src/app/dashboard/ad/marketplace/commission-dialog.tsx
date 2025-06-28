// commission-dialog.tsx
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
import { Badge } from "@/components/ui/badge";
import { Percent, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Marketplace } from "../_columns/marketplace-table-column";

interface CommissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  marketplace?: Marketplace | null;
  onSave: (commissionData: CommissionAssignment) => void;
}

interface CommissionAssignment {
  marketplaceId: string;
  percentage: number;
  commissionType: "fixed" | "percentage";
  minAmount?: number;
  maxAmount?: number;
  effectiveDate: string;
  notes?: string;
}

export function CommissionDialog({
  open,
  onOpenChange,
  marketplace,
  onSave,
}: CommissionDialogProps) {
  const [formData, setFormData] = useState<CommissionAssignment>({
    marketplaceId: "",
    percentage: 0,
    commissionType: "percentage",
    minAmount: undefined,
    maxAmount: undefined,
    effectiveDate: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (marketplace && open) {
      setFormData({
        marketplaceId: marketplace.marketplaceId,
        percentage: 0,
        commissionType: "percentage",
        minAmount: undefined,
        maxAmount: undefined,
        effectiveDate: new Date().toISOString().split("T")[0],
        notes: "",
      });
      setErrors([]);
    }
  }, [marketplace, open]);

  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    if (formData.percentage <= 0 || formData.percentage > 100) {
      newErrors.push("Percentage must be between 0.1 and 100");
    }

    if (
      formData.minAmount &&
      formData.maxAmount &&
      formData.minAmount >= formData.maxAmount
    ) {
      newErrors.push("Minimum amount must be less than maximum amount");
    }

    if (!formData.effectiveDate) {
      newErrors.push("Effective date is required");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      marketplaceId: "",
      percentage: 0,
      commissionType: "percentage",
      minAmount: undefined,
      maxAmount: undefined,
      effectiveDate: new Date().toISOString().split("T")[0],
      notes: "",
    });
    setErrors([]);
    onOpenChange(false);
  };

  const calculateEstimatedCommission = () => {
    if (!marketplace || formData.percentage <= 0) return 0;
    return (marketplace.commissions * formData.percentage) / 100;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Percent className="h-5 w-5 text-cyan-500" />
            Assign Commission
          </DialogTitle>
          <DialogDescription>
            Set commission parameters for{" "}
            <span className="font-semibold text-cyan-600">
              {marketplace?.marketplaceId}
            </span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.length > 0 && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {/* Marketplace Info */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Marketplace</p>
                <p className="text-lg font-bold text-cyan-600">
                  {marketplace?.marketplaceId}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Current Commission</p>
                <p className="text-lg font-semibold">
                  ₦{marketplace?.commissions.toLocaleString()}.00
                </p>
              </div>
            </div>
          </div>

          {/* Commission Type */}
          <div className="space-y-2">
            <Label htmlFor="commissionType">Commission Type</Label>
            <Select
              value={formData.commissionType}
              onValueChange={(value: "fixed" | "percentage") =>
                setFormData({ ...formData, commissionType: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select commission type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="percentage">Percentage Based</SelectItem>
                <SelectItem value="fixed">Fixed Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Percentage */}
          <div className="space-y-2">
            <Label htmlFor="percentage">
              {formData.commissionType === "percentage"
                ? "Percentage (%)"
                : "Fixed Amount (₦)"}
            </Label>
            <Input
              id="percentage"
              type="number"
              min="0"
              max={formData.commissionType === "percentage" ? "100" : undefined}
              step={formData.commissionType === "percentage" ? "0.1" : "0.01"}
              value={formData.percentage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  percentage: parseFloat(e.target.value) || 0,
                })
              }
              placeholder={
                formData.commissionType === "percentage"
                  ? "Enter percentage (e.g., 5.5)"
                  : "Enter fixed amount"
              }
              required
            />
            {formData.commissionType === "percentage" &&
              formData.percentage > 0 && (
                <p className="text-sm text-gray-600">
                  Estimated commission: ₦
                  {calculateEstimatedCommission().toLocaleString()}.00
                </p>
              )}
          </div>

          {/* Amount Limits */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minAmount">Min Amount (₦)</Label>
              <Input
                id="minAmount"
                type="number"
                min="0"
                step="0.01"
                value={formData.minAmount || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    minAmount: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  })
                }
                placeholder="Optional"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxAmount">Max Amount (₦)</Label>
              <Input
                id="maxAmount"
                type="number"
                min="0"
                step="0.01"
                value={formData.maxAmount || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maxAmount: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  })
                }
                placeholder="Optional"
              />
            </div>
          </div>

          {/* Effective Date */}
          <div className="space-y-2">
            <Label htmlFor="effectiveDate">Effective Date</Label>
            <Input
              id="effectiveDate"
              type="date"
              value={formData.effectiveDate}
              onChange={(e) =>
                setFormData({ ...formData, effectiveDate: e.target.value })
              }
              required
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Input
              id="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Add any additional notes..."
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              Assign Commission
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
