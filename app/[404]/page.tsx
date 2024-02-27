import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hot Beans | Not Found",
  description: "Where developers can find jobs and grow their careers and tallents.",
};

export default function Home() {

  return (
    <>
      <main className="py-6 px-6 lg:px-12 lg:py-12  dark:bg-[#191919] bg-[#dfe9e9] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex">
            <div className="grid grid-cols-1 justify-items-center">
                <div className="">

                </div>
            </div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-[#dfe9e9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </main>
    </>
    
  );
}
