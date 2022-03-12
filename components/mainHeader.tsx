import React from 'react';
import PageTitle from './pageTitle';

type Props = {
  title: string;
};

const MainHeader = (props: Props) => {
  return (
    <header>
      <PageTitle title={props.title} />
    </header>
  );
};

export default MainHeader;
