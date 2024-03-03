import Image from "next/image";
import { Metadata } from "next";
import AboutParalaxLanding from "@/components/About-Us/Paralax-Landing";

export const metadata: Metadata = {
  title: "Hot Beans | About Us",
  description: "Where developers can find jobs and grow their careers and talents.",
};

export default function About() {

  return (
    <>
      <AboutParalaxLanding />
    </>
    
  );
}
