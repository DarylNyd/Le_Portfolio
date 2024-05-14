import React from "react";
import {motion} from 'framer-motion';

const Index = () => {
  return (
    <>
    <motion.div 
    className="fixed top-0 left-0 right-0 h-screen w-screen z-30 bg-primary rounded-md"
    initial={{y:"-100%", height:"100%" }} 
    animate={{y:"0%", height:"0%"}} 
    transition={{duration:0.8, ease:"easeInOut"}} 
    />

    <motion.div 
    className="fixed top-0 left-0 right-0 h-screen w-screen z-20 bg-light rounded-md"
    initial={{y:"-100%", height:"100%" }} 
    animate={{y:"0%", height:"0%"}} 
    transition={{delay:0.2, duration:0.8, ease:"easeInOut"}} 
    />

    <motion.div 
    className="fixed top-0 left-0 right-0 h-screen w-screen z-10 bg-primaryDark rounded-md"
    initial={{y:"-100%", height:"100%" }} 
    animate={{y:"0%", height:"0%"}} 
    transition={{delay: 0.4, duration:0.8, ease:"easeInOut"}} 
    />
    </>
  );
}
  export default Index;

