import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';

import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import CatMan from 'p/images/Catman.png';

import AnimatedText from '@/components/UI/home/AnimatedText';
import HireMe from '@/components/UI/HireMe';
import { LinkedArrow } from '@/components/UI/Icons';

const Index = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full min-h-screen px-14">
        <motion.div
          className="w-1/2 flex flex-col self-center pt-0"
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <AnimatedText
            text="Wemcome to the Nydside"
            className="!text-6xl !text-left"
          />
          <h1 className="flex flex-row text-4xl font-bold text-left pt-2 text-light">
            I&apos;m &nbsp;
            <span className="text-3xl uppercase text-blue-500 mb-0 pt-1">
              <Typewriter
                options={{
                  strings: [
                    'A Frontend Developer',
                    'An Artist',
                    'A UI/UX Designer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="text-light pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center self-start mt-2">
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
            <HireMe href="/about" />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-1/3 pt-0"
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <Image src={CatMan} alt="Avatar" className="w-full h-auto" />
        </motion.div>
      </div>
    </>
  );
};

export default Index;
