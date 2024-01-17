import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from 'react-icons';

import Form from '@/components/UI/Contact_Form';
import Reseaux from '@/components/UI/Reseaux_contact';

import Collab from 'p/images/collab.png';

const Index = () => {
  return (
    <div className={style.main_cont}>
      <div className={style.left_cont}>
        <div className={style.caption}>
          <p>Let&apos;s Work together.</p>
        </div>
        <div className={style.cap_text}>
          <p>
            You can contact us either on:{' '}
            <span className={style.mail}>nyddaryl@gmail.com</span>
          </p>
        </div>
        <div className={style.pics}>
          <Image src={Collab} alt="collab" width={700} height={400} />
        </div>
        <div className={style.reseaux}>
          <div className={style.reseaux_text}>
            <p>Or on our social networks:</p>
          </div>
          <Reseaux />
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
  );
};

export default Index;
