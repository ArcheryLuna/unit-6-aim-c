import Image from "next/image";
import { Metadata } from "next";

import TeamLanding from "@/components/team/team-landing"
import Founders from "@/components/team/founders"
import Investors from "@/components/team/Investors"
import LeadDevs from "@/components/team/lead-developers"
import JuniorDevs from "@/components/team/junior-devs"

export const metadata: Metadata = {
  title: "Hot Beans | Our Team",
  description: "Where developers can find jobs and grow their careers and talents.",
};

export default function Team() {

  return (
    <>
        <TeamLanding />
        <div className="w-full dark:bg-[#191919] bg-[#dfe9e9]  dark:bg-grid-[#dfe9e9]/[0.2] bg-hexagon-[#191919]/[0.2] relative">
            <div className="px-6 py-6 lg:py-12 lg:px-12">
                <Founders />
                <Investors />
                <LeadDevs />
            </div>
            <JuniorDevs />
        </div>
    </>
  );
}
