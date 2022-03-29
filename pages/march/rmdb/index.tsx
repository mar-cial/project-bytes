import { NextPage } from 'next';
import React from 'react';
import MainHeader from '../../../components/mainHeader';
import MainLink from '../../../components/mainLink';
import PageLayout from '../../../layout/pagelayout';

const RMDB: NextPage = () => {
  const requirements = [
    'Search bar (it might search for episodes and characters).',
    'It might have search filers like described in RMAPI',
    'Recent characters and episodes (main page).',
    'Character profile.',
    'Episode information.',
    'Search results must have pagination.',
    'The application must be mobile-friendly.',
  ];

  return (
    <PageLayout>
      <MainHeader title="RMDB - Rick and Morty DB" />
      <p>
        I made a PWA using the public <a href="">Rick and Morty API</a>.
      </p>
      <p>Here is the live website:</p>
      <MainLink url="https://rmdb-mar-cial.vercel.app" text="Link :)" />
      <p>And here is the code repo:</p>
      <MainLink url="https://github.com/mar-cial/RMDB" text="GitHub" />
      <p>
        This is a test project based on the requirements of an employer, which
        where:
      </p>
      <header><h3 className='text-xl font-semibold'>Requirements</h3></header>
      <ul className="p-4 font-mono bg-gray-200 rounded-md">
        {requirements.map((req) => (
          <li className="ml-4 list-disc">{req}</li>
        ))}
      </ul>

      <section className='grid gap-3'>
        <header><h3 className='text-xl font-semibold'>Technologies used</h3></header>
        <article className='p-4 font-mono bg-gray-200 rounded-md'>
          <ul>
            <li className="ml-4 list-disc">Create React App</li>
            <li className="ml-4 list-disc">Redux Toolkit Query</li>
            <li className="ml-4 list-disc">Styled-components</li>
          </ul>
          
        </article>
        <p>Pretty standard stuff, but I had to learn how to use RTK Query. I think it will definitely be useful for future projects where I'm interacting heavily with REST APIs.</p>
        
      </section>

      <section className='grid gap-3'>
        <header><h3 className='text-xl font-semibold'>Things to do</h3></header>
        <article className='p-4 font-mono bg-gray-200 rounded-md'>
          <ul>
            <li className="ml-4 list-disc">Need to add search bar once it is robust enough</li>
            <li className="ml-4 list-disc">Character pagination must show loading status</li>
            <li className="ml-4 list-disc">Integrate home page of latest characters with RTK Query</li>
          </ul>
          
        </article>
      </section>
    </PageLayout>
  );
};

export default RMDB;
