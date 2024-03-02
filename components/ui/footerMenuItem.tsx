

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion';

export default function MenuItemComponent({ href, text }: { href: string, text: string }) {
    const iconVariants = {
      hidden: { opacity: 0}, // Icon is fully transparent and slightly to the left
      visible: { opacity: 1 }, // Icon becomes fully visible and moves to its original position
    };

    function Content() {
        return (
          <AnimatePresence>
            <motion.li
              initial={{x: -20}}
              whileHover={{ x: 0 }}

            >
              <motion.a
                href={href}
                className="flex items-center text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]"
                whileHover="visible"
                initial="hidden"
        
              >
                <motion.span
                  variants={iconVariants} // Apply the variants
                  className="mr-2"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </motion.span>
                {text}
              </motion.a>
            </motion.li>
          </AnimatePresence>
        )
    }
  
    return (
      <Content />
    );
  };