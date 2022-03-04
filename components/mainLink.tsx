import React from 'react';

type Props = {
  text: string;
  url: string;
};

const MainLink = (props: Props) => {
  return (
    <a href={props.url} className="text-orange-500">
      {props.text}
    </a>
  );
};

export default MainLink;
