import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './navigation';
import Link from 'next/link';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <AnimateSharedLayout>
      <motion.header className="flex justify-between" layout>
        <motion.div className="flex flex-start">
          <Link href={'/'} passHref>
            <motion.a>
              <motion.h1 className="text-2xl font-bold">
                Project Bytes
              </motion.h1>
            </motion.a>
          </Link>
        </motion.div>
        <motion.div>
          <motion.button className="text-lg font-bold" onClick={toggleNav}>
            menu
          </motion.button>
        </motion.div>
      </motion.header>
      {openNav && <Navbar />}
    </AnimateSharedLayout>
  );
};

export default Header;
