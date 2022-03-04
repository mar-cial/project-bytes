import Link from 'next/link';
import React, { FC } from 'react';
import PageTitle from '../../components/pageTitle';
import { motion } from 'framer-motion';
import extraProjectBytes from '../../data/extraProjectBytes';

const ExtraProjectBytes: FC = () => {
  return (
    <motion.main layout>
      <PageTitle title="Extra Project bytes" />
      <nav>
        <ul className="grid gap-4 pt-6">
          {extraProjectBytes.map((v, i) => {
            return (
              <Link href={v.url} key={i}>
                <motion.div
                  className="border-2 text-center cursor-pointer py-2"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                >
                  <li className="font-bold text-4xl">{v.projectName}</li>
                  <p className="font-medium text-md text-orange-500">
                    {v.date}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </ul>
      </nav>
    </motion.main>
  );
};

export default ExtraProjectBytes;