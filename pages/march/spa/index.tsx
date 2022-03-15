import { NextPage } from 'next';
import React from 'react';
import MainHeader from '../../../components/mainHeader';
import PageLayout from '../../../layout/pagelayout';

const Spa: NextPage = () => {
  return (
    <PageLayout>
      <MainHeader title="SPA - Flex Strip" />
      <p>
        I made an SPA using NextJs, TypeScript and TailwindCSS :). Used SendGrid
        API to make a functioning contact form.
      </p>
      <p>
        It's a work in progress, I'm going to add images and resources when
        provided by client.
      </p>
      <section>
        <h3>Repo resources:</h3>
        <ul>
          <li>
            <a
              href="https://github.com/mar-cial/flexstrip"
              className="text-orange-400 transition-all hover:text-orange-500"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://flexstrip.vercel.app"
              className="text-orange-400 transition-all hover:text-orange-500"
            >
              Live website
            </a>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
};

export default Spa;
