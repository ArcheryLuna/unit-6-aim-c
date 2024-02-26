import Image from "next/image";
import { Metadata } from "next";

import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

import SparklesHero from "@/components/home-brew-ui/Sparkels";

export const metadata: Metadata = {
  title: "Hot Beans | Careers",
  description: "Where developers can find jobs and grow their careers and tallents.",
};

export default function Home() {

  return (
    <main>
      <SparklesHero/>

    </main>
  );
}
