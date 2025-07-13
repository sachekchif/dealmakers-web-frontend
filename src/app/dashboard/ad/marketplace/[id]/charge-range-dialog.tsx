// charge-range-dialog.tsx
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { ChargeRange } from "../../_columns/charge-range-table-column";
interface ChargeRangeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  chargeRange?: ChargeRange | null;
  onSave: (chargeRange: Omit<ChargeRange, "id">) => void;
  marketplaceId: string;
}

export function ChargeRangeDialog({
  open,
  onOpenChange,
  chargeRange,
  onSave,
  marketplaceId,
}: ChargeRangeDialogProps) {
  const [formData, setFormData] = useState({
    minimumAmount: "",
    maximumAmount: "",
    fixedCharge: "",
    percentCharge: "",
    chargeCap: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (chargeRange) {
      setFormData({
        minimumAmount: chargeRange.minimumAmount.toString(),
        maximumAmount: chargeRange.maximumAmount.toString(),
        fixedCharge: chargeRange.fixedCharge.toString(),
        percentCharge: chargeRange.percentCharge.toString(),
        chargeCap: chargeRange.chargeCap.toString(),
      });
    } else {
      setFormData({
        minimumAmount: "",
        maximumAmount: "",
        fixedCharge: "",
        percentCharge: "",
        chargeCap: "",
      });
    }
    setErrors([]);
  }, [chargeRange, open]);

  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    const minAmount = parseFloat(formData.minimumAmount);
    const maxAmount = parseFloat(formData.maximumAmount);
    const fixedCharge = parseFloat(formData.fixedCharge);
    const percentCharge = parseFloat(formData.percentCharge);
    const chargeCap = parseFloat(formData.chargeCap);

    if (isNaN(minAmount) || minAmount < 0) {
      newErrors.push("Minimum amount must be a valid positive number");
    }

    if (isNaN(maxAmount) || maxAmount < 0) {
      newErrors.push("Maximum amount must be a valid positive number");
    }

    if (minAmount >= maxAmount) {
      newErrors.push("Minimum amount must be less than maximum amount");
    }

    if (isNaN(fixedCharge) || fixedCharge < 0) {
      newErrors.push("Fixed charge must be a valid positive number");
    }

    if (isNaN(percentCharge) || percentCharge < 0 || percentCharge > 100) {
      newErrors.push("Percent charge must be between 0 and 100");
    }

    if (isNaN(chargeCap) || chargeCap < 0) {
      newErrors.push("Charge cap must be a valid positive number");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSave({
      minimumAmount: parseFloat(formData.minimumAmount),
      maximumAmount: parseFloat(formData.maximumAmount),
      fixedCharge: parseFloat(formData.fixedCharge),
      percentCharge: parseFloat(formData.percentCharge),
      chargeCap: parseFloat(formData.chargeCap),
      marketplaceId,
    });

    handleClose();
  };

  const handleClose = () => {
    setFormData({
      minimumAmount: "",
      maximumAmount: "",
      fixedCharge: "",
      percentCharge: "",
      chargeCap: "",
    });
    setErrors([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {chargeRange ? "Edit Charge Range" : "Add Charge Range"}
          </DialogTitle>
          <DialogDescription>
            {chargeRange
              ? "Update the charge range settings below."
              : "Configure the charge range for transactions within the specified amount limits."}
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minimumAmount">
                Minimum Amount <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="minimumAmount"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.minimumAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, minimumAmount: e.target.value })
                  }
                  placeholder="0.00"
                  className="pr-12"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-gray-100 text-gray-600 text-sm font-medium rounded-r-md border-l">
                  USD
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maximumAmount">
                Maximum Amount <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="maximumAmount"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.maximumAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, maximumAmount: e.target.value })
                  }
                  placeholder="0.00"
                  className="pr-12"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-gray-100 text-gray-600 text-sm font-medium rounded-r-md border-l">
                  USD
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fixedCharge">
              Fixed Charge <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="fixedCharge"
                type="number"
                min="0"
                step="0.01"
                value={formData.fixedCharge}
                onChange={(e) =>
                  setFormData({ ...formData, fixedCharge: e.target.value })
                }
                placeholder="0.00"
                className="pr-12"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-gray-100 text-gray-600 text-sm font-medium rounded-r-md border-l">
                USD
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="percentCharge">
              Percent Charge <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="percentCharge"
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={formData.percentCharge}
                onChange={(e) =>
                  setFormData({ ...formData, percentCharge: e.target.value })
                }
                placeholder="0.00"
                className="pr-12"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-gray-100 text-gray-600 text-sm font-medium rounded-r-md border-l">
                %
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Charge Cap{" "}
              <span className="text-blue-500 text-xs">
                (Maximum charge for the range)
              </span>{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={formData.chargeCap}
                onChange={(e) =>
                  setFormData({ ...formData, chargeCap: e.target.value })
                }
                placeholder="0.00"
                className="pr-12"
              />
              <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-gray-100 text-gray-600 text-sm font-medium rounded-r-md border-l">
                USD
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {chargeRange ? "Update" : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
