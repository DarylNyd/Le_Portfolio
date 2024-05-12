import React from 'react';

import Navbar from '@/components/partials/Navbar';

const Index = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default Index;
