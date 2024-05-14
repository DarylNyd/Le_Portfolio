import React from 'react';
import Image from 'next/image';

import AnimatedText from '@/components/UI/home/AnimatedText';
import Catman from 'p/images/Catman.png';

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-14">
      <AnimatedText
        text="Let's know more about NYD"
        className="mb-8 !text-6xl"
      />
      <div className="w-full flex flex-row justify-between gap-16">
        <div className="w-1/3 flex flex-col items-start justify-start z-30">
          <h1 className="!text-3xl font-bold mb-4">About NYDFOLIO</h1>
          <p className="!text-lg">
            NYDFOLIO is a portfolio website that showcases the projects and
            works of NYD. It is built with Next.js, Tailwind CSS, and Framer
            Motion. The website is fully responsive and has a clean and
            minimalistic design.
          </p>

          <p className=" my-4 !text-lg">
            The website is built with a mobile-first approach and is optimized
            for performance. It is a single-page application with smooth
            animations and transitions.
          </p>

          <p className="my-4  text-lg font-medium">
            The website is built with a mobile-first approach and is optimized
            for performance. It is a single-page application with smooth
            animations and transitions.
          </p>
        </div>

        <div className="relative h-max rounded-2xl border-2 border-solid border-dark p-8 pt-0">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
          <Image
            src={Catman}
            alt="my pic"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
