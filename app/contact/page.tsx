import Image from "next/image";
import { Metadata } from "next";

import ContactLandings from "@/components/contact/contact-landing";
import ContactForm from "@/components/contact/contact-forms";

export const metadata: Metadata = {
  title: "Hot Beans | Contact Us",
  description: "Where developers can find jobs and grow their careers and talents.",
};

export default function Contact() {

  return (
    <>
        <ContactLandings />
        <ContactForm />
    </>
    
  );
}
