import '@/styles/globals.css';
/*import '@/styles/globals.scss';
import '@/styles/variable.scss';*/

import Head from 'next/head';

import Navbar from '@/components/partials/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'bg-light w-full min-h-screen'}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
