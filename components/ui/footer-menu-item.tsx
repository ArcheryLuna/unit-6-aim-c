
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MenuItemComponent({ href, text, uniqueId }: { href: string, text: string, uniqueId: string}) {
    const iconVariants = {
      hidden: { opacity: 0}, // Icon is fully transparent and slightly to the left
      visible: { opacity: 1 }, // Icon becomes fully visible and moves to its original position
    };

    function Content() {
        return (
            <motion.li
              initial={{x: 0}}
              whileHover={{ x: 20 }}
              key={uniqueId}
            >
              <Link href={href} passHref={true} >
                <motion.a
                  className="flex items-center text-[#444444] dark:text-[#afafaf] hover:dark:text-[#dfe9e9] hover:text-[#191919]"
                  whileHover="visible"
                  initial="hidden"
          
                >
                  {text}
                </motion.a>
              </Link>
              
            </motion.li>
        )
    }
  
    return (
      <Content />
    );
  };