"use client";

import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function useModeResolver() {
  const { resolvedTheme } = useTheme();
  
  return (
    <div className="h-[40rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={
              resolvedTheme === "dark" ? "#dfe9e9" : "#191919"
            }
          />
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-[#dfe9e9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="px-12">
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center relative z-20">
            Design, <span className="text-green-900 dark:text-green-300">Develop</span>, <span className="text-green-500">Deploy</span>
          </h1>
          <TextGenerateEffect
            words="We at Hot Beans are here to allow you to flurish, learn and grow as a developer."
            className="font-normal relative z-20 text-center lg:text-left"
          />
        </div>
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-4/4 blur-sm" />
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/4" />
        <div className="hidden lg:absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
        <div className="hidden lg:absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
        <div className="absolute inset-x-40 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-4/4 blur-sm" />
        <div className="absolute inset-x-40 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/4" />
        <div className="hidden lg:absolute inset-x-80 bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-2/4 blur-sm" />
        <div className="hidden lg:absolute inset-x-80 bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-2/4" />

      </div>
  )
}
