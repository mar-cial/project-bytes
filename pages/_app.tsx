import MainLayout from '../layout/mainlayout';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const ProjectBytes = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Project Bytes</title>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default ProjectBytes;
