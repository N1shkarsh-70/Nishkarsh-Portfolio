"use client"
import React from 'react'
import {motion} from 'framer-motion'
import {slideInFromTop } from '@/utilis/motion'
// import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromTop}
        className=''
        >
            <h1 className='text-[50px] font-large font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#dddddd]'>Skills</h1>
        </motion.div>
        <motion.div></motion.div>
    </div>
  )
}

export default SkillText