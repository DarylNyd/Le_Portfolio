import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { useRouter } from 'next/router';

import Button from '@/components/UI/Button';
import Logo from '@/components/UI/Logo';

import Nydfolio from 'p/images/Nyd_logo.svg';

const Index = () => {
  const router = useRouter();

  const [link, setLink] = useState(null);

  useEffect(() => {
    if (router.asPath == '/home') {
      setLink('/home');
    }
    if (router.asPath == '/projects') {
      setLink('/projects');
    }
    if (router.asPath == '/contact') {
      setLink('/contact');
    }
  }, [router]);

  function handleLaunch() {
    console.log('CV downloaded!');
  }

  function handleOpenHomeWindow() {
    router.push('/home');
  }
  function handleOpenProjectsWindow() {
    router.push('/projects');
  }
  function handleOpenContactWindow() {
    router.push('/contact');
  }

  return (
    <>
      <div className={style.navbar}>
        <div className={style.nav_cont}>
          <div className={style.nav_bar_logo}>
            <Logo
              src={Nydfolio}
              className={style.logo}
              width={50}
              alt="Nydfolio"
            />
          </div>
          <div className={style.nav_bar_link_cont}>
            <ul className={style.nav_bar_ul}>
              <button
                id="home_link"
                className={style.nav_bar_li}
                onClick={() => handleOpenHomeWindow()}
              >
                <div
                  className={`${style.span_link} ${
                    link === '/home' ? style.active : ''
                  }`}
                >
                  <span className="span span_light_small">01</span>
                  <div className={style.link}>
                    <p className="p">Home</p>
                    <p className="p">Home</p>
                  </div>
                </div>
              </button>

              <button
                id="projects_link"
                className={style.nav_bar_li}
                onClick={() => handleOpenProjectsWindow()}
              >
                <div
                  className={`${style.span_link} ${
                    link === '/projects' ? style.active : ''
                  }`}
                >
                  <span className="span span_light_small">02</span>
                  <div className={style.link}>
                    <p className="p">Projects</p>
                    <p className="p">Projects</p>
                  </div>
                </div>
              </button>

              <button
                id="contact_link"
                className={style.nav_bar_li}
                onClick={() => handleOpenContactWindow()}
              >
                <div
                  className={`${style.span_link} ${
                    link === '/contact' ? style.active : ''
                  }`}
                >
                  <span className="span span_light_small">03</span>
                  <div className={style.link}>
                    <p className="p">Contact</p>
                    <p className="p">Contact</p>
                  </div>
                </div>
              </button>
            </ul>
          </div>
          <div className={style.nav_bar_button}>
            <Button
              type="button"
              className="btn_primary"
              title="Download my cv"
              handleClick={handleLaunch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
