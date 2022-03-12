import React, { FC } from 'react';
import Go from '../components/go';

type ProjectCellProps = {
  title: string;
  url: string;
  info: string;
};

const ProjectCell: FC<ProjectCellProps> = ({ title, url, info }) => {
  return (
    <article className="grid gap-2 p-2 border-2 rounded-md">
      <header className="flex justify-between border-b-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <Go url={url} />
      </header>

      <p>{info}</p>
    </article>
  );
};

export default ProjectCell;
