"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  
} from "@/utilis/motion";

import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey! I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#dddddd]">
              {" "}
              Nishkarsh{" "}
            </span>
            {/* project exprience */}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Data science, and Software development. Check out my projects and skills.
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
        Hire me!
        </motion.a> */}
        {/* Download CV Button */}
        <motion.a
          variants={slideInFromLeft(1.2)}
          href="/path-to-your-cv.pdf"
          download
          className="py-2 button-primary border border-[#8750f7] bg-[#0300145e] text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-4"
        >
          Download CV
        </motion.a>

        {/* Social Media Section */}
        <div className="flex gap-6 mt-6">
          <motion.a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/yourprofile"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://twitter.com/yourprofile"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            Twitter
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/my photo2.jpg"
          alt="work icons"
          height={450}
          width={450}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;