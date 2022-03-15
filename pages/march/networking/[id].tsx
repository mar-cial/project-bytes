import { AnimatePresence } from 'framer-motion';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { FC } from 'react';
import { User } from '.';
import PageLayout from '../../../layout/pagelayout';
import { motion } from 'framer-motion';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const userdata = await res.json();

  const paths = userdata.map((user: User) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  const user = await res.json();

  return { props: { user } };
};

type UserDetailProps = {
  user: User;
};
const Detailtitle = ({ text }) => (
  <h3 className="text-sm font-medium text-gray-500">{text}</h3>
);
const UserDetail: FC<UserDetailProps> = ({ user }) => {
  return (
    <PageLayout>
      <AnimatePresence>
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Detailtitle text={'full name'} />
          <h1 className="text-5xl font-bold">{user.name}</h1>
          <Detailtitle text={'email'} />
          <p>{user.email}</p>

          <Detailtitle text={'username'} />
          <p>{`@${user.username}`}</p>

          <Detailtitle text={'website'} />
          <p>{user.website}</p>

          <Detailtitle text={'phone'} />
          <p>{user.phone}</p>

          <Detailtitle text={'address'} />
          <p>
            {`${user.username} ${user.address.suite}`}
            <br />
            {`${user.address.city} ${user.address.zipcode}`}
          </p>

          <Detailtitle text={'geo location'} />
          <p>{`lat: ${user.address.geo.lat} lng: ${user.address.geo.lng}`}</p>

          <Detailtitle text={'company'} />
          <p>{user.company.name}</p>
          <p>{user.company.bs}</p>
          <p>{user.company.catchPhrase}</p>
        </motion.main>
      </AnimatePresence>
    </PageLayout>
  );
};

export default UserDetail;
