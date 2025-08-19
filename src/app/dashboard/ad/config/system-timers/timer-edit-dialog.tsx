"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { TimerSetting } from "../../_columns/timers-table-column";

interface TimerEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  timer: TimerSetting | null;
  onSave: (timer: Omit<TimerSetting, "id">) => void;
}

export function TimerEditDialog({
  open,
  onOpenChange,
  timer,
  onSave,
}: TimerEditDialogProps) {
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [applyGlobally, setApplyGlobally] = useState(1);
  const [applyCategory, setApplyCategory] = useState("");
  const [status, setStatus] = useState<"enabled" | "disabled">("enabled");
  const [timerType, setTimerType] =
    useState<TimerSetting["timerType"]>("payment");

  useEffect(() => {
    if (timer) {
      setCategory(timer.category);
      setTransactionType(timer.transactionType);
      setApplyGlobally(timer.applyGlobally);
      setApplyCategory(timer.applyCategory);
      setStatus(timer.status);
      setTimerType(timer.timerType);
    } else {
      setCategory("");
      setTransactionType("");
      setApplyGlobally(1);
      setApplyCategory("");
      setStatus("enabled");
      setTimerType("payment");
    }
  }, [timer]);

  const handleSave = () => {
    if (category.trim() && transactionType.trim() && applyCategory.trim()) {
      onSave({
        category: category.trim(),
        transactionType: transactionType.trim(),
        applyGlobally,
        applyCategory: applyCategory.trim(),
        status,
        timerType,
      });
      handleClose();
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form
    setCategory("");
    setTransactionType("");
    setApplyGlobally(1);
    setApplyCategory("");
    setStatus("enabled");
    setTimerType("payment");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            {timer ? "Update Timer Setting" : "Create New Timer Setting"}
          </DialogTitle>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto mt-2"></div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium">
              Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Autos">Autos</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="transaction-type" className="text-sm font-medium">
              Transaction Type
            </Label>
            <Select value={transactionType} onValueChange={setTransactionType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Transaction Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Product">Product</SelectItem>
                <SelectItem value="Service">Service</SelectItem>
                <SelectItem value="Digital">Digital</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timer-type" className="text-sm font-medium">
              Timer Type
            </Label>
            <Select
              value={timerType}
              onValueChange={(value: TimerSetting["timerType"]) =>
                setTimerType(value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder="Select Timer Type"
                  className="w-full"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="payment">Payment Time</SelectItem>
                <SelectItem value="rejection">Rejection</SelectItem>
                <SelectItem value="delivery">Delivery</SelectItem>
                <SelectItem value="inspection">Inspection</SelectItem>
                <SelectItem value="dispute">Dispute Resolution</SelectItem>
                <SelectItem value="arbitration">Arbitration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-globally" className="text-sm font-medium">
              Apply Globally (Days)
            </Label>
            <Select
              value={applyGlobally.toString()}
              onValueChange={(value) => setApplyGlobally(parseInt(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Days" className="w-full" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Day</SelectItem>
                <SelectItem value="2">2 Days</SelectItem>
                <SelectItem value="3">3 Days</SelectItem>
                <SelectItem value="4">4 Days</SelectItem>
                <SelectItem value="5">5 Days</SelectItem>
                <SelectItem value="7">1 Week</SelectItem>
                <SelectItem value="14">2 Weeks</SelectItem>
                <SelectItem value="30">1 Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-category" className="text-sm font-medium">
              Apply to Category (Duration)
            </Label>
            <Select value={applyCategory} onValueChange={setApplyCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30 minutes">30 minutes</SelectItem>
                <SelectItem value="1 hour">1 hour</SelectItem>
                <SelectItem value="2 hours">2 hours</SelectItem>
                <SelectItem value="3 hours">3 hours</SelectItem>
                <SelectItem value="6 hours">6 hours</SelectItem>
                <SelectItem value="12 hours">12 hours</SelectItem>
                <SelectItem value="24 hours">24 hours</SelectItem>
                <SelectItem value="48 hours">48 hours</SelectItem>
                <SelectItem value="72 hours">72 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between py-2">
            <Label htmlFor="status" className="text-sm font-medium">
              Enable Timer
            </Label>
            <Switch
              id="status"
              checked={status === "enabled"}
              className=" data-[state=unchecked]:bg-gray-400 data-[state=checked]:bg-cyan-500"
              onCheckedChange={(checked) =>
                setStatus(checked ? "enabled" : "disabled")
              }
            />
          </div>
        </div>

        <Button
          onClick={handleSave}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
          disabled={
            !category.trim() || !transactionType.trim() || !applyCategory.trim()
          }
        >
          {timer ? "Update Timer Setting" : "Create Timer Setting"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
