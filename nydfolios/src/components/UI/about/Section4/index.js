import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from '@/components/UI/LiIcon';

const Details = ({ type, school, schoolLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}&nbsp;{' '}
          <a
            href={schoolLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{school}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Index = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-10 mb-16 z-20">
      <h2 className="font-bold text-8xl text-light mb-32 w-full text-center">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-9 w-[4px] h-full bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Software Engineer"
            school="Google"
            schoolLink="www.google.com"
            time="2022-2024"
            address="Mointain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />

          <Details
            type="Software Engineer"
            school="Google"
            schoolLink="www.google.com"
            time="2022-2024"
            address="Mointain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />

          <Details
            type="Software Engineer"
            school="Google"
            schoolLink="www.google.com"
            time="2022-2024"
            address="Mointain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />

          <Details
            type="Software Engineer"
            school="Google"
            schoolLink="www.google.com"
            time="2022-2024"
            address="Mointain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />

          <Details
            type="Software Engineer"
            school="Google"
            schoolLink="www.google.com"
            time="2022-2024"
            address="Mointain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Index;
