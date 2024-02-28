'use client';

import dynamic from 'next/dynamic';
import { ModeToggle } from "../dark-mode-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBean, faCopyright, faGlobeAmericas, faCalendarDay, faHeart, faBowArrow, faBookOpen } from '@fortawesome/pro-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";

const MenuItem = dynamic(() => import('@/components/ui/footerMenuItem'), { ssr: false });


export default function NavigationBar() {
    const router = useRouter();

    return (
        <footer className="relative w-full overflow-hidden">
            
            <div className="grid gap-4 px-12 pt-2 pb-4 grid-cols-1 lg:grid-cols-4 mt-2 lg:mt-6">
                <div >
                    <div className="flex flex-row">
                        <div className="flex flex-row items-center">
                            <FontAwesomeIcon icon={faCoffeeBean} className="text-2xl lg:text-4xl mr-2" />
                            <h1 className="text-lg lg:text-2xl font-bold">Hot Beans</h1>
                        </div>
                    </div>
                    <Separator className="my-2 bg-[#191919] dark:bg-[#dfe9e9]"/>
                    <div className="text-[#444444] dark:text-[#afafaf]">
                        <p>
                            Where developers can find jobs that grow their careers and talents within the industry.
                        </p>
                        <br/>
                        <p className="">Made with <FontAwesomeIcon icon={faHeart} className="dark:text-red-300 text-red-500"/> by <HoverCard>
                                <HoverCardTrigger className='underline-hover hover:font-black transition-all '>
                                    <a href="https://archery-luna.com"> Archery Luna</a>
                                </HoverCardTrigger>
                                <HoverCardContent className='w-80 ml-4'>
                                    <div className="flex justify-between space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/Employees/CEO.jpeg" />
                                        <AvatarFallback><FontAwesomeIcon icon={faBowArrow} /></AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">Archery Luna
                                            <Separator className='mt-1 dark:bg-[#dfe9e9] bg-[#191919]' decorative={true}/>
                                            <span className='text-muted-foreground'>Sebastian Luna</span>
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                        The Site Developer for Hot Beans. Unit 6 CWC Coursework.
                                        </p>
                                        <div className="flex items-center pt-2">
                                        <FontAwesomeIcon icon={faCalendarDay} className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                                            Started 2/25/2024
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg lg:text-2xl font-bold inline-flex">
                        <FontAwesomeIcon icon={faGlobeAmericas} className="text-2xl lg:text-3xl mr-2"/> Explore</h1>
                    <Separator className="my-2 bg-[#191919] dark:bg-[#dfe9e9]"/>
                    <ul className="mt-2">
                        <MenuItem href="/" text="Home" suppressHydrationWarning={true}/>
                        <MenuItem href="/about" text="About" suppressHydrationWarning={true}/>
                        <MenuItem href="/team" text="Our Team"  suppressHydrationWarning={true}/>
                        <MenuItem href="/careers" text="Careers"  suppressHydrationWarning={true}/>
                        <MenuItem href="/contact" text="Contact"  suppressHydrationWarning={true}/>
                        <MenuItem href="/resources" text="Resources" suppressHydrationWarning={true}/>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg lg:text-2xl font-bold inline-flex">
                        <FontAwesomeIcon icon={faBookOpen} className="text-2xl lg:text-3xl mr-2"/> Resources</h1>
                    <Separator className="my-2 bg-[#191919] dark:bg-[#dfe9e9]"/>
                    <ul className="mt-2">
                        <MenuItem href="https://github.com/ArcheryLuna/unit-6-aim-c.git" text="Frontend Github" suppressHydrationWarning={true}/>
                        <MenuItem href="https://github.com/ArcheryLuna/cwc-unit6-backend.git" text="Backend Github"  suppressHydrationWarning={true}/>
                        <MenuItem href="/resources" text="Resources"  suppressHydrationWarning={true}/>
                    </ul>
                </div>
            </div>

            {/* The Separator between the content and the footer */}

            <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-4/4 blur-sm" />
            <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/4" />
            <div className="hidden lg:absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-2/4 blur-sm" />
            <div className="hidden lg:absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-2/4" />

            <div className="relative bottom-0 text-xs lg:text-base justify-items-center px-12 py-6 bg-white dark:bg-black text-[#191919] dark:text-[#dfe9e9] left-0 right-0 grid grid-cols-1 ">
                <div className="">
                    <p className="text-black dark:text-white font-black"><FontAwesomeIcon icon={faCopyright} /> 2021 - {new Date().getFullYear()} Hot Beans PLC. All rights reserved.</p>
                </div>
                
            </div>
        </footer>
    )
}