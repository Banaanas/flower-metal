import Image from "next/image";

import { ToggleThemeButton } from "@/components/layout/theme-button";
import flowerMetalLogoSVG from "@/public/assets/flower-metal.png";

export const Header = () => {
  return (
    <header className="w-full h-fit flex justify-between">
      <div className="flex items-center gap-x-1">
        <Image
          src={flowerMetalLogoSVG}
          alt="FlowerMetalLogo"
          width={32}
          height={32}
        />
        Flower Metal
      </div>
      <ToggleThemeButton />
    </header>
  );
};

const getBudgetColor = (searchesLeft: number) => {
  if (searchesLeft <= 3) return "text-red-500";
  if (searchesLeft <= 5) return "text-amber-500";
  return "text-muted-foreground";
};
