import Head from 'next/head'
import MainLayout from '../layout/mainlayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Head>
        <title>experiments</title>
      </Head>
      <Component {...pageProps} />
    </MainLayout>


  )
}

export default MyApp
