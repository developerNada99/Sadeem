'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TexTwo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const text = "مكتب سديم العقاري يقدم لكم أفضل الخدمات العقارية بكل احترافية وثقة، نساعدكم في تحقيق أحلامكم العقارية بأسعار منافسة وجودة عالية."
  const words = text.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  }

  return (
    <div className='w-full h-lvh flex flex-col items-center justify-center bg-black/30 relative'>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='text-white text-2xl md:text-3xl lg:text-4xl font-light text-center max-w-3xl mx-auto px-6 leading-tight flex flex-wrap justify-center gap-x-2 gap-y-2'
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default TexTwo