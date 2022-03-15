import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import MainLink from '../../../components/mainLink';
import PageTitle from '../../../components/pageTitle';
import PageLayout from '../../../layout/pagelayout';
import UserPropTitleText from '../../../components/UserPropTitleText';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();

  return {
    props: { users: data },
  };
};

function Networking({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout>
      <PageTitle title="Networking" />
      <p>
        In this project byte, I used{' '}
        <MainLink
          url="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
          text="getStaticProps"
        />{' '}
        to populate this page at build time.
      </p>
      <p>
        The API is provided by{' '}
        <MainLink
          url="https://jsonplaceholder.typicode.com"
          text="JSONPlaceholder"
        />
        .
      </p>

      <section>
        <h3 className="py-2 text-2xl font-bold">Users</h3>
        <section className="grid gap-4 pb-4 lg:grid-cols-2">
          {users.map((user: User, i) => {
            return (
              <article className="grid p-2 border-2" key={i}>
                <header className="text-lg font-medium border-b-2">
                  {user.name}
                </header>
                <div className="pt-2">
                  <UserPropTitleText text="username" />
                  <p>{`@${user.username}`}</p>
                  <UserPropTitleText text="email" />
                  <p>{user.email}</p>
                  <UserPropTitleText text="phone" />
                  <p>{user.phone}</p>
                  <UserPropTitleText text="company" />
                  <p className="font-semibold">{user.company.name}</p>
                  <p className="text-sm italic text-gray-400">
                    {`"${user.company.catchPhrase}"`}
                  </p>
                  <Link href={`/march/networking/${user.id}`} passHref>
                    <a className="text-orange-400 transition-colors hover:text-orange-600">
                      More details{' '}
                    </a>
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </PageLayout>
  );
}

export default Networking;
