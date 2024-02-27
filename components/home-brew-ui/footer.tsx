'use client';
import { ModeToggle } from "../dark-mode-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBean, faBarsStaggered, faEnvelope, faGlobeAmericas } from '@fortawesome/pro-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { usePathname, useRouter } from 'next/navigation';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";


export default function NavigationBar() {

    const router = useRouter();

    return (
        <footer className="px-12 relative pt-2 pb-4 w-full overflow-hidden">
            
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 mt-2 lg:mt-6">
                <div >
                    <div className="flex flex-row">
                        <div className="flex flex-row items-center">
                            <FontAwesomeIcon icon={faCoffeeBean} className="text-4xl mr-2" />
                            <h1 className="text-2xl font-bold">Hot Beans</h1>
                        </div>
                    </div>
                    <Separator className="my-2 bg-[#191919] dark:bg-[#dfe9e9]"/>
                    <div className="text-[#444444] dark:text-[#afafaf]">
                        <p>
                            Where developers can find jobs that grow their careers and talents within the industry.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold inline-flex">
                        <FontAwesomeIcon icon={faGlobeAmericas} className="text-3xl mr-2"/> Explore</h1>
                    <Separator className="my-2 bg-[#191919] dark:bg-[#dfe9e9]"/>
                    <ul className="mt-2">
                        <li>
                            <a href="/about" className="text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]">About</a>
                        </li>
                        <li>
                            <a href="/team" className="text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]">Our Team</a>
                        </li>
                        <li>
                            <a href="/careers" className="text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]">Careers</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]">Contact</a>
                        </li>
                        <li>
                            <a href="/resources" className="text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]">Resources</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* The Separator between the content and the footer */}

            <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-4/4 blur-sm" />
            <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/4" />
            <div className="hidden lg:absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-2/4 blur-sm" />
            <div className="hidden lg:absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-2/4" />
        </footer>
    )
}