import Papa from "papaparse";

import { getByHeader } from "./helpers";

import { GOOGLE_SHEET_ID, SHEETS, SheetKey } from "@/data/google-sheets.config";
import type { GoogleSheetItem } from "@/types/google-sheet";

type RawRow = Record<string, string | number | boolean | null | undefined>;

export const fetchSingleSheet = async (
  sheetKey: SheetKey
): Promise<GoogleSheetItem[]> => {
  const { gid, category } = SHEETS[sheetKey];

  const url = `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEET_ID}/pub?output=csv&gid=${gid}`;

  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  const csvText = await response.text();

  const parsed = Papa.parse<RawRow>(csvText, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  });

  return parsed.data.map((row) => ({
    artist: getByHeader(row, [/artist/i, /band/i, /label/i]),
    country: getByHeader(row, [/country/i]),
    explanation: getByHeader(row, [/explanation/i, /notes?/i, /comment/i]),
    category,
  }));
};
