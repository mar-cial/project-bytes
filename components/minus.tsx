import { motion } from 'framer-motion';
import React from 'react';

const Minus = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/motion.svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </motion.svg>
  );
};

export default Minus;
