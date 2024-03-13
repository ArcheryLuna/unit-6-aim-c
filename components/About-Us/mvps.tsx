"use client";
import Image from "next/image";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const Founders = [{
    id: 1,
    name: "Felix Harper",
    designation: "CEO",
    image: "/Employees/CEO.jpeg"
}, {
    id: 2,
    name: "Jade Eliot",
    designation: "CTO",
    image: "/Employees/founders/Founder-1.jpeg"
}, {
    id: 3,
    name: "Walter Hartwell White",
    designation: "Chemist",
    image: "/Employees/founders/Founder-2.webp",
}, {
    id: 4,
    name: "Ana Singh Kaur",
    designation: "COO",
    image: "/Employees/founders/Founder-3.jpeg" 
}, {
    id: 5,
    name: "Yatin Jason Manuel",
    designation: "Halvex Partner",
    image: "/Employees/founders/Founder-4.jpeg"
}, {
    id: 6,
    name: "Lana Reyes",
    designation: "CFO",
    image: "/Employees/founders/Founder-6.jpeg"
}];
const Investors = [{
    id: 1, 
    name: "The Primeagen",
    designation: "Senior at Netflix",
    image: "/Employees/investors/investor-1.jpg"
}, {
    id: 2,
    name: "Theo Browne",
    designation: "founder of ping.gg",
    image: "/Employees/investors/investor-2.jpeg"
}, {
    id: 3,
    name: "Jesse Pinkman",
    designation: "Mr. White\'s Subordinate",
    image: "/Employees/investors/Investor-3.webp"
}, {
    id: 4,
    name: "Eric Wang",
    designation: "Founder of Convoy Panel",
    image: "/Employees/investors/Eric-Wang.webp"
}, {
    id: 5,
    name: "Mathew Patrick",
    designation: "The Theorist",
    image: "/Employees/investors/Investor-5.jpeg"
}];
const LeadDevelopers = [{
    id: 1,
    name: "Ashton Reece Clark",
    designation: "Lead Backend Developer",
    image: "/Employees/developers/lead-dev-1.jpg"
}, {
    id: 2,
    name: "Mark Zanix",
    designation: "QA Lead",
    image: "/Employees/developers/zanix-dev.jpg"
}, {
    id: 3,
    name: "Marija Liubsyte",
    designation: "Lead Frontend Designer",
    image: "/Employees/developers/lead-dev-3.jpeg"
}, {
    id: 4, 
    name: "Gustavo Fring",
    designation: "Lead Fullstack Developer",
    image: "/Employees/developers/lead-dev-4.webp"
}, {
    id: 5,
    name: "Shazil Erfan",
    designation: "Lead Data Analyst",
    image: "/Employees/developers/lead-dev-5.jpeg"
}, {
    id: 6,
    name: "Chris Sean",
    designation: "Lead Frontend Developer",
    image: "/Employees/developers/lead-dev-6-alt.jpeg"
}];

export default function MostValuablePeople() {
    const [tab, setTab] = useState("founders");

    const foundersTab = () => {
        return (
        
            <motion.div
                key="founders"
                className="absolute top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                exit={{ opacity: 0 }}
            >
            <Card>
                <CardHeader>
                    <CardTitle className="font-black">
                        Founders
                    </CardTitle>
                    <CardDescription>
                        {"// The ones who started it all"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-row items-center justify-center mb-10 w-full">
                            <AnimatedTooltip items={Founders} />
                        </div>
                        <div className="flex flex-row items-center gap-4 justify-center mb-10 w-full">
                            <h3 className=" font-bold text-xl px-4 py-2 bg-stone-200 dark:bg-stone-900 rounded-md">The Founders</h3>
                            <p> 
                                Our founders are exceptionaly talented individuals who have come together to create a company that is dedicated to providing the best web development solutions. 
                            </p>
                        </div>
                </CardContent>
            </Card>
            </motion.div>
        )
    }
    const investorsTab = () => {
        return (
        <motion.div
            key="investors"
            className="absolute top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle className="font-black">
                        Investors
                    </CardTitle>
                    <CardDescription>
                        {"// The money behind the operation"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flomponents/About-Us/mvps.tsx
./app/about/pagex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={Investors} />
                    </div>
                    <div className="flex flex-row items-center gap-4 justify-center mb-10 w-full">
                        <h3 className=" font-bold text-xl px-4 py-2 bg-stone-200 dark:bg-stone-900 rounded-md">Our investors</h3>
                        <p> 
                            Our investors are the ones who have put their trust in us and have helped us grow to where we are today. They saw potencial and allowed us to grow to the size we are today. Their backing is what keeps us motivated to create better products and services for our clients.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
        )
    
    }
    const leadDevelopersTab = () => {
       return (
       <motion.div
            key="leadDevelopers"
            className="absolute top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} 
            exit={{ opacity: 0 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle className="font-black">
                        Lead Developers
                    </CardTitle>
                    <CardDescription>
                        {"// The brains behind the operation"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={LeadDevelopers} />
                    </div>
                    <div className="flex flex-row items-center gap-4 justify-center mb-10 w-full">
                        <h3 className=" font-bold text-xl px-4 py-2 bg-stone-200 dark:bg-stone-900 rounded-md">Our Lead Developers</h3>
                        <p>
                           Our lead developers are the people who have been here to stragize and develop the best solutions for our clients. They are the ones who have been here working to create the best software ever produced.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
        )
    }


    return (
        <>
            <div className="my-6 lg:my-12 overflow-x-hidden">
                <h1 className="text-4xl tracking-wide font-black my-2 lg:my-4">
                    Founders, Investors and the clockwork
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    <Button className={(tab === "founders" ? "bg-stone-300 dark:bg-stone-900" : "text-[#dfe9e9] dark:text-[#191919]")} onClick={() => setTab("founders")}>Founders</Button>
                    <Button className={(tab === "investors" ? "bg-stone-300 dark:bg-stone-900 " : "text-[#dfe9e9] dark:text-[#191919]")} onClick={() => setTab("investors")}>Investors</Button>
                    <Button className={(tab === "leadDevelopers" ? "bg-stone-300 dark:bg-stone-900 " : "text-[#dfe9e9] dark:text-[#191919]")} onClick={() => setTab("leadDevelopers")}>Lead Devs</Button>
                </div>
                <div className="mt-4 lg:mt-6 relative h-[65vh] lg:h-[27vh]">
                    <AnimatePresence>
                        {tab === "founders" && foundersTab()}
                        {tab === "investors" && investorsTab()}
                        {tab === "leadDevelopers" && leadDevelopersTab()}
                    </AnimatePresence>
                </div>
                <Link href="/team">
                <Button className="w-full text-[#dfe9e9] dark:text-[#191919]">The rest of our team</Button>
                </Link>
            </div>
        </>
    )
}
