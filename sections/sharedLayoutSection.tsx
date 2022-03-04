import React from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import ArticleReasonHeader from '../components/articleReasonHeader';
import SectionHeader from '../components/sectionHeader';
import users from '../data/users';
import UserCard from '../components/userCard';

const SharedLayoutSection = () => {
  return (
    <motion.section className="lg:grid-cols-2 grid gap-6 pb-4" layout>
      <article>
        <SectionHeader
          text={'Shared layout animations'}
          date={'2 marzo 2022'}
        />
        <ArticleReasonHeader text="Why I did this" />
        <p>
          {`Sometimes you don't want to reveal the whole info of an object from
            the start to avoid clutter. Animations that reveal more information
            when clicked make a website feel more interactive, and it's very
            important to make sure that the elements are rendering correctly. To
            do this, every element needs to know which other elements are going
            to dissappear from the render tree. This is achieved with a combination of <AnimateSharedLayout /> and <AnimatePresence />
            `}
        </p>
      </article>

      <AnimateSharedLayout>
        <motion.aside className="bg-gray-500 p-2 text-white" layout>
          <motion.ul layout className="grid gap-4">
            {users.map((user, i) => (
              <UserCard user={user} key={i} />
            ))}
          </motion.ul>
        </motion.aside>
      </AnimateSharedLayout>
    </motion.section>
  );
};

export default SharedLayoutSection;
