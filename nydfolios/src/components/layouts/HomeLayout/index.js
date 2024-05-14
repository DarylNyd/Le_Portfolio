import React from 'react';

import Navbar from '@/components/partials/Navbar';
import Footer from '@/components/partials/Footer';
import StarCanvas from '@/components/UI/StarBackground';



const Index = ({ children}) => {
  
  return (
    <div className="w-full h-full bg-[#030014]">
      <Navbar />
      <StarCanvas />
     
      {children}
      
      <Footer />
    </div>
  );
};

export default Index;
