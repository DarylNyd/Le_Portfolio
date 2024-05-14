import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Nydfolio from 'p/images/Nyd_logo_footer.svg';

const MotionLink = motion(Link);

const Index = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-slate-900 flex items-center justify-center rounded-full"
        whileHover={{
          background: [
            '#121212',
            'rgba(0,18,26,1)',
            'rgba(26,42,97,1)',
            'rgba(0,0,0,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 0.5, repeat: Infinity },
        }}
      >
        <Image src={Nydfolio} alt="Nydfolio" className="w-11 h-11" />
      </MotionLink>
    </div>
  );
};

export default Index;
