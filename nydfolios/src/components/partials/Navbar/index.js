import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Logo from '@/components/UI/Logo';
import {
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
  DribbbleIcon,
  PinterestIcon,
} from '@/components/UI/Icons';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handlelick = () => {
    toggle();
    router.push(href);
  } 

  return (
    <button href={href} className={`${className} relative group`} onClick={handlelick}>
      {title}

      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Index = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const handlelick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="w-screen fixed px-32 py-8 font-medium flex items-center justify-between bg-[#03001417] backdrop-blur-md z-[200]">

      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handlelick}>
        <span className={`w-6 h-[2px] bg-light block transition-all duration-300 ease-out mb-1 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-x-0.5'}`}></span>
        <span className={`w-6 h-[2px] bg-light block transition-all duration-300 ease-out mb-1 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-6 h-[2px] bg-light block transition-all duration-300 ease-out mb-1 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-x-0.5'}`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:flex'>

      <nav>
        <CustomLink href="/home" title="Home" className="mx-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <InstagramIcon className="bg-light rounded" />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <DribbbleIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <PinterestIcon />
        </motion.a>
      </nav>

      </div>
      

    

      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Index;
