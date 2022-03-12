import React from 'react';

type Props = {
  title: string;
};

const PageTitle = (props: Props) => {
  return <h2 className="py-4 text-4xl font-bold">{props.title}</h2>;
};

export default PageTitle;
