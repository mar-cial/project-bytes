import { FC } from 'react';

interface IArticleReasonHeader {
  text: string;
}

const ArticleReasonHeader: FC<IArticleReasonHeader> = ({ text }) => {
  return <h3 className="font-semibold text-gray-400 py-2">{text}</h3>;
};

export default ArticleReasonHeader;
