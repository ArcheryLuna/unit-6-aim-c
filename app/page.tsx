import Image from "next/image";
import { Metadata } from "next";

import SparklesHero from "@/components/home-brew-ui/Sparkels";
import ShowNotTell from "@/components/home-page/show-not-tell";
import CeoQuote from "@/components/home-page/ceo-quote";
import Testimonials from "@/components/home-page/testimonials";

export const metadata: Metadata = {
  title: "Hot Beans",
  description: "Where developers can find jobs and grow their careers and talents.",
};

export default function Home() {

  return (
    <>
      <main>
        <SparklesHero/>
        <div className="py-6 px-6 lg:px-12 lg:py-12 dark:bg-[#191919] bg-[#dfe9e9] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex">
          <div className="relative z-10 w-screen ">
            <ShowNotTell/>
            <CeoQuote/>
            <Testimonials/>
          </div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-[#dfe9e9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </main>
    </>
    
  );
}
