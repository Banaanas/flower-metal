import { SheetCategory } from "@/data/google-sheets.config";

export type GoogleSheetItem = {
  artist: string | null;
  country: string | null;
  explanation: string | null;
  category: SheetCategory;
};
