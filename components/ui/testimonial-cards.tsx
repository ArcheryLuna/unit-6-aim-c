// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

// React, Next and TailwindCSS imports
import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

export const TestimonialCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    timestamp: {
      date: string;
      time: string;
    };
  }[];
  className?: string;
}) => {

  const Cards = () => {
    return <>
    {
      items.map((item, index) => (
        <div key={index} className="break-inside-avoid-column">
          <Card key={item.name} className={cn((index > 4 ? "hidden lg:block" : "visible"), className)}>
            <CardHeader>
              <CardTitle className="font-black text-[#191919] dark:text-[#dfe9e9]">{item.title}</CardTitle>
              <CardDescription className="text-gray-600 font-semibold dark:text-gray-400"><FontAwesomeIcon icon={faUser} /> {item.name}</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-800 dark:text-gray-200">
              <blockquote>&quot;{item.quote}&quot;</blockquote>
            </CardContent>
            <CardFooter className="text-gray-600 justify-items-stretch dark:text-gray-400 grid grid-cols-2">
              <div>
                <FontAwesomeIcon icon={faCalendar} /> {item.timestamp.date} 
              </div>
              <div className="text-end">
                <FontAwesomeIcon icon={faClock} /> {item.timestamp.time}
              </div>
            </CardFooter>
          </Card> 
        </div>
      ))
    }
    </>
  }



  return (
    <div className="colums-1 md:colums-2 lg:columns-3 gap-4 space-y-4">
        <Cards />
    </div>
  )
};
