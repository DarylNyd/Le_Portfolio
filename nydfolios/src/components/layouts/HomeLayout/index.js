import React from 'react';

import Navbar from '@/components/partials/Navbar';
import Footer from '@/components/partials/Footer';

const Index = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
