"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { GoogleSheetItem } from "@/types/google-sheet";

export const FlowerMetalTable = ({ items }: FlowerMetalTableProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[220px]">Artist / Label</TableHead>
                <TableHead className="w-[120px]">Country</TableHead>
                <TableHead className="w-[140px]">Category</TableHead>
                <TableHead className="hidden md:table-cell">
                  Explanation
                </TableHead>
                <TableHead className="text-right w-[120px]">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {items.map((item, index) => (
                <TableRow key={`${item.category}-${index}`}>
                  {/* Artist - allow wrapping */}
                  <TableCell className="font-medium whitespace-normal">
                    {item.artist ?? "—"}
                  </TableCell>

                  {/* Country */}
                  <TableCell>{item.country ?? "—"}</TableCell>

                  {/* Category */}
                  <TableCell className="text-sm text-muted-foreground">
                    {item.category}
                  </TableCell>

                  {/* Explanation - 3 line limit with tooltip */}
                  <TableCell className="hidden md:table-cell">
                    {item.explanation ? (
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="text-sm text-muted-foreground line-clamp-3 cursor-help">
                              {item.explanation}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent
                            side="bottom"
                            className="max-w-md p-4"
                          >
                            <p className="text-sm whitespace-normal">
                              {item.explanation}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <span className="text-sm text-muted-foreground">—</span>
                    )}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
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
    </div>
  );
};

interface FlowerMetalTableProps {
  items: GoogleSheetItem[];
}
