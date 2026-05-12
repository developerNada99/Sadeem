'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const TexOne = () => {
  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className='w-full h-lvh flex flex-col items-center justify-center bg-black/30 relative'>
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className='text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wider mb-2'>
             سَــديم
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className='text-4xl md:text-4xl lg:text-5xl font-sans text-white tracking-wide'>
            SADEEM
          </h1>
        </motion.div>
      </div>

      {/* سهم متحرك مع خط عمودي */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2">
          
          
          {/* السهم المتحرك */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <FaChevronDown className="text-white text-2xl md:text-3xl hover:text-white/80 transition-colors" />
          </motion.div>
          
          
        </div>
      </motion.div>
    </div>
  )
}

export default TexOne