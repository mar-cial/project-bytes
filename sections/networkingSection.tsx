import React from 'react';
import ArticleReasonHeader from '../components/articleReasonHeader';
import SectionHeader from '../components/sectionHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NetworkingSection = () => {
  return (
    <section>
      <article>
        <SectionHeader text={'Network calls'} date={'March 3, 2022'} />
        <ArticleReasonHeader text="Why I did this" />
        <p>
          {`
          I like how easy it is to make network calls with fetch API, combined with getStaticProps which runs at build time, there is virtually no waiting time to load data from an external API.
          It's getting kinda crowded here, and to properly show all what I intend to show, I'm gonna put it in it's own page. Maybe I should do that for every bigger sizes project byte... we'll see tomorrow.
            `}
        </p>
        <p>
          Here's a{' '}
          <Link href={'/networking'} passHref>
            <a className="text-orange-500">link</a>
          </Link>{' '}
          to the Networking page.
        </p>
      </article>
    </section>
  );
};

export default NetworkingSection;
