import { FC } from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen p-2 dark:bg-black dark:text-white md:grid-cols-12 sm:grid-cols-6">
      {children}
    </div>
  );
};

export default MainLayout;
