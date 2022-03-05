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

  const controls = [
    { fn: increase, img: <Plus /> },
    { fn: decrease, img: <Minus /> },
    { fn: reset, img: <Reset /> },
  ];

  return (
    <div className="grid items-center grid-cols-2 gap-2 text-white bg-gray-500">
      <div className="px-2">
        <motion.p
          variants={counterVariants}
          animate={animated ? 'start' : 'stop'}
          className={'text-2xl font-bold bg-gray-400 pl-2'}
        >{`Counter: ${counter}`}</motion.p>
      </div>
      <div className="grid grid-cols-3 gap-2 p-2">
        {controls.map((func, i) => {
          return (
            <motion.button
              onClick={func.fn}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              key={i}
              className={'flex justify-center items-center bg-gray-400 py-1'}
            >
              {func.img}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
