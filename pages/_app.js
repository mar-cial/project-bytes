import { AnimateSharedLayout } from 'framer-motion';
import Head from 'next/head';
import MainLayout from '../layout/mainlayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <MainLayout>
        <Head>
          <title>Project Bytes</title>
          <link rel="icon" type="image/x-icon" href="/logo.ico" />
        </Head>

        <Component {...pageProps} />
      </MainLayout>
    </AnimateSharedLayout>
  );
}

export default MyApp;
