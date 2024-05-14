import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/partials/Navbar';
import Footer from '@/components/partials/Footer';
import StarsCanvas from '@/components/UI/StarBackground';

const Index = ({ children }) => {
  return (
    <div className="h-full &w-full">
      <Navbar />
      <StarsCanvas />
      <motion.div 
      variants={{
        hidden: { opacity: 0,y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 0.5, delay: 0.5}}
      >
      {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Index;
