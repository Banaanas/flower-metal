"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const writtenTheme = theme === "dark" ? "light" : "dark";

  return <Button onClick={toggleTheme}>[ {writtenTheme} ]</Button>;
};
