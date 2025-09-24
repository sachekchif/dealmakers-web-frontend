"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Currency } from "../../_columns/currency-table-columns";
export interface CurrencyFormData {
  name: string;
  shortName: string;
  symbol: string;
  factor: number;
  status: "enabled" | "disabled";
}

interface CurrencyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currency: Currency | null;
  onSave: (data: CurrencyFormData) => void;
}

export function CurrencyDialog({
  open,
  onOpenChange,
  currency,
  onSave,
}: CurrencyDialogProps) {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [factor, setFactor] = useState<number>(1);
  const [status, setStatus] = useState<"enabled" | "disabled">("enabled");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (currency) {
      setName(currency.name);
      setShortName(currency.shortName);
      setSymbol(currency.symbol);
      setFactor(currency.factor);
      setStatus(currency.status);
    } else {
      setName("");
      setShortName("");
      setSymbol("");
      setFactor(1);
      setStatus("enabled");
    }
    setErrors({});
  }, [currency, open]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Currency name is required";
    }

    if (!shortName.trim()) {
      newErrors.shortName = "Short name is required";
    } else if (shortName.length > 5) {
      newErrors.shortName = "Short name must be 5 characters or less";
    }

    if (!symbol.trim()) {
      newErrors.symbol = "Currency symbol is required";
    }

    if (factor <= 0) {
      newErrors.factor = "Factor must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    onSave({
      name: name.trim(),
      shortName: shortName.trim().toUpperCase(),
      symbol: symbol.trim(),
      factor,
      status,
    });

    handleClose();
  };

  const handleClose = () => {
    setName("");
    setShortName("");
    setSymbol("");
    setFactor(1);
    setStatus("enabled");
    setErrors({});
    onOpenChange(false);
  };

  const getDialogTitle = () => {
    return currency ? "Update Currency" : "Add Currency";
  };

  const getDialogDescription = () => {
    return currency
      ? "Edit the currency details below."
      : "Add a new currency to the system.";
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            {getDialogTitle()}
          </DialogTitle>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto mt-2"></div>
          <DialogDescription className="text-center text-sm text-gray-600">
            {getDialogDescription()}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Currency Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Euro"
                className={`w-full ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortName" className="text-sm font-medium">
                Short Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="shortName"
                value={shortName}
                onChange={(e) => setShortName(e.target.value.toUpperCase())}
                placeholder="e.g., EUR"
                maxLength={5}
                className={`w-full ${errors.shortName ? "border-red-500" : ""}`}
              />
              {errors.shortName && (
                <p className="text-sm text-red-500">{errors.shortName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="symbol" className="text-sm font-medium">
                Symbol <span className="text-red-500">*</span>
              </Label>
              <Input
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="e.g., €"
                className={`w-full ${errors.symbol ? "border-red-500" : ""}`}
              />
              {errors.symbol && (
                <p className="text-sm text-red-500">{errors.symbol}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="factor" className="text-sm font-medium">
                Exchange Factor <span className="text-red-500">*</span>
              </Label>
              <Input
                id="factor"
                type="number"
                min="0"
                step="0.00001"
                value={factor}
                onChange={(e) => setFactor(parseFloat(e.target.value) || 0)}
                placeholder="e.g., 1.17085"
                className={`w-full ${errors.factor ? "border-red-500" : ""}`}
              />
              {errors.factor && (
                <p className="text-sm text-red-500">{errors.factor}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <Label htmlFor="status" className="text-sm font-medium">
              Enable Currency
            </Label>
            <Switch
              id="status"
              checked={status === "enabled"}
              className="data-[state=unchecked]:bg-gray-400 data-[state=checked]:bg-cyan-500"
              onCheckedChange={(checked) =>
                setStatus(checked ? "enabled" : "disabled")
              }
            />
          </div>

          <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
            <strong>Note:</strong> The exchange factor represents the conversion
            rate from your base currency. For example, if 1 USD = 1.17085 EUR,
            then EUR factor would be 1.17085.
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleSave}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
            disabled={
              !name.trim() || !shortName.trim() || !symbol.trim() || factor <= 0
            }
          >
            {currency ? "Update Currency" : "Add Currency"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
