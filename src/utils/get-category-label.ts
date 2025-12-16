import { SHEETS } from "@/data/google-sheets.config";

export const getCategoryLabel = (category: string): string => {
  const sheet = Object.values(SHEETS).find((s) => s.category === category);
  return sheet?.label ?? category;
};
