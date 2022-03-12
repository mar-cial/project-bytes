import React, { FC, ReactNode } from 'react';
import Header from './header';

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:col-start-4 md:col-span-6 sm:col-span-4 sm:col-start-2">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
