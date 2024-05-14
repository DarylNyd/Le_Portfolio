import React from 'react';

import Navbar from '@/components/partials/Navbar';
import Footer from '@/components/partials/Footer';
import StarsCanvas from '@/components/UI/StarBackground';

const Index = ({ children }) => {
  return (
    <div className="w-full bg-[#030014]">
      <Navbar />
      <StarsCanvas />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
