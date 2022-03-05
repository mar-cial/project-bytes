import React from 'react';
import SectionHeader from '../components/sectionHeader';
import ArticleReasonHeader from '../components/articleReasonHeader';
import Counter from '../components/counter';

const CounterSection = () => {
  return (
    <section className="grid">
      <SectionHeader text={'Counter animations'} date={'March 1, 2022'} />
      <ArticleReasonHeader text={'Why I did this'} />
      <p className={'py-4'}>
        Counters + framer motion is a great way to showcase that you have some
        understanding of useState, timeouts and basic animations.
      </p>

      <Counter />
    </section>
  );
};

export default CounterSection;
