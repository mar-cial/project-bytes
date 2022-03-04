import React from 'react';
import SectionHeader from '../components/sectionHeader';
import ArticleReasonHeader from '../components/articleReasonHeader';
import Counter from '../components/counter';
import { motion } from 'framer-motion';

const CounterSection = () => {
  return (
    <motion.section className="grid lg:grid-cols-2" layout>
      <article className="grid gap-2">
        <SectionHeader text={'Counter animations'} date={'1 marzo 2022'} />

        <div>
          <ArticleReasonHeader text={'Why I did this'} />
          <p>
            Counters + framer motion is a great way to showcase that you have
            some understanding of useState, timeouts and basic animations.
          </p>
        </div>
      </article>
      <div className="bg-gray-500 p-2">
        <Counter />
      </div>
    </motion.section>
  );
};

export default CounterSection;
