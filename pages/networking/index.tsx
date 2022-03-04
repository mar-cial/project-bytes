import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { FC } from 'react';
import MainLink from '../../components/mainLink';
import PageTitle from '../../components/pageTitle';

type UserPropTitleTextProps = {
  text: string;
};
const UserPropTitleText = (props: UserPropTitleTextProps) => (
  <h3 className="text-gray-500 font-semibold text-md">{props.text}</h3>
);

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
    <main>
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
        <h3>Users</h3>
        <section className="grid lg:grid-cols-4 gap-4">
          {users.map((user, i) => {
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
                  <p className="italic text-sm text-gray-400">
                    {`"${user.company.catchPhrase}"`}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default Networking;
