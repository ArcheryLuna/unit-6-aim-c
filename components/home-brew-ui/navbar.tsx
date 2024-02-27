'use client';
import { ModeToggle } from "../dark-mode-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBean, faBarsStaggered, faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { usePathname } from 'next/navigation';
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

    const pathname = usePathname();
    var navItems = [
        {
            name: 'About',
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

    return (
        <nav className="px-12 pt-2 pb-4 w-full overflow-hidden">
            <div className="grid mt-3 grid-cols-2 lg:grid-cols-3">
                <div className="inline-flex mt-1">
                    <a href='/' className=" inline-flex font-bold" > <FontAwesomeIcon icon={faCoffeeBean} className="mr-2 text-2xl"/> Hot Beans</a>
                </div>
                <div className="hidden text-center mt-1 lg:visible lg:flex justify-evenly">
                    {
                        navItems.map((item, index) => (
                            <a key={index} href={item.href} className={
                                (item.isActive() ? 'font-bold' : '') + ' px-3 py-2 mx-2 hover:font-bold hover:dark:bg-[#dfe9e9] hover:bg-[#191919] hover:text-[#dfe9e9] rounded-full hover:dark:text-[#191919] transition-all duration-200 ease-in-out' 
                            }>{item.name}</a>
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
                                <>
                                    <li className="px-3 py-2 mx-2 hover:font-bold hover:dark:bg-[#dfe9e9] hover:bg-[#191919] hover:text-[#dfe9e9] rounded-full hover:dark:text-[#191919] transition-all duration-200 ease-in-out">
                                        <a key={index*2} href={item.href} className={
                                            (item.isActive() ? 'font-bold' : '') + '' 
                                        }>{item.name}</a>
                                    </li>
                                    <Separator className="dark:bg-[#dfe9e9] bg-[#191919] my-2"/>  
                                </>
                            ))} 
                            <li className="px-3 mx-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <Button className="rounded-full text-[#dfe9e9] font-bold dark:text-[#191919]"><FontAwesomeIcon icon={faGithub} className="mr-2" /> Github Repo</Button>
                                    <Button variant={"outline"} className="rounded-full border-[#dfe9e9]"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email us</Button>
                                </div>
                            </li>   
                        </ul>
                        
                        <SheetFooter className="absolute bottom-5 right-5">
                            <ModeToggle />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                </div>
                <div className="hidden lg:inline-flex justify-end">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}