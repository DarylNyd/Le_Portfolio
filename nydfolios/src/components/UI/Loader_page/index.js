import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import style from './index.module.scss';
import { useRouter } from 'next/router';

import Logo from 'p/images/Nyd_logo.svg';
import Right from 'p/images/right-corner.svg';
import Left from 'p/images/left-corner.svg';

const Index = () => {
  const [loaded, hasLoaded] = useState(false);
  const loadingPageRef = useRef(null);
  const loadingLogoRef = useRef(null);
  const logoNameRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    // Animation for the logo
    tl.fromTo(
      [`.${style.logo}`],
      { opacity: 0 },
      { opacity: 1, rotation: 360 }
    );

    tl.fromTo(
      loadingLogoRef.current,
      { opacity: 0 },
      { opacity: 1, y: 0, duration: 1.5 }
    );

    // Animation for the logo name
    tl.fromTo(
      logoNameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 },
      '-=1' // overlap with the logo animation
    );
    // Hide the logo and start animation for loading container
    tl.to(loadingLogoRef.current, { opacity: 0, display: 'none' });

    // Animation for left and right corners
    tl.fromTo(
      [`.${style.left_corner}`, `.${style.right_corner}`],
      { opacity: 0 },
      { opacity: 1, stagger: 0, duration: 1 }
    );

    tl.fromTo(
      [`.${style.left_corner}`],
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.5, duration: 1 }
    );

    tl.fromTo(
      [`.${style.right_corner}`],
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.5, duration: 1 },
      '-=1' // overlap with the left corner animation
    );

    // Delay before increasing the distance
    tl.to({}, { duration: 0.5, delay: 0.5 });

    // Show loading name
    tl.fromTo(
      `.${style.loading_name}`,
      { opacity: 0 },
      { opacity: 1, y: 0, duration: 0.25 },
      '-=0' // overlap with the corners animation
    );

    // Hide loading container and move to the next page
    // tl.to(loadingPageRef.current, { opacity: 0, display: 'none', delay: 0.5 });

    // On animation complete, navigate to the home page
    tl.eventCallback('onComplete', () => {
      // Use localStorage to store a flag indicating that the loader has played
      localStorage.setItem('loaderPlayed', 'true');

      // Navigate to the home page
      router.push('/home');
    });

    // Check if the loader has played
    const loaderPlayed = localStorage.getItem('loaderPlayed');

    // If the loader has played, prevent going back to the loader page
    if (loaderPlayed === 'true') {
      router.replace('/home');
    }
  }, [router]);

  return (
    <div className={style.container}>
      <div className={style.loading_page} ref={loadingPageRef}>
        <div className={style.logo} ref={loadingLogoRef}>
          <Image src={Logo} alt="logo" />

          <div className={style.name_container} ref={logoNameRef}>
            <div className={style.logo_name}>
              <p>Welcome to the Nydfolio</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.loading_container}>
        <div className={style.left_corner}>
          <Image src={Left} alt="left" />
        </div>
        <div className={style.loading_name}>
          <p>Nydfolio</p>
        </div>
        <div className={style.right_corner}>
          <Image src={Right} alt="right" />
        </div>
      </div>
    </div>
  );
};

export default Index;
