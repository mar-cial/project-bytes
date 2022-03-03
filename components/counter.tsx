import { FC } from 'react';
import { motion } from 'framer-motion';

interface ICounter {
  qty: number;
  animation: boolean;
}

const Counter: FC<ICounter> = ({ qty, animation }) => {
  const variants = {
    start: {
      y: 2,
    },
    stop: {
      y: 0,
    },
  };

  return (
    <motion.p
      className="font-bold text-2xl"
      variants={variants}
      animate={animation ? 'start' : 'stop'}
    >{`Counter: ${qty}`}</motion.p>
  );
};

export default Counter;
