import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className={'font-mono flex justify-end text-right'}
      layout
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 70, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
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
