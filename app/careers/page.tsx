import Image from "next/image";
import { Metadata } from "next";

import { GlobeLanding } from "@/components/careers/careers-landing";

export const metadata: Metadata = {
  title: "Hot Beans | Careers",
  description: "Where developers can find jobs and grow their careers and talents.",
};

export default function Careers() {

  return (
    <>
        <GlobeLanding />
    </>
    
  );
}
