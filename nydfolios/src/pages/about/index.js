import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { slideInFromTop } from '@/utils/motion';

import Section1 from '@/components/UI/about/Section1';
import Section2b from '@/components/UI/about/Section2b';
import Section3 from '@/components/UI/about/Section3';
import Section4 from '@/components/UI/about/Section4';
import HireMe from '@/components/UI/HireMe';
import Transition from '@/components/UI/TransitionRight';

import Catman from 'p/images/Catman.png';

const Index = () => {
  return (
    <div className="z-50">
      <Head>
        <title>NYDFOLIO | About</title>
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center text-light justify-center pt-20 px-32">
        <Section1 />
        <Section2b />
        <Section3 />
        <Section4 />

        <div className="flex items-center justify-center mt-2 mb-10 z-20">
          <Link
            href="/CV.pdf"
            target={'_blank'}
            className="flex items-center bg-light text-dark mt-8 p-2.5 px-6 rounded-lg font-semibold hover:text-light hover:bg-dark  border-2 border-solid border-transparent hover:border-dark"
            download={true}
          >
            Download My Resume
          </Link>
        </div>

        <motion.div
          className="pt-0 flex justify-end"
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
        >
          <HireMe href="/projects" />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
