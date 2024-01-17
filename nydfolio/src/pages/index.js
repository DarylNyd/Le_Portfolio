import React from 'react';
import style from './index.module.scss';
import { useRouter } from 'next/router';

import Button from '@/components/UI/Button';
import Title from '@/components/UI/Title';
import Loader from '@/components/UI/Loader_page';

const Index = () => {
  const router = useRouter();

  // navigate to home page
  const navToHome = () => {
    router.push('/home');
    console.log('hellooo');
  };

  return (
    <div className={style.prevention_cont}>
      <div className={style.prevention}>
        <Loader />
        <Button
          type="button"
          className="btn_primary"
          title="START"
          handleClick={() => navToHome()}
        />
      </div>
    </div>
  );
};

export default Index;
