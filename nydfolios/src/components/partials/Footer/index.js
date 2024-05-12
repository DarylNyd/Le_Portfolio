import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

import Logo from 'p/images/Nyd_logo_footer.svg';
import Mail from 'p/images/reseaux/mail.svg';
import Insta from 'p/images/reseaux/insta.svg';
import Github from 'p/images/reseaux/github.svg';
import LinkedIn from 'p/images/reseaux/linkedin.svg';

const Index = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.footer}>
        <div className={style.footer_cont}>
          <div className={style.left_cont}>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className={style.middle_cont}>
            <div className={style.descrip}>
              <p className={style.author}>Daryl Nyd</p>
              <p className={style.text}>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
          </div>
          <div className={style.right_cont}>
            <p className={style.social_title}>SOCIALS NETWORKS</p>
            <div className={style.socials_links}>
              <Image src={Mail} alt="mail" height="50px" width="50px" />
              <Image src={Github} alt="mail" height="30px" width="30px" />
              <Image src={Insta} alt="mail" height="30px" width="30px" />
              <Image src={LinkedIn} alt="mail" height="30px" width="30px" />
            </div>
          </div>
        </div>
        <div className={style.footer_copy}>
          <div className={style.text_copy}>
            <p>© 2021 Nydfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
