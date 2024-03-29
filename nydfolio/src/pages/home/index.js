import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './index.module.scss';

import TextInput from '@/components/UI/Input_Text';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the loader has played
    const loaderPlayed = localStorage.getItem('loaderPlayed');

    // If the loader has played, prevent going back to the loader page
    if (loaderPlayed === 'true') {
      router.replace('/home');
    }
  }, [router]);

  return (
    <div className={style.main_continer}>
      <h1>HOme</h1>
      <TextInput />
    </div>
  );
};

export default Index;
