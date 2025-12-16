"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { GoogleSheetItem } from "@/types/google-sheet";
import { getCategoryLabel } from "@/utils/get-category-label";

export const FlowerMetalTable = ({ items }: FlowerMetalTableProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto max-h-[50vh] overflow-y-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-background z-10">
            <TableRow>
              <TableHead className="w-[220px]">Artist / Label</TableHead>
              <TableHead className="w-[120px]">Country</TableHead>
              <TableHead className="w-[140px]">Category</TableHead>
              <TableHead className="hidden md:table-cell">
                Explanation
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {items.map((item, index) => (
              <TableRow key={`${item.category}-${index}`}>
                {/* Artist - constrained with wrapping */}
                <TableCell className="font-medium whitespace-normal break-words max-w-[220px]">
                  {item.artist ?? "—"}
                </TableCell>

                {/* Country */}
                <TableCell>{item.country ?? "—"}</TableCell>

                {/* Category */}
                <TableCell className="text-sm text-muted-foreground">
                  {getCategoryLabel(item.category)}
                </TableCell>

                {/* Explanation - allow wrapping and breaking long words within width */}
                <TableCell className="hidden md:table-cell  whitespace-normal break-words">
                  {item.explanation ? (
                    item.explanation
                  ) : (
                    <span className="text-sm text-muted-foreground">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No results found.</p>
          </div>
        )}
      </div>
    </Card>
  );
};

interface FlowerMetalTableProps {
  items: GoogleSheetItem[];
}
