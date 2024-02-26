import Image from "next/image";
import { Metadata } from "next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffeeBean, faTerminal, faGraduationCap } from "@fortawesome/pro-solid-svg-icons";

import SparklesHero from "@/components/home-brew-ui/Sparkels";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hot Beans | Careers",
  description: "Where developers can find jobs and grow their careers and tallents.",
};

export default function Home() {

  return (
    <>
      <main>
        <SparklesHero/>
        <div className="py-6 px-6 lg:px-12 lg:py-12 h-[65rem] lg:h-[50rem] dark:bg-[#191919] bg-[#dfe9e9] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex border-neutral-300 dark:border-stone-800 border">
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base lg:text-2xl"><FontAwesomeIcon icon={faCoffeeBean} className="lg:mr-2" /> Who are we?</CardTitle>
                <CardDescription className="text-xs lg:text-lg">// Breif Summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className=" text-xs lg:text-base">Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla molestias deserunt incidunt quae ipsam? Suscipit eum asperiores veritatis modi tenetur sit quod nesciunt nisi, possimus voluptas excepturi ipsum at!</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base lg:text-2xl"><FontAwesomeIcon icon={faTerminal} className="mr-2" /> Bleeding Edge</CardTitle>
                <CardDescription className="text-xs lg:text-lg">// Technically advanced</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className=" text-xs lg:text-base">Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla molestias deserunt incidunt quae ipsam? Suscipit eum asperiores veritatis modi tenetur sit quod nesciunt nisi, possimus voluptas excepturi ipsum at!</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base lg:text-2xl"><FontAwesomeIcon icon={faCoffeeBean} className="mr-2" /> Who are we?</CardTitle>
                <CardDescription className="text-xs lg:text-lg">// Breif Summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className=" text-xs lg:text-base">Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla molestias deserunt incidunt quae ipsam? Suscipit eum asperiores veritatis modi tenetur sit quod nesciunt nisi, possimus voluptas excepturi ipsum at!</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base lg:text-2xl"><FontAwesomeIcon icon={faCoffeeBean} className="mr-2" /> Who are we?</CardTitle>
                <CardDescription className="text-xs lg:text-lg">// Breif Summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className=" text-xs lg:text-base">Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla molestias deserunt incidunt quae ipsam? Suscipit eum asperiores veritatis modi tenetur sit quod nesciunt nisi, possimus voluptas excepturi ipsum at!</p>
                </div>
              </CardContent>
            </Card>
            <Button className=" col-span-2 w-full text-[#191919]">
              <FontAwesomeIcon icon={faGraduationCap} /> Learn More
            </Button>
          </div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-[#dfe9e9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </main>
    </>
    
  );
}
