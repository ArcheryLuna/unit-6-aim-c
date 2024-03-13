'use client';
import { ModeToggle } from "../dark-mode-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBean } from '@fortawesome/pro-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/pro-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import Link from 'next/link';

import { useEffect } from 'react';

export default function NavigationBar() {

    const pathname = usePathname();

    var navItems = [
        {
            name: "Home",
            href: "/",
            isActive: () => {
                return pathname === '/'
            }
        },
        {
            name: 'About Us',
            href: '/about',
            isActive: () => {
                return pathname === '/about'
            }
        }, {
            name: 'Our Team',
            href: '/team',
            isActive: () => {
                return pathname === '/team'
            }
        }, {
            name: 'Careers',
            href: '/careers',
            isActive: () => {
                return pathname === '/careers'
            }
        }, {
            name: 'Contact',
            href: '/contact',
            isActive: () => {
                return pathname === '/contact'
            }
        }, {
            name: 'Resources',
            href: '/resources',
            isActive: () => {
                return pathname === '/resources'
            }
        }
    ]

    const LargeDisplayNavbarItems = ({key, item }: 
        {key: number, item: { name: string; href: string; isActive: () => boolean; }}) => {
        return (
            <Link key={key} prefetch={true} href={item.href} className={
                (item.isActive() ? 'font-black' : '') + ' px-3 py-2 mx-2 hover:font-black hover:dark:bg-[#dfe9e9] hover:bg-[#191919] hover:text-[#dfe9e9] rounded-full hover:dark:text-[#191919] transition-all duration-200 ease-in-out' 
            }>
                {item.name}
            </Link>
        )
    }

    const MobileNavbarItems = ({key, item }: 
        { key: number, item: { name: string; href: string; isActive: () => boolean; }}) => {
        return (
            <li key={key*2} className="px-3 py-2 my-2 mx-2 hover:font-black hover:dark:bg-[#dfe9e9] hover:bg-[#191919] hover:text-[#dfe9e9] rounded-full hover:dark:text-[#191919] transition-all duration-200 ease-in-out">
                <Link href={item.href} className={
                    (item.isActive() ? 'font-bold' : '') + '' 
                }>{item.name}</Link>
            </li>
        )
    }

    return (
        <nav className="px-12 relative pt-2 pb-4 w-full overflow-hidden">
            <div className="grid mt-3 grid-cols-2 lg:grid-cols-6">
                <div className="inline-flex mt-3">
                    <Link href='/' className=" inline-flex font-black" > <FontAwesomeIcon icon={faCoffeeBean} className="mr-2 text-2xl"/> Hot Beans</Link>
                </div>
                <div className="hidden text-center mt-1 col-span-4 lg:visible lg:flex justify-evenly">
                    {
                        navItems.map((item, index) => (
                            <LargeDisplayNavbarItems key={index} item={item} />
                        ))
                    }
                </div>
                <div className="lg:hidden inline-flex justify-end">
                <Sheet>
                    <SheetTrigger><FontAwesomeIcon icon={faBarsStaggered} className="text-2xl" /></SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                            <SheetTitle><a href="/">
                                <FontAwesomeIcon icon={faCoffeeBean} /> Hot Beans
                            </a></SheetTitle>
                        </SheetHeader>
                        <Separator className="dark:bg-[#dfe9e9] bg-[#191919] my-2"/>
                        <ul className="mt-2">
                            {navItems.map((item, index) => (
                                <MobileNavbarItems key={index} item={item} />
                            ))}  
                            
                        </ul>
                        <Separator className="dark:bg-[#dfe9e9] bg[#191919] mb-2"/>

                        <div className="grid grid-cols-2 gap-2">
                            <Link href="https://github.com/ArcheryLuna/unit-6-aim-c.git">
                                <Button className="rounded-full w-full text-[#dfe9e9] font-bold dark:text-[#191919]"><FontAwesomeIcon icon={faGithub} className="mr-2"/> Frontend</Button>
                            </Link>
                            <Link href="https://github.com/ArcheryLuna/cwc-unit6-backend.git">
                                <Button variant={"outline"} className="rounded-full w-full border-[#191919] dark:border-[#dfe9e9]"><FontAwesomeIcon icon={faGithub} className="mr-2" /> Backend</Button>
                            </Link>
                        </div>
                        
                        <SheetFooter className="absolute bottom-5 right-5">
                            <ModeToggle />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                </div>
                <div className="hidden lg:inline-flex justify-end">
                    <div className="mt-1">
                        <ModeToggle />
                    </div>
                </div>
            </div>
            <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />

        </nav>
    )
}
