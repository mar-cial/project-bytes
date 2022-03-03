import { FC } from 'react';

interface ISectionHeader {
  text: string;
  date: string;
}

const SectionHeader: FC<ISectionHeader> = ({ text, date }) => {
  return (
    <header>
      <h2 className="font-bold text-3xl">{text}</h2>
      <p className="font-semibold text-orange-400 text-sm">{date}</p>
    </header>
  );
};

export default SectionHeader;
