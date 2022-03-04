import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import navbarAnimations from '../animations/navbarAnimations';
const Navbar = () => {
  return (
    <motion.nav
      className={'font-mono flex justify-end text-right'}
      layout
      variants={navbarAnimations}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.div className="flex flex-col">
        <Link href={'/navigation'} passHref>
          <motion.a>Extra project bites</motion.a>
        </Link>

        <motion.a href="https://github.com/mar-cial">My GitHub</motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
