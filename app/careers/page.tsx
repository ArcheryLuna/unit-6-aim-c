import { Metadata } from "next";
import dynamic from "next/dynamic";

const CareerListing = dynamic(() => import('@/components/careers/careers-listings'), { ssr: false });

export const metadata: Metadata = {
  title: "Hot Beans | Careers",
  description: "Where developers can find jobs and grow their careers and talents.",
};

export default function Careers() {

  return (
    <>
        <CareerListing />
    </>
    
  );
}
