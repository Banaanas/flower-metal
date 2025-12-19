"use client";

import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CATEGORY_FILTERS, SheetCategory } from "@/data/google-sheets.config";

export const TableCategoryDropdown = ({
  value,
  onValueChange,
}: TableCategoryDropdownProps) => {
  const selectedFilter = CATEGORY_FILTERS.find((f) => f.category === value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-border bg-background hover:bg-accent flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors">
        <span>{selectedFilter?.label}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        {CATEGORY_FILTERS.map((filter) => (
          <DropdownMenuItem
            key={filter.category}
            onClick={() => onValueChange(filter.category)}
          >
            {filter.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface TableCategoryDropdownProps {
  value: SheetCategory;
  onValueChange: Dispatch<SetStateAction<SheetCategory>>;
}
