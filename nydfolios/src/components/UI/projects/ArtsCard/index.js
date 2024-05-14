import Image from "next/image";
import Link from "next/link";
import React from "react";



const Index = ({ src, title, description,href }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] m-3">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1500}
        className="w-full object-contain"
      />
         
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Index;