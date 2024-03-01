import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Beans | Not Found",
  description: "Where developers can find jobs and grow their careers and tallents.",
};

import FourOhFourButtons from "@/components/four-oh-four-comp/four-oh-four";

export default function FourOhFour() {

  return (
    <>
      <main className="py-6 px-6 lg:px-12 lg:py-12 font-mono dark:bg-[#191919] bg-[#dfe9e9] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-[92vh] relative flex">
            <div className="grid grid-cols-1 relative z-10 place-content-center">
                <div className=" px-6 py-6 lg:py-12 lg:px-12">
                  <h1 className="text-xl lg:text-2xl font-black">
                    404 - Content Not Found
                  </h1>
                  <p>
                    The content you are looking for does not exist. Do you want to return to the homepage?
                  </p>
                  <div className="inline-flex mt-4 gap-4">
                    <FourOhFourButtons />
                  </div>
                </div>
            </div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-[#dfe9e9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </main>
    </>
    
  );
}
