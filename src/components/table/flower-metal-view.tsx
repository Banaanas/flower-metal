"use client";

import { useState } from "react";

import { FlowerMetalTable } from "@/components/table/flower-metal-table";
import { TableCategoryDropdown } from "@/components/table/table-category-dropdown";
import { TableCategoryToggle } from "@/components/table/table-category-toggle";
import { TableSearch } from "@/components/table/table-search";
import { SHEETS, SheetCategory } from "@/data/google-sheets.config";
import { GoogleSheetItem } from "@/types/google-sheet";

export const FlowerMetalView = ({ items }: FlowerMetalView) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SheetCategory>(
    SHEETS.blackMetal.category
  );

  const filteredItems = filterItems(items, selectedCategory, searchTerm);

  return (
    <div className="flex flex-col gap-y-8 pt-8">
      <TableSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="max-w-48">
        <TableCategoryDropdown
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />
      </div>

      <div className="">
        <TableCategoryToggle
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />
      </div>

      <FlowerMetalTable items={filteredItems} />
    </div>
  );
};

interface FlowerMetalView {
  items: GoogleSheetItem[];
}

const filterItems = (
  items: GoogleSheetItem[],
  selectedTab: SheetCategory,
  searchTerm: string
): GoogleSheetItem[] => {
  return items.filter((item) => {
    // Filter by category (unless "all" is selected)
    if (selectedTab !== "all" && item.category !== selectedTab) {
      return false;
    }

    // If no search term, show all items in this category
    if (!searchTerm.trim()) return true;

    // Search across multiple fields
    const searchLower = searchTerm.toLowerCase();
    return (
      item.artist?.toLowerCase().includes(searchLower) ||
      item.country?.toLowerCase().includes(searchLower) ||
      item.category?.toLowerCase().includes(searchLower) ||
      item.explanation?.toLowerCase().includes(searchLower)
    );
  });
};
