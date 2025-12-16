import { appName } from "@/data/app-data";

export const appMetadata = {
  name: appName,
  description: "Search Reddit efficiently.",

  pages: {
    home: {
      title: appName,
      description: "Search Reddit just as you need.",
    },
    query: {
      title: "Search Results",
      description: "Search results just as you need",
      getTitleForQuery: (query: string) => `${query}`,
      getDescriptionForQuery: (query: string) => `Results for ${query}.`,
    },
    history: {
      title: "History",
      description: "Your search history.",
    },
  },
} as const;
