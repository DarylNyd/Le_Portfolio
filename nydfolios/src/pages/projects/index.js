import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Projects3, Projects2, ArtsProjects } from '@/constants';
import { slideInFromBottom, slideInFromLeft } from '@/utils/motion';

import Transition from '@/components/UI/TransitionTop';
import ArtsCard from '@/components/UI/projects/ArtsCard';
import ProjectCard2 from '@/components/UI/projects/ProjectCards2';
import AnimatedText from '@/components/UI/home/AnimatedText';

const Index = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  return (
    <div className="z-[100] relative bg-transparent">
      <div className="flex w-full flex-col items-center justify-center pt-16 px-32">
        <Head>
          <title>NYDFOLIO | Projects</title>
        </Head>
        <Transition />
        <motion.div
          className="h-full"
          initial={{ y: '-200vh' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1 }}
        >
          <div className="h-full relative" ref={ref}>
            <div className="w-screen h-[calc(100vh-5rem)] flex items-center justify-center  text-light text-8xl text-center">
              My Works
            </div>
          </div>
        </motion.div>

        {/*<div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] mb-40'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
          />
        ))}
      </div>*/}
        <div className="flex flex-col gap-20 mb-20">
          <div className="h-screen">
            <AnimatedText
              text="My Projects as a Front-end"
              className="!text-5xl"
            />
            <div className="grid grid-cols-3 mt-10 mb-10">
              {Projects2.map((project2, index) => (
                <ProjectCard2
                  key={index}
                  title={project2.title}
                  description={project2.description}
                  src={project2.src}
                  href={project2.href}
                />
              ))}
            </div>
          </div>

          <div className="h-screen mb-28">
            <AnimatedText
              text="My Projects as a UI/UX Designer"
              className="!text-5xl"
            />
            <div className="grid grid-cols-3 mt-10 mb-10">
              {Projects3.map((project2, index) => (
                <ProjectCard2
                  key={index}
                  title={project2.title}
                  description={project2.description}
                  src={project2.src}
                  href={project2.href}
                />
              ))}
            </div>
          </div>

          <div className="h-screen">
            <AnimatedText
              text="My Projects as an Artist"
              className="!text-5xl"
            />
            <motion.div
              className="grid grid-cols-3 mt-10 mb-10"
              variants={slideInFromBottom}
              initial="hidden"
              animate="visible"
            >
              {ArtsProjects.map((project2, index) => (
                <ArtsCard
                  key={index}
                  title={project2.title}
                  src={project2.src}
                  href={project2.href}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-8xl text-light">Do you have a project?</h1>
          <motion.div
            className="relative"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#fff">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Front-end Artist and UI/UX Designer
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-light text-dark hover:bg-dark hover:text-light rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
