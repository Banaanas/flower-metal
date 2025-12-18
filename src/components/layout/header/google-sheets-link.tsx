import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_ROOT,
  SHEETS,
} from "@/data/google-sheets.config";

const GoogleSheetsLink = () => {
  return (
    <Button variant="outline" size="sm" asChild>
      <a
        href={`${GOOGLE_SHEET_ROOT}/${GOOGLE_SHEET_ID}/pubhtml?pli=1#gid=${SHEETS.blackMetal.gid}`}
        target="_blank"
        rel="noopener noreferrer"
        className="gap-2"
      >
        <ExternalLink className="h-4 w-4" />
        <span className="hidden sm:inline">Google Sheet</span>
      </a>
    </Button>
  );
};

export default GoogleSheetsLink;
