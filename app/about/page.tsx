import Image from "next/image";
import { Metadata } from "next";
import AboutParalaxLanding from "@/components/About-Us/Paralax-Landing";
import AboutShortDesc from "@/components/About-Us/short-description";

export const metadata: Metadata = {
  title: "Hot Beans | About Us",
  description: "Where developers can find jobs and grow their careers and talents.",
};

export default function About() {

  return (
    <main className="dark:bg-[#191919] dark:bg-dot-[#dfe9e9]/[0.2] bg-dot-[#191919]/[0.2] relative">
      <AboutParalaxLanding />
        <div className="relative z-10">
          <AboutShortDesc />
          <div className="px-6 py-6 lg:px-12 lg:py-12">

          </div>
        </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-[#dfe9e9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </main>
  );
}
