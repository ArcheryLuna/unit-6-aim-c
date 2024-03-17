"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "../ui/spotlight";

const words = [
    {
        text: "Learn,",
    }, {
        text: "Build",
    }, {
        text: "&"
    }, {
        text: "Grow"
    }, {
        text: "with"
    }, {
        text: "us"
    }, {
        text: "and"
    }, {
        text: "our"
    }, {
        text: "resources"
    }
]

export function ResourceLanding() {
  return (
    <div className="flex h-[80vh] items-center justify-center px-6 py-6 lg:px-12 lg:py-12">
      <div className="grid justify-center">
        <TypewriterEffect
          words={words}
          className="text-4xl lg:text-6xl font-bold"
        />
        <p className="text-muted-foreground text-xl lg:text-2xl text-center">
            Where developers can find jobs and grow their careers and talents.
        </p>
      </div>
      <Spotlight fill="#a855f7"/>
    </div>
  );
}
