import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Dots from './dots';
import UserIcon from './usericon';

const UserCard = ({ user }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <motion.li layout>
      <motion.div
        className="rounded-md bg-gray-400 p-2 flex justify-between "
        layout
      >
        <motion.div className="flex items-center">
          <UserIcon />
          <motion.h2
            layout
            className="font-semibold text-2xl pl-2"
          >{`${user.firstName} ${user.lastName}`}</motion.h2>
        </motion.div>

        <motion.div
          className="flex items-center bg-gray-600 px-2 rounded-md cursor-pointer"
          whileHover={{
            y: -3,
          }}
          whileTap={{
            y: 0,
          }}
          onClick={toggleOpen}
        >
          <motion.span className="font-semibold pr-2">More info</motion.span>
          <Dots />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div layout>
            {user.address.map((info, i) => {
              return (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={'font-medium'}
                >
                  {`Address: ${info.street}. ${info.city}, ${info.state} ${info.zip}`}
                </motion.p>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default UserCard;
