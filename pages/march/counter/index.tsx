import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import CounterComponent from '../../../components/counter';
import MainHeader from '../../../components/mainHeader';
import PageLayout from '../../../layout/pagelayout';

const Counter: NextPage = () => {
  return (
    <PageLayout>
      <MainHeader title="Counter" />
      <CounterComponent />
      <section className="py-2">
        <p className="py-2">
          Small counter with some simple animations controlled by state. Check
          out the{' '}
          <a href="https://github.com/mar-cial/project-bytes/blob/main/components/counter.tsx">
            source code.
          </a>
        </p>
        <Image
          src={'/carbon.png'}
          width={1000}
          height={2000}
          layout="responsive"
        />
      </section>
    </PageLayout>
  );
};

export default Counter;
