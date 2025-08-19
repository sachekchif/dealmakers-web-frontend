"use client";

import { useState, useEffect } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryTable } from "@/components/dashboard/tables";
import {
  TimersColumns,
  TimerSetting,
} from "../../_columns/timers-table-column";
import { TimerEditDialog } from "./timer-edit-dialog";

// Mock data for timer settings
const initialTimerSettings: TimerSetting[] = [
  {
    id: 1,
    category: "Autos",
    transactionType: "Product",
    applyGlobally: 3,
    applyCategory: "2 hours",
    status: "enabled",
    timerType: "payment",
  },
  {
    id: 2,
    category: "Autos",
    transactionType: "Product",
    applyGlobally: 3,
    applyCategory: "2 hours",
    status: "enabled",
    timerType: "payment",
  },
  {
    id: 3,
    category: "Autos",
    transactionType: "Product",
    applyGlobally: 3,
    applyCategory: "2 hours",
    status: "enabled",
    timerType: "payment",
  },
  {
    id: 4,
    category: "Autos",
    transactionType: "Product",
    applyGlobally: 3,
    applyCategory: "2 hours",
    status: "enabled",
    timerType: "payment",
  },
  {
    id: 5,
    category: "Autos",
    transactionType: "Product",
    applyGlobally: 3,
    applyCategory: "2 hours",
    status: "enabled",
    timerType: "payment",
  },
  {
    id: 6,
    category: "Autos",
    transactionType: "Product",
    applyGlobally: 3,
    applyCategory: "2 hours",
    status: "enabled",
    timerType: "payment",
  },
  {
    id: 7,
    category: "Autos",
    transactionType: "Product",
    applyGlobally: 3,
    applyCategory: "2 hours",
    status: "enabled",
    timerType: "payment",
  },
];

