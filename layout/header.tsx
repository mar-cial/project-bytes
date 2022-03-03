import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex flex-start">
        <Link href={'/'} passHref>
          <a>
            <h1 className="text-2xl font-bold">Experiments</h1>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
