"use client";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export const FiltersDropdown = () => {
  const { currentFilter, setFilter } = useFilterNavigation();

  const selectedFilter = redditSearchFilters.find(
    (f) => f.key === currentFilter
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-border bg-background hover:bg-accent flex w-full items-center justify-between rounded-md border px-3 py-2 font-mono text-sm transition-colors">
        <span>{selectedFilter?.label}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        {redditSearchFilters.map((f) => (
          <DropdownMenuItem
            key={f.key}
            onClick={() => setFilter(f.key)}
            className="font-mono"
          >
            {f.label}
            {f.recommended ? (
              <span className="ml-1 text-[10px] opacity-70">← recommended</span>
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const FilterDropdownSkeleton = () => {
  return (
    <div className="border-border flex items-center gap-1 border-b pb-4">
      <div className="bg-muted h-8 w-full max-w-xl animate-pulse rounded" />
    </div>
  );
};
