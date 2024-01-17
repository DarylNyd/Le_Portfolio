import React from 'react';
import style from './index.module.scss';

import Loader from '@/components/UI/Loader_page';

const Index = () => {
  return (
    <div className={style.prevention_cont}>
      <div className={style.prevention}>
        <Loader />
      </div>
    </div>
  );
};

export default Index;
