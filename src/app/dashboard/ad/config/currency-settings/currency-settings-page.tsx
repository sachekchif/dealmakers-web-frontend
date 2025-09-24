"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HistoryTable } from "@/components/dashboard/tables";
import {
  Currency,
  CurrencyActions,
  createCurrencyColumns,
} from "../../_columns/currency-table-columns";
import { CurrencyDialog, CurrencyFormData } from "./currency-dialog";
import { toast } from "sonner";

// Mock data matching the UI images
const initialCurrencies: Currency[] = [
  {
    id: 1,
    name: "Euro",
    shortName: "EUR",
    symbol: "€",
    factor: 1,
    status: "enabled",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Pound",
    shortName: "GBP",
    symbol: "£",
    factor: 0.89157,
    status: "enabled",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 3,
    name: "Swiss francs",
    shortName: "CHF",
    symbol: "Fr",
    factor: 1.1,
    status: "enabled",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 4,
    name: "US-Dollar",
    shortName: "USD",
    symbol: "$",
    factor: 1.17085,
    status: "enabled",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
];

export default function CurrencySettingsPage() {
  const [currencies, setCurrencies] = useState<Currency[]>(initialCurrencies);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCurrency, setEditingCurrency] = useState<Currency | null>(null);

  // Simulate API calls with delays and success/error handling
  const simulateApiCall = async <T,>(
    operation: () => T,
    successMessage: string,
    delay: number = 500
  ): Promise<T> => {
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, delay));

      // 10% chance of simulated error for demo purposes
      if (Math.random() < 0.1) {
        throw new Error("Network error occurred");
      }

      const result = operation();
      toast.success(successMessage);
      return result;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
      throw error;
    }
  };

  const handleCreateNew = () => {
    setEditingCurrency(null);
    setDialogOpen(true);
  };

  const handleEdit = (currency: Currency) => {
    setEditingCurrency(currency);
    setDialogOpen(true);
  };

  const handleToggleStatus = async (currency: Currency) => {
    try {
      await simulateApiCall(() => {
        setCurrencies((prev) =>
          prev.map((c) =>
            c.id === currency.id
              ? {
                  ...c,
                  status: c.status === "enabled" ? "disabled" : "enabled",
                  updatedAt: new Date().toISOString(),
                }
              : c
          )
        );
      }, `${currency.name} ${currency.status === "enabled" ? "disabled" : "enabled"} successfully`);
    } catch (error) {
      // Error already handled by simulateApiCall
    }
  };

  const handleDuplicate = async (currency: Currency) => {
    try {
      await simulateApiCall(() => {
        const newId = Math.max(...currencies.map((c) => c.id)) + 1;
        const now = new Date().toISOString();
        const duplicatedCurrency: Currency = {
          ...currency,
          id: newId,
          name: `${currency.name} (Copy)`,
          shortName: `${currency.shortName}2`,
          createdAt: now,
          updatedAt: now,
        };
        setCurrencies((prev) => [...prev, duplicatedCurrency]);
      }, `${currency.name} duplicated successfully`);
    } catch (error) {
      // Error already handled by simulateApiCall
    }
  };

  const handleDelete = async (currency: Currency) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${currency.name}? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      await simulateApiCall(() => {
        setCurrencies((prev) => prev.filter((c) => c.id !== currency.id));
      }, `${currency.name} deleted successfully`);
    } catch (error) {
      // Error already handled by simulateApiCall
    }
  };

  const handleSave = async (data: CurrencyFormData) => {
    try {
      await simulateApiCall(
        () => {
          const now = new Date().toISOString();

          if (editingCurrency) {
            // Update existing currency
            setCurrencies((prev) =>
              prev.map((c) =>
                c.id === editingCurrency.id
                  ? { ...c, ...data, updatedAt: now }
                  : c
              )
            );
          } else {
            // Create new currency
            const newId = Math.max(...currencies.map((c) => c.id)) + 1;
            const newCurrency: Currency = {
              id: newId,
              ...data,
              createdAt: now,
              updatedAt: now,
            };
            setCurrencies((prev) => [...prev, newCurrency]);
          }
        },
        editingCurrency
          ? `${data.name} updated successfully`
          : `${data.name} created successfully`
      );

      setDialogOpen(false);
      setEditingCurrency(null);
    } catch (error) {
      // Keep dialog open on error so user can retry
    }
  };

  // Create the actions object that will be passed to the table columns
  const currencyActions: CurrencyActions = {
    onEdit: handleEdit,
    onToggleStatus: handleToggleStatus,
    onDuplicate: handleDuplicate,
    onDelete: handleDelete,
  };

  // Generate columns with the actions
  const columns = createCurrencyColumns(currencyActions);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Currency Settings
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage currencies and exchange rates for the platform
            </p>
          </div>
          <Button
            onClick={handleCreateNew}
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Currency
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-cyan-600">
                  {currencies.length}
                </div>
                <div className="ml-auto text-cyan-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Total Currencies</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-green-600">
                  {currencies.filter((c) => c.status === "enabled").length}
                </div>
                <div className="ml-auto text-green-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Active Currencies</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-red-600">
                  {currencies.filter((c) => c.status === "disabled").length}
                </div>
                <div className="ml-auto text-red-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Disabled Currencies</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-orange-600">
                  {currencies.filter((c) => c.name.includes("Copy")).length}
                </div>
                <div className="ml-auto text-orange-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Draft Currencies</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center justify-between">
              Currencies
              <span className="text-sm font-normal text-gray-500">
                {currencies.length}{" "}
                {currencies.length === 1 ? "currency" : "currencies"}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <HistoryTable columns={columns} data={currencies} />
          </CardContent>
        </Card>

        {/* Dialog */}
        <CurrencyDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          currency={editingCurrency}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
