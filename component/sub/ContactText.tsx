'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


const ContactText= () => {
  return (
        <div className="container">
            <div className="flex flex-col items-center justify-center text-white">
              <motion.h1
                className="text-[40px] md;text-[82px]  lg:text-[110px] xl:text-[128px] font-bold text-[#8750f7]"
                initial={{ y: 0 }}
                whileHover={{
                  y: [0, -5, 5, -3, 3, 0], // Wave effect
                  rotate: [0, 1, -1, 1, -1, 0],
                  transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
                }}
              >
              Let’s have a chat
              </motion.h1>  
              
            </div>
        </div>
  );
}
export default ContactText;
