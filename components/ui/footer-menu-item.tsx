"use client";


import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MenuItemComponent({ href, text, uniqueId }: { href: string, text: string, uniqueId: string}) {


    function Content() {
        return (
          <AnimatePresence>
            <motion.li
              initial={{x: 0}}
              whileHover={{ x: 20 }}
              key={uniqueId}
            >
              <Link href={href} className="flex items-center text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]" >
                  {text}
              </Link>
            </motion.li>
          </AnimatePresence>
        )
    }
  
    return (
      <Content />
    );
  };