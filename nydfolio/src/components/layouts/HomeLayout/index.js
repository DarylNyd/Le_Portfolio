import React from 'react';
import style from './index.module.scss';

import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';

const Index = ({ children }) => {
  return (
    <div className={style.global_cont}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
