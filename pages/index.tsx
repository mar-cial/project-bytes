import { NextPage } from 'next';
import React from 'react';
import MainHeader from '../components/mainHeader';
import ProjectCell from '../components/projectCell';
import PageLayout from '../layout/pagelayout';
import bytesData from '../data/bytes';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="text-justify">
        <MainHeader title="Home" />
        <p>
          Welcome to this project called "Project Bytes". The intention of this
          application is to practice daily some common topics related to React,
          TypeScript and NextJs. Projects come to mind in the morning and are
          usually small enough to complete on the same day. I hope you will find
          some of the projects useful. All the code is on my{' '}
          <a
            href="https://github.com/mar-cial"
            className="text-orange-400 duration-300 hover:text-orange-600"
          >
            GitHub
          </a>
          .
        </p>
      </main>

      <section className="grid gap-4">
        {bytesData.map((project, i) => {
          return (
            <ProjectCell
              title={project.title}
              url={project.url}
              date={project.date}
              info={project.info}
              key={i}
            />
          );
        })}
      </section>
    </PageLayout>
  );
};

export default Home;
