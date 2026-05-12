'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SecThree = () => {
  const scrollToContact = () => {
    window.location.href = '/contact'
  }

  return (
    <div className='w-full h-fit overflow-hidden relative'>
      {/* خلفية متدرجة بين الأسود والذهبي */}
      <div className='absolute inset-0 bg-linear-to-br from-black via-black/40 to-amber-900/60'>
        {/* طبقة إضافية لزيادة السواد */}
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* المحتوى */}
      <div className='relative z-10 w-full h-full min-h-screen flex flex-col items-center justify-center px-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center max-w-4xl mx-auto'
        >
          {/* جملة تحفيزية */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'
          >
            ابدأ رحلتك العقارية مع{' '}
            <span className='text-amber-500'>سديم العقاري</span>
          </motion.h2>

          {/* جملة تحفيزية ثانية */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-white/80 text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed'
          >
            نصنع لك فرصاً استثنائية ونحقق لك أعلى العوائد بأفضل الأسعار،
            <br />
            لأن مستقبلك يبدأ من هنا.
          </motion.p>

          {/* زر التواصل */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className='group relative px-8 py-4 md:px-10 md:py-5 bg-transparent border-2 border-amber-500 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20'
          >
            <span className='relative z-10 text-amber-500 font-bold text-lg md:text-xl group-hover:text-white transition-colors duration-300'>
              تواصل معنا الآن
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default SecThree