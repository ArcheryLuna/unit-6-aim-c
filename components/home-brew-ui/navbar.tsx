'use client';
import { ModeToggle } from "../dark-mode-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBean } from '@fortawesome/pro-solid-svg-icons';

import { usePathname } from 'next/navigation';
import { useState } from 'react';


export default function NavigationBar() {

    const [active, setActive] = useState(false);

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
                <div className="inline-flex justify-end">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}