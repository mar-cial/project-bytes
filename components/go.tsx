import Link from 'next/link';
import React, { FC } from 'react';

type GoProps = {
  url: string;
};
const Go: FC<GoProps> = ({ url }) => {
  return (
    <Link href={url} passHref>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    </Link>
  );
};

export default Go;
