import { FC } from 'react';
import Header from './header';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className="p-4 dark:bg-black dark:text-white h-screen">
      <Header />

      {children}
    </div>
  );
};

export default MainLayout;
