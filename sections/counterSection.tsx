import React from 'react';
import SectionHeader from '../components/sectionHeader';
import ArticleReasonHeader from '../components/articleReasonHeader';
import Counter from '../components/counter';
import { motion } from 'framer-motion';

const CounterSection = () => {
  return (
    <motion.section className="grid gap-6 lg:grid-cols-2 pb-4" layout>
      <article>
        <SectionHeader text={'Counter animations'} date={'1 marzo 2022'} />

        <ArticleReasonHeader text={'Why I did this'} />
        <p>
          Counters + framer motion is a great way to showcase that you have some
          understanding of useState, timeouts and basic animations.
        </p>
        <ArticleReasonHeader text={'how I did this'} />
      </article>

      <div className="grid gap-4 p-2 max-h-32 bg-gray-500 text-white">
        <Counter />
      </div>
    </motion.section>
  );
};

export default CounterSection;