export default function SystemTimersPage() {
  const [timerSettings, setTimerSettings] =
    useState<TimerSetting[]>(initialTimerSettings);
  const [filteredSettings, setFilteredSettings] =
    useState<TimerSetting[]>(initialTimerSettings);
  const [activeTab, setActiveTab] = useState("payment-time");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTimer, setEditingTimer] = useState<TimerSetting | null>(null);

  // Filter form states
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("");
  const [selectedGlobalApply, setSelectedGlobalApply] = useState<string>("");
  const [selectedCategoryApply, setSelectedCategoryApply] =
    useState<string>("");

  const tabTypes = {
    "payment-time": "payment",
    rejection: "rejection",
    delivery: "delivery",
    inspection: "inspection",
    "dispute-resolution": "dispute",
    arbitration: "arbitration",
  };

  // Handle tab changes and filter data
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const timerType = tabTypes[value as keyof typeof tabTypes];
    const filtered = timerSettings.filter(
      (setting) => setting.timerType === timerType
    );
    setFilteredSettings(filtered);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Apply filters based on form values
    let filtered = timerSettings.filter(
      (setting) =>
        setting.timerType === tabTypes[activeTab as keyof typeof tabTypes]
    );

    if (selectedCategory) {
      filtered = filtered.filter(
        (setting) =>
          setting.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedTransactionType) {
      filtered = filtered.filter(
        (setting) =>
          setting.transactionType.toLowerCase() ===
          selectedTransactionType.toLowerCase()
      );
    }

    setFilteredSettings(filtered);
  };

  // Handle clearing filters
  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedTransactionType("");
    setSelectedGlobalApply("");
    setSelectedCategoryApply("");
    const timerType = tabTypes[activeTab as keyof typeof tabTypes];
    const filtered = timerSettings.filter(
      (setting) => setting.timerType === timerType
    );
    setFilteredSettings(filtered);
  };

  // Event listeners for timer actions
  useEffect(() => {
    const handleEditTimer = (event: CustomEvent) => {
      const timer = event.detail;
      setEditingTimer(timer);
      setDialogOpen(true);
    };

    const handleToggleStatus = (event: CustomEvent) => {
      const timerId = event.detail;
      setTimerSettings((prev) =>
        prev.map((timer) =>
          timer.id === timerId
            ? {
                ...timer,
                status: timer.status === "enabled" ? "disabled" : "enabled",
              }
            : timer
        )
      );
    };

    const handleDisableTimer = (event: CustomEvent) => {
      const timerId = event.detail;
      setTimerSettings((prev) =>
        prev.map((timer) =>
          timer.id === timerId ? { ...timer, status: "disabled" } : timer
        )
      );
    };

    const handleDuplicateTimer = (event: CustomEvent) => {
      const timer = event.detail;
      const newId = Math.max(...timerSettings.map((t) => t.id)) + 1;
      const duplicatedTimer = {
        ...timer,
        id: newId,
        category: `${timer.category} (Copy)`,
      };
      setTimerSettings((prev) => [...prev, duplicatedTimer]);
    };

    window.addEventListener("editTimer", handleEditTimer as EventListener);
    window.addEventListener(
      "toggleTimerStatus",
      handleToggleStatus as EventListener
    );
    window.addEventListener(
      "disableTimer",
      handleDisableTimer as EventListener
    );
    window.addEventListener(
      "duplicateTimer",
      handleDuplicateTimer as EventListener
    );

    return () => {
      window.removeEventListener("editTimer", handleEditTimer as EventListener);
      window.removeEventListener(
        "toggleTimerStatus",
        handleToggleStatus as EventListener
      );
      window.removeEventListener(
        "disableTimer",
        handleDisableTimer as EventListener
      );
      window.removeEventListener(
        "duplicateTimer",
        handleDuplicateTimer as EventListener
      );
    };
  }, [timerSettings]);

  // Update filtered data when timer settings change
  useEffect(() => {
    const timerType = tabTypes[activeTab as keyof typeof tabTypes];
    let filtered = timerSettings.filter(
      (setting) => setting.timerType === timerType
    );

    if (selectedCategory) {
      filtered = filtered.filter(
        (setting) =>
          setting.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedTransactionType) {
      filtered = filtered.filter(
        (setting) =>
          setting.transactionType.toLowerCase() ===
          selectedTransactionType.toLowerCase()
      );
    }

    setFilteredSettings(filtered);
  }, [timerSettings, activeTab, selectedCategory, selectedTransactionType]);

  const handleCreateNew = () => {
    setEditingTimer(null);
    setDialogOpen(true);
  };

  const handleSaveTimer = (timerData: Omit<TimerSetting, "id">) => {
    if (editingTimer) {
      // Update existing timer
      setTimerSettings((prev) =>
        prev.map((timer) =>
          timer.id === editingTimer.id ? { ...timer, ...timerData } : timer
        )
      );
    } else {
      // Create new timer
      const newId = Math.max(...timerSettings.map((timer) => timer.id)) + 1;
      setTimerSettings((prev) => [...prev, { id: newId, ...timerData }]);
    }
    setDialogOpen(false);
    setEditingTimer(null);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          System Settings
        </h1>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleCreateNew}
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            Add New Timer
          </Button>
          <span className="text-sm text-gray-500">Default</span>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-6 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger
            value="payment-time"
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
          >
            Payment Time
          </TabsTrigger>
          <TabsTrigger
            value="rejection"
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
          >
            Rejection
          </TabsTrigger>
          <TabsTrigger
            value="delivery"
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
          >
            Delivery
          </TabsTrigger>
          <TabsTrigger
            value="inspection"
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
          >
            Inspection
          </TabsTrigger>
          <TabsTrigger
            value="dispute-resolution"
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
          >
            Dispute resolution
          </TabsTrigger>
          <TabsTrigger
            value="arbitration"
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
          >
            Arbitration
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {/* Filter Form */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="autos">Autos</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transaction-type">Transaction Type</Label>
                  <Select
                    value={selectedTransactionType}
                    onValueChange={setSelectedTransactionType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Transaction Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                      <SelectItem value="digital">Digital</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-globally">Apply Globally</Label>
                  <Select
                    value={selectedGlobalApply}
                    onValueChange={setSelectedGlobalApply}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Transaction Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apply-category">Apply To Category</Label>
                  <Select
                    value={selectedCategoryApply}
                    onValueChange={setSelectedCategoryApply}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-hour">1 hour</SelectItem>
                      <SelectItem value="2-hours">2 hours</SelectItem>
                      <SelectItem value="3-hours">3 hours</SelectItem>
                      <SelectItem value="6-hours">6 hours</SelectItem>
                      <SelectItem value="12-hours">12 hours</SelectItem>
                      <SelectItem value="24-hours">24 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Timer Settings Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium capitalize">
                {activeTab.replace("-", " ")} Settings
              </h2>
              <Button variant="outline" size="sm" onClick={handleClearFilters}>
                Clear Filters
              </Button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border">
              <HistoryTable columns={TimersColumns} data={filteredSettings} />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Timer Edit Dialog */}
      <TimerEditDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        timer={editingTimer}
        onSave={handleSaveTimer}
      />
    </div>
  );
}
