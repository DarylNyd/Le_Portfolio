import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

import Form from '@/components/UI/Contact_Form';
import AnimatedText from '@/components/UI/home/AnimatedText';

import Collab from 'p/images/collab.png';
import Head from 'next/head';

const Index = () => {
  return (
  <>
  <Head>
    <title>NYDFOLIO | Contact</title>
  </Head>
    <div className="w-full min-h-screen px-28 flex flex-row  pt-7 gap-3">
      <div className="text-3xl font-semibold">
        <AnimatedText text="Contact Us and let's work together" className='!text-3xl' />
        <div className="text-2xl">
          <p>
            You can contact us either on:{' '}
          </p>
          <p className="text-blue-400">nyddaryl@gmail.com</p>
        </div>

        <div className="">
          <Image src={Collab} alt="collab" width={700} height={400} />
        </div>
      </div>

      <div className={style.right_cont}>
        <div className={style.form_cont}>
          <div className={style.form}>
            <Form />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Index;
