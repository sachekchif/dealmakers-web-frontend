// categories-page.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Filter, Download, Search } from "lucide-react";
import { HistoryTable } from "@/components/dashboard/tables";
import {
  Category,
  CategoriesColumns,
} from "../_columns/categories-table-column";
import { CategoryDialog } from "./category-dialog";

// Mock data for categories
const initialCategories: Category[] = [
  {
    id: 1,
    name: "FINTECH",
    description:
      "They often disrupt traditional finance by offering innovative solutions, expanding access, and improving efficiency. This can include everything from digital banking apps and peer-to-peer payment services to robo-advisors and cryptocurrency platforms.",
    status: "enabled",
  },
  {
    id: 2,
    name: "E-COMMERCE",
    description:
      "Electronic commerce platforms that facilitate online buying and selling of goods and services. These platforms provide digital marketplaces, payment processing, inventory management, and customer service tools.",
    status: "disabled",
  },
  {
    id: 3,
    name: "HEALTHCARE",
    description:
      "Digital health solutions including telemedicine, health monitoring apps, electronic health records, and medical device integration. Focus on improving patient care and medical service delivery.",
    status: "disabled",
  },
  {
    id: 4,
    name: "EDUCATION",
    description:
      "Educational technology platforms offering online learning, course management, student tracking, and interactive educational content. Designed to enhance learning experiences and educational outcomes.",
    status: "disabled",
  },
  {
    id: 5,
    name: "LOGISTICS",
    description:
      "Supply chain and logistics management solutions including tracking, delivery optimization, warehouse management, and transportation coordination systems.",
    status: "enabled",
  },
  {
    id: 6,
    name: "ENTERTAINMENT",
    description:
      "Digital entertainment platforms including streaming services, gaming platforms, content creation tools, and media distribution systems for various forms of digital entertainment.",
    status: "enabled",
  },
  {
    id: 7,
    name: "AGRICULTURE",
    description:
      "Agricultural technology solutions including farm management systems, crop monitoring, weather tracking, and agricultural marketplace platforms to improve farming efficiency.",
    status: "enabled",
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [filteredCategories, setFilteredCategories] =
    useState<Category[]>(initialCategories);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle filtering
  const handleFilterCategories = (value: string) => {
    setSearchTerm(value);
    if (!value.trim()) {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(
        (category) =>
          category.name.toLowerCase().includes(value.toLowerCase()) ||
          category.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  // Update filtered categories when categories change
  useEffect(() => {
    handleFilterCategories(searchTerm);
  }, [categories, searchTerm]);

  // Event listeners for actions triggered from the table columns
  useEffect(() => {
    const handleEditCategory = (event: CustomEvent) => {
      setEditingCategory(event.detail);
      setDialogOpen(true);
    };

    const handleToggleStatus = (event: CustomEvent) => {
      const categoryId = event.detail;
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === categoryId
            ? {
                ...cat,
                status: cat.status === "enabled" ? "disabled" : "enabled",
              }
            : cat
        )
      );
    };

    const handleDuplicateCategory = (event: CustomEvent) => {
      const category = event.detail;
      const newId = Math.max(...categories.map((cat) => cat.id)) + 1;
      const duplicatedCategory = {
        ...category,
        id: newId,
        name: `${category.name} (Copy)`,
      };
      setCategories((prev) => [...prev, duplicatedCategory]);
    };

    const handleDeleteCategory = (event: CustomEvent) => {
      const categoryId = event.detail;
      if (confirm("Are you sure you want to delete this category?")) {
        setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
      }
    };

    window.addEventListener(
      "editCategory",
      handleEditCategory as EventListener
    );
    window.addEventListener(
      "toggleStatus",
      handleToggleStatus as EventListener
    );
    window.addEventListener(
      "duplicateCategory",
      handleDuplicateCategory as EventListener
    );
    window.addEventListener(
      "deleteCategory",
      handleDeleteCategory as EventListener
    );

    return () => {
      window.removeEventListener(
        "editCategory",
        handleEditCategory as EventListener
      );
      window.removeEventListener(
        "toggleStatus",
        handleToggleStatus as EventListener
      );
      window.removeEventListener(
        "duplicateCategory",
        handleDuplicateCategory as EventListener
      );
      window.removeEventListener(
        "deleteCategory",
        handleDeleteCategory as EventListener
      );
    };
  }, [categories]);

  const handleCreateNew = () => {
    setEditingCategory(null);
    setDialogOpen(true);
  };

  const handleSaveCategory = (categoryData: Omit<Category, "id">) => {
    if (editingCategory) {
      // Update existing category
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...categoryData } : cat
        )
      );
    } else {
      // Create new category
      const newId = Math.max(...categories.map((cat) => cat.id)) + 1;
      setCategories((prev) => [...prev, { id: newId, ...categoryData }]);
    }
    setDialogOpen(false);
    setEditingCategory(null);
  };

  const handleExport = () => {
    // Implement export functionality
    console.log("Exporting categories...");
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            All Categories
          </h1>
          <Button
            onClick={handleCreateNew}
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </div>

        {/* Filters and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search categories by name or description..."
                value={searchTerm}
                onChange={(event) => handleFilterCategories(event.target.value)}
                className="pl-8 max-w-sm"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Statistics
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <div className="text-2xl font-bold text-gray-900">
              {categories.length}
            </div>
            <div className="text-sm text-gray-600">Total Categories</div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="text-2xl font-bold text-green-600">
              {categories.filter((cat) => cat.status === "enabled").length}
            </div>
            <div className="text-sm text-gray-600">Enabled</div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="text-2xl font-bold text-red-600">
              {categories.filter((cat) => cat.status === "disabled").length}
            </div>
            <div className="text-sm text-gray-600">Disabled</div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(
                (categories.filter((cat) => cat.status === "enabled").length /
                  categories.length) *
                  100
              )}
              %
            </div>
            <div className="text-sm text-gray-600">Enabled Rate</div>
          </div>
        </div> */}

        {/* Table */}
        <div className="bg-white rounded-lg border">
          <HistoryTable columns={CategoriesColumns} data={filteredCategories} />
        </div>

        {/* Category Dialog */}
        <CategoryDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          category={editingCategory}
          onSave={handleSaveCategory}
        />
      </div>
    </div>
  );
}
