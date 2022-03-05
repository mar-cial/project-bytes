import React from 'react';
import SectionHeader from '../components/sectionHeader';
import ArticleReasonHeader from '../components/articleReasonHeader';
import Link from 'next/link';

const CartSection = () => {
  return (
    <section>
      <article>
        <SectionHeader text={'TypeScript Cart'} date={'March 4, 2022'} />
        <ArticleReasonHeader text="Why I did this" />
        <p>
          {`
          This day I'll make a cart with checkout using typescript and some mock products. I think that a good web app that differentiates you from the competition when selling products online is the most important aspect of e-commerce. We all want a web app that makes it easy and fast exactly everything we want to know about a product, as well as a smooth selection and purchase experience.
            `}
        </p>
        <p>
          WITH THAT SAID, I apologize in advance for the damage my spaguetti
          code is about to cause your eyes. It got a little bit out of hand for
          a day, and I got it done, but it is held together with elmer's glue, a
          couple sticks found in my backyard and wonky tailwindcss that won't
          cooperate. I am going to update it and give it a molecule of
          robustness when I can.
        </p>
        <p>
          Again, I think this Project Byte needs it's own page.{' '}
          <Link href={'/cart'} passHref>
            <a className="text-orange-500">Here it is.</a>
          </Link>
        </p>
      </article>
    </section>
  );
};

export default CartSection;
