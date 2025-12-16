import { AlertTriangle } from "lucide-react";

import { Card } from "@/components/ui/card";

export const StatsCards = ({
  totalBands,
  blackMetalCount,
  otherGenresCount,
}: StatsCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Total Bands
            </p>
            <h3 className="text-3xl font-bold text-foreground mt-2">
              {totalBands}
            </h3>
          </div>
          <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-500" />
        </div>
      </Card>

      <Card className="p-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-3">
            By Genre
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground">Black Metal</span>
              <span className="font-bold text-foreground">
                {blackMetalCount}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground">Other Genres</span>
              <span className="font-bold text-foreground">
                {otherGenresCount}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

interface StatsCardsProps {
  totalBands: number;
  blackMetalCount: number;
  otherGenresCount: number;
}
