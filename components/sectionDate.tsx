import { FC } from 'react';

interface ISectionDate {
  text: string;
}

const SectionDate: FC<ISectionDate> = ({ text }) => {
  return <p className="font-semibold text-orange-400 text-sm">{text}</p>;
};

export default SectionDate;
