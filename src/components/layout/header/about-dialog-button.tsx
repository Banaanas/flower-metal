"use client";

import { Info } from "lucide-react";
import { useState } from "react";

import { AboutDialog } from "@/components/shared/about-dialog";
import { Button } from "@/components/ui/button";

export const AboutDialogButton = () => {
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2"
        onClick={() => setAboutDialogOpen(true)}
      >
        <Info className="h-4 w-4" />
        <span className="hidden sm:inline">About</span>
      </Button>

      <AboutDialog open={aboutDialogOpen} onOpenChange={setAboutDialogOpen} />
    </>
  );
};
