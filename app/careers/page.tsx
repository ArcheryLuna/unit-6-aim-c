import { Metadata } from "next";
import CareerListing from "@/components/careers/careers-listings";

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
