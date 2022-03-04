import React from 'react';

type Props = {
  title: string;
};

const PageTitle = (props: Props) => {
  return <h2 className="text-5xl font-bold py-4">{props.title}</h2>;
};

export default PageTitle;
