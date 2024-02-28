"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';

import React from 'react';

import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';

export default function MenuItemComponent({ href, text, suppressHydrationWarning }) {
    const iconVariants = {
      hidden: { opacity: 0}, // Icon is fully transparent and slightly to the left
      visible: { opacity: 1 }, // Icon becomes fully visible and moves to its original position
    };
  
    return (
      <motion.li
        initial={{x: -20}}
        whileHover={{ x: 0 }}
        suppressHydrationWarning={suppressHydrationWarning}
      >
        <motion.a
          href={href}
          className="flex items-center text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]"
          whileHover="visible"
          initial="hidden"
          suppressHydrationWarning={suppressHydrationWarning}
        >
          <motion.span
            variants={iconVariants} // Apply the variants
            className="mr-2"
            suppressHydrationWarning={suppressHydrationWarning}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </motion.span>
          {text}
        </motion.a>
      </motion.li>
    );
  };