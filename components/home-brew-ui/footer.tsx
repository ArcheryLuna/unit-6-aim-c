"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBean, faCopyright, faGlobeAmericas, faCalendarDay, faHeart, faBowArrow, faBookOpen, faEnvelope } from '@fortawesome/pro-solid-svg-icons';

import { faInstagram, faFacebook, faXTwitter, faDiscord, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";
import MenuItem from "@/components/ui/footer-menu-item";

import Link from 'next/link';

export default function NavigationBar() {


    return (
        <>
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
                                            <Link href="https://archery-luna.com"> Archery Luna</Link>
                                        </HoverCardTrigger>
                                        <HoverCardContent className='w-80 ml-4'>
                                            <div className="flex justify-between space-x-4">
                                            <Avatar>
                                                <AvatarImage src="/Employees/CEO.jpeg" />
                                                <AvatarFallback><FontAwesomeIcon icon={faBowArrow} /></AvatarFallback>
                                            </Avatar>
                                            <div className="space-y-1">
                                                <h4 className="text-sm font-semibold">Archery Luna | 🔗 ArcheryLuna.com
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
                                <MenuItem href="/" text="Home" uniqueId="HomeFooter"/>
                                <MenuItem href="/about" text="About" uniqueId="AboutFooter"/>
                                <MenuItem href="/team" text="Our Team"  uniqueId="TeamFooter"/>
                                <MenuItem href="/careers" text="Careers" uniqueId="CareersFooter" />
                                <MenuItem href="/contact" text="Contact" uniqueId="ContactFooter" />
                                <MenuItem href="/resources" text="Resources" uniqueId="ResourcesFooter" />
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-lg lg:text-2xl font-bold inline-flex">
                                <FontAwesomeIcon icon={faBookOpen} className="text-2xl lg:text-3xl mr-2"/> Resources</h1>
                            <Separator className="my-2 bg-[#191919] dark:bg-[#dfe9e9]"/>
                            <ul className="mt-2">
                                <MenuItem href="https://github.com/ArcheryLuna/unit-6-aim-c.git" text="Frontend Github" uniqueId="FrontEndGithubFooter" />
                                <MenuItem href="https://github.com/ArcheryLuna/cwc-unit6-backend.git" text="Backend Github" uniqueId="BackEndGithubFooter"  />
                                <MenuItem href="/resources" text="Resources" uniqueId="ResourcesAgainFooter" />
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-lg lg:text-2xl font-bold inline-flex">
                                <FontAwesomeIcon icon={faEnvelope} className="text-2xl lg:text-3xl mr-2"/> Contact Us</h1>
                            <Separator className="my-2 bg-[#191919] dark:bg-[#dfe9e9]"/>
                            <ul className="mt-2">
                                <MenuItem href="mailto://me@archery-luna.com" text="me@archery-luna.com" uniqueId="EmailFooter" />
                                <MenuItem href="https://maps.app.goo.gl/e2G3PSAUzdwDBGiv8" text="444 De Haro St Suite 200, San Francisco, CA 94107, United States" uniqueId="DiscordHQFooter" />
                                <MenuItem href="tel:07718823427" text="+44 (0)7718 823427" uniqueId="PhoneNumberFooter" />
                            </ul>
                        </div>
                    </div>

                    {/* The Separator between the content and the footer */}

                    <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                    <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                    <div className="hidden lg:absolute  top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
                    <div className="hidden lg:absolute  top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
                    
                    <div className="text-xs relative lg:text-base justify-items-center px-12 py-6 bg-neutral-200 dark:bg-neutral-800 text-[#191919] dark:text-[#dfe9e9]  right-0 grid grid-cols-6 justify-evenly">
                        <Link href="https://instagram.com">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl lg:text-2xl hover:dark:text-purple-300 hover:text-purple-500 transition-all duration-200" />
                        </Link>
                        <Link href="https://facebook.com">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl lg:text-2xl hover:dark:text-blue-300 hover:text-blue-500 transition-all duration-200" />
                        </Link>
                        <Link href="https://twitter.com">
                            <FontAwesomeIcon icon={faXTwitter} className="text-xl lg:text-2xl hover:text-gray-500 transition-all duration-200" />
                        </Link>
                        <Link href="https://linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl lg:text-2xl hover:dark:text-sky-300 hover:text-sky-500 transition-all duration-200" />
                        </Link>
                        <Link href="https://discord.com/5ReTHMSpFk">
                            <FontAwesomeIcon icon={faDiscord} className="text-xl lg:text-2xl hover:text-[#5865F2] transition-all duration-200" />
                        </Link>
                        <Link href="https://github.com/ArcheryLuna">
                            <FontAwesomeIcon icon={faGithub} className="text-xl lg:text-2xl hover:text-gray-500 transition-all duration-200" />
                        </Link>
                        <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                        <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                        <div className="hidden lg:absolute  top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
                        <div className="hidden lg:absolute  top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
                    </div>

                    <div className="relative bottom-0 text-xs lg:text-base justify-items-center px-12 py-6 bg-white dark:bg-black text-[#191919] dark:text-[#dfe9e9]  right-0 grid grid-cols-1 ">
                        <div className="">
                            <p className="text-black dark:text-white font-black"><FontAwesomeIcon icon={faCopyright} /> 2019 - {new Date().getFullYear()} Hot Beans PLC. All rights reserved.</p>
                        </div>
                        
                    </div>
                </footer> 
        
        </>
    )
}