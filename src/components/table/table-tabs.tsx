"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SHEETS, SheetCategory } from "@/data/google-sheets.config";

export const TableTabs = ({
  value,
  onValueChange,
  children,
}: TableTabsProps) => {
  console.log("🔵 Component rendered, value:", value);

  const handleValueChange = (val: string) => {
    console.log("🟢 handleValueChange called with:", val);
    onValueChange(val as SheetCategory);
  };

  return (
    <Tabs value={value} onValueChange={handleValueChange} className="mb-8">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
        {tabSheets.map(({ category }) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {children}
    </Tabs>
  );
};

interface TableTabsProps {
  value: string;
  onValueChange: Dispatch<SetStateAction<SheetCategory>>;
  children: ReactNode;
}

const tabSheets = [SHEETS.blackMetal, SHEETS.otherGenres, SHEETS.recordLabels];
