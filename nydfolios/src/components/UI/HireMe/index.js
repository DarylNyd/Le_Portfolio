import React from 'react';
import { CircleText } from '../Icons';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-40 h-auto flex items-center justify-center relative">
        <CircleText className={'fill-light animate-spin-slow'} />

        <Link
          href="/about"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light text-dark shadow-md border border-solid border-light w-20 h-20 rounded-full font-semibold hover:bg-dark hover:text-light"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Index;
