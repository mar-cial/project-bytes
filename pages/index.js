import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import Plus from '../components/plus';
import Minus from '../components/minus';
import Reset from '../components/reset';
import Counter from '../components/counter';
import ArticleReasonHeader from '../components/articleReasonHeader';
import SectionHeader from '../components/sectionHeader';
import { v4 as uuid } from 'uuid';
import UserCard from '../components/userCard';
import PageTitle from '../components/pageTitle';
import Link from 'next/link';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [animated, setAnimated] = useState(false);

  const users = [
    {
      firstName: 'César',
      lastName: 'Marcial',
      address: [
        {
          street: 'Calle 12 Colonia Sinaloa',
          state: 'Baja California',
          city: 'Mexicali',
          zip: 21330,
        },
      ],

      img: '/cesar',
      id: uuid(),
    },
    {
      firstName: 'Alexa',
      lastName: 'Macías',
      address: [
        {
          street: 'Blvd. Lázaro Colonia Verde',
          state: 'Baja California',
          city: 'Mexicali',
          zip: 21330,
        },
      ],
      img: '/alexa',
      id: uuid(),
    },
    {
      firstName: 'Sacbé',
      lastName: 'Medrano',
      address: [
        {
          street: 'Calle 523 Colonia Naranja',
          state: 'Baja California',
          city: 'Mexicali',
          zip: 21330,
        },
      ],

      img: '/sacbé',
      id: uuid(),
    },
  ];

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
    <main>
      <PageTitle title="Home" />

      <section className="grid gap-6 lg:grid-cols-2 pb-4">
        <article>
          <SectionHeader text={'Counter animations'} date={'1 marzo 2022'} />

          <ArticleReasonHeader text={'Why I did this'} />
          <p>
            Counters + framer motion is a great way to showcase that you have
            some understanding of useState, timeouts and basic animations.
          </p>
          <ArticleReasonHeader text={'how I did this'} />
        </article>

        <div className="grid gap-4 p-2 max-h-32 bg-gray-500 text-white">
          <div>
            <Counter qty={counter} animation={animated} />
          </div>

          <div className="grid grid-cols-3 border-2 gap-2 rounded-md p-2">
            <motion.button
              className="border-2 flex justify-center py-1 bg-gray-600"
              onClick={increase}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Plus />
            </motion.button>
            <motion.button
              className="border-2 flex justify-center py-1 bg-gray-600"
              onClick={decrease}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Minus />
            </motion.button>
            <motion.button
              className="border-2 flex justify-center py-1 bg-gray-600"
              onClick={reset}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Reset />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="lg:grid-cols-2 grid gap-6 pb-4">
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
      </section>

      <article>
        <SectionHeader text={'Network calls'} date={'3 marzo 2022'} />
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
    </main>
  );
};

export default Home;
