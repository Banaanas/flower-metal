"use client";

import { useState } from "react";

import { FlowerMetalTable } from "@/components/table/flower-metal-table";
import { TableTabs } from "@/components/table/table-tabs";
import { SHEETS, SheetCategory } from "@/data/google-sheets.config";
import { GoogleSheetItem } from "@/types/google-sheet";

export const FlowerMetalView = ({ items }: FlowerMetalView) => {
  const [selectedTab, setSelectedTab] = useState<SheetCategory>(
    SHEETS.blackMetal.category
  );

  const filteredItems = items.filter((i) => i.category === selectedTab);

  return (
    <TableTabs value={selectedTab} onValueChange={setSelectedTab}>
      <FlowerMetalTable items={filteredItems} />
    </TableTabs>
  );
};

interface FlowerMetalView {
  items: GoogleSheetItem[];
}
