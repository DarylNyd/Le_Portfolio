import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Section1 from '@/components/UI/about/Section1';
import Section2b from '@/components/UI/about/Section2b';
import Section3 from '@/components/UI/about/Section3';
import Section4 from '@/components/UI/about/Section4';

import Catman from 'p/images/Catman.png';

const Index = () => {
  return (
    <>
      <Head>
        <title>NYDFOLIO | About</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center pt-16 px-32">
        <Section1 />
        <Section2b />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
};

export default Index;
