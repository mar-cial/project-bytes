import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import Plus from '../components/plus';
import Minus from '../components/minus';
import Reset from '../components/reset';
import { counterVariants } from '../animations/counterAnimations';

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const [animated, setAnimated] = useState(false);

  const increase = () => {
    setCounter(counter + 1);
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 100);
  };
  const decrease = () => {
    if (counter === 0) {
    } else {
      setCounter(counter - 1);
      setAnimated(true);
      setTimeout(() => {
        setAnimated(false);
      }, 100);
    }
  };
  const reset = () => {
    setCounter(0);
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 100);
  };

  return (
    <>
      <motion.p
        className="font-bold text-2xl"
        variants={counterVariants}
        animate={animated ? 'start' : 'stop'}
      >{`Counter: ${counter}`}</motion.p>
      <div className="grid grid-cols-3 gap-2 rounded-md bg-gray-400 p-1">
        <motion.button
          className="flex justify-center items-center py-1 bg-gray-600"
          onClick={increase}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <Plus />
        </motion.button>
        <motion.button
          className="flex justify-center items-center py-1 bg-gray-600"
          onClick={decrease}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <Minus />
        </motion.button>
        <motion.button
          className="flex justify-center items-center py-1 bg-gray-600"
          onClick={reset}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <Reset />
        </motion.button>
      </div>
    </>
  );
};

export default Counter;
