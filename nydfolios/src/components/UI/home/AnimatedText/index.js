import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleword = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Index = ({ text, className = '' }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-light font-bold text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              key={word + '-' + index}
              className="inline-block"
              variants={singleword}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default Index;
