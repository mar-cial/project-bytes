import { NextPage } from 'next';
import React from 'react';
import CounterComponent from '../../../components/counter';
import MainHeader from '../../../components/mainHeader';
import PageLayout from '../../../layout/pagelayout';
import { motion } from 'framer-motion';

const MiniBytes: NextPage = () => {
  const container = {
    hidden: {
      opacity: 0,
      y: 5,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      y: 5,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
  };

  const trustedDiv = {
    hidden: {
      height: 0,
      opacity: 0,
      y: 5,
    },
    enter: {
      opacity: 1,
      height: 120,
      y: 0,
      transition: {
        when: 'beforeChildren',
      },
    },
  };

  const trustedDivItems = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    enter: {
      opacity: 1,
      y: [0, -3, 0],
    },
  };
  return (
    <PageLayout>
      <MainHeader title="Mini bytes" />
      <section className="grid gap-4">
        <article className="grid gap-4">
          <header>
            <h2 className="text-xl font-bold">Counter</h2>
            <p>
              Small counter with some simple animations controlled by state.
              Check out the{' '}
              <a href="https://github.com/mar-cial/project-bytes/blob/main/components/counter.tsx">
                source code.
              </a>
            </p>
          </header>

          <CounterComponent />
        </article>
        <article className="grid gap-4">
          <header>
            <h2 className="text-xl font-bold">Appearing animations</h2>
            <p>Some animations to make your website more dynamic.</p>
          </header>

          <motion.div
            variants={container}
            initial="hidden"
            animate="enter"
            className="grid gap-4 p-4 text-white bg-violet-400"
          >
            <motion.h2 variants={items} className={'font-bold text-4xl'}>
              hello
            </motion.h2>
            <motion.h2
              variants={items}
              className={'font-medium text-xl text-yellow-50'}
            >
              We have the solution you are looking for.
            </motion.h2>

            <motion.div
              variants={trustedDiv}
              className={'flex flex-col bg-violet-300'}
            >
              <motion.h3
                variants={trustedDiv}
                className={'font-medium text-xl p-4'}
              >
                Backed by these great companies:
              </motion.h3>

              <motion.div
                variants={trustedDiv}
                className={'flex justify-between px-4'}
              >
                <motion.div variants={trustedDiv}>
                  <motion.h4
                    variants={trustedDivItems}
                    className={'font-medium text-lg'}
                  >
                    Company 1
                  </motion.h4>
                </motion.div>
                <motion.div variants={trustedDivItems}>
                  <motion.h4
                    variants={trustedDivItems}
                    className={'font-medium text-lg'}
                  >
                    Company 2
                  </motion.h4>
                </motion.div>
                <motion.div variants={trustedDivItems}>
                  <motion.h4
                    variants={trustedDivItems}
                    className={'font-medium text-lg'}
                  >
                    Company 3
                  </motion.h4>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </article>
      </section>
    </PageLayout>
  );
};

export default MiniBytes;
