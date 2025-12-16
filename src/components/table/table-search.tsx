"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const TableSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex-1">
      <Label htmlFor="search" className="sr-only">
        Search bands
      </Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          id="search"
          type="search"
          placeholder="Search bands, countries, genres, evidence..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-11"
        />
      </div>
    </div>
  );
};
