import React from 'react';
import '@/styles/globals.css';
/*import '@/styles/globals.scss';
import '@/styles/variable.scss';*/

import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextUIProvider } from '@nextui-org/react';

import MainLayout from '@/components/layouts/MainLayout';
import HomeLayout from '@/components/layouts/HomeLayout';
import ProjectLayout from '@/components/layouts/ProjectLayout';
import ContactLayout from '@/components/layouts/ContactLayout';
import AboutLayout from '@/components/layouts/AboutLayout';

import Logo from 'p/images/Nyd_logo_icon.svg';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let Layout = MainLayout;
  if (router.asPath.startsWith('/home')) {
    Layout = HomeLayout;
  } else if (router.asPath.startsWith('/projects')) {
    Layout = ProjectLayout;
  } else if (router.asPath.startsWith('/contact')) {
    Layout = ContactLayout;
  } else if (router.asPath.startsWith('/about')) {
    Layout = AboutLayout;
  } else {
    Layout = MainLayout;
  }
  return (
    <NextUIProvider>
      <Head>
        <link rel="shortcut icon" href={Logo.src} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
