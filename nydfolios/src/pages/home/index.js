import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Section1 from '@/components/UI/home/Section1';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>NYDFOLIO | Home</title>
      </Head>
      <div className="flex items-center text-dark w-full h-full px-32 pt-0">
        <Section1 />
      </div>
    </>
  );
};

export default Index;
