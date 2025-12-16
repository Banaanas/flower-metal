import Papa from "papaparse";

// Keep it simple: just type the parsed row values
type RawCell = string | number | boolean | null | undefined;
type RawRow = Record<string, RawCell>;

export type GoogleSheetItem = {
  artist: string | null;
  country: string | null;
  category: string | null;
  explanation: string | null;
};

export const fetchGoogleSheet = async (): Promise<GoogleSheetItem[]> => {
  const response = await fetch(url, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  const csvText = await response.text();

  const parsed = Papa.parse<RawRow>(csvText, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  });

  // Map to the shape we need with straightforward typing/casts
  const cleanData: GoogleSheetItem[] = parsed.data.map((row: RawRow) => ({
    artist: (row[
      "Taken from a few different lists from /rabm and stuff.\nCollab and corrections welcome.\n\n\n\n\nArtist"
    ] ??
      row["Artist"] ??
      null) as string | null,

    country: row["Country"] as string | null,

    category: row[""] as string | null,

    explanation: row[
      "COLOR KEY:\n■ NAZI - Pro-fascist or far right content, or proven fascists\n■ SKETCH - Evidence suggesting fascists or far right but perhaps no true proof\n■ QUESTIONABLE - Debatable, shifted over time, or otherwise worth noting\n■ SAFE - Nothing sketch, as far as we know\n■ UNKNOWN - Politics & views of band are unknown\n\nExplanation"
    ] as string | null,
  }));

  return cleanData;
};

const sheetId =
  "2PACX-1vSfnVZGsyxn5eEacXKJZk3-_ql3bQAkPqzdc8p3fCdxtPS9BtvNlj0yjskUQyy3eDYBL9yYTqbba_5q";
const gid = "1141938115";
const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv&gid=${gid}`;
