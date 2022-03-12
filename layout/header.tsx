import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="">
      <Link href={'/'} passHref>
        <a>
          <h2 className="text-2xl font-bold">Project Bytes.</h2>
        </a>
      </Link>
    </header>
  );
};

export default Header;
