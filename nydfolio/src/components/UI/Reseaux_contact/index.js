import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

import Insta from 'p/images/reseaux/insta.svg';
import Github from 'p/images/reseaux/github.svg';
import LinkedIn from 'p/images/reseaux/linkedin.svg';

const Index = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.reseaux_icons}>
        <div className={style.reseaux_info}>
          <div className={style.icon}>
            <a href="https://www.github.com/DarylNyd" target="_blank">
              <Image
                src={Github}
                id="svg"
                alt="instagram"
                width={40}
                height={60}
              />
            </a>
          </div>
          <div className={style.info}>
            <div className={style.name}> GITHUB</div>
            <div className={style.username}>@DarylNyd</div>
          </div>
        </div>
        <div className={style.reseaux_info}>
          <div className={style.icon}>
            <a href="https://www.instagram.com/nyd_drawings/" target="_blank">
              <Image
                src={Insta}
                id="svg"
                alt="instagram"
                width={40}
                height={60}
              />
            </a>
          </div>
          <div className={style.info}>
            <div className={style.name}> INSTAGRAM</div>
            <div className={style.username}>@nyd_drawings</div>
          </div>
        </div>
        <div className={style.reseaux_info}>
          <div className={style.icon}>
            <a
              href="https://www.linkedin.com/in/yvan-daryl-ndenga-nemeck/"
              target="_blank"
            >
              <Image
                src={LinkedIn}
                id="svg"
                alt="instagram"
                width={40}
                height={60}
              />
            </a>
          </div>
          <div className={style.info}>
            <div className={style.name}> LINKEDIN</div>
            <div className={style.username}>@Daryl Nemeck</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
