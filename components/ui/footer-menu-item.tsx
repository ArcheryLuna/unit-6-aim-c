"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function MenuItemComponent({ href, text, uniqueId }: { href: string, text: string, uniqueId: string}) {
  
  const iconVariants = {
    hidden: { opacity: 0}, // Icon is fully transparent and slightly to the left
    visible: { opacity: 1 }, // Icon becomes fully visible and moves to its original position
  };

  return (
    <AnimatePresence>
      <motion.li
        initial={{x: -20}}
        whileHover={{ x: 0 }}
        key={uniqueId}
      >
        <Link href={href} prefetch={true} className="flex items-center text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]" >
          <motion.div 
            className="flex items-center text-[#444444] dark:text-[#afafaf] w-full hover:dark:text-[#dfe9e9] hover:text-[#191919]"
            whileHover="visible"
            initial="hidden"
          >
            <motion.span
              variants={iconVariants}
              className='mr-2'
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </motion.span>
            {text}
          </motion.div>   
        </Link>
      </motion.li>
    </AnimatePresence>
  );
};