'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaShoppingCart, FaChartLine, FaBullhorn } from 'react-icons/fa'

const SecFour = () => {
  const services = [
    {
      icon: <FaHome className="w-12 h-12 md:w-16 md:h-16" />,
      title: "تأجير",
      description: "نقدم أفضل عروض التأجير للعقارات السكنية والتجارية بأسعار منافسة",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaShoppingCart className="w-12 h-12 md:w-16 md:h-16" />,
      title: "شراء",
      description: "نساعدك في شراء العقار المناسب بأفضل الأسعار وشروط ميسرة",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaChartLine className="w-12 h-12 md:w-16 md:h-16" />,
      title: "بيع",
      description: "نقوم بتسويق عقارك بشكل احترافي لتحقيق أعلى عائد",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaBullhorn className="w-12 h-12 md:w-16 md:h-16" />,
      title: "تسويق",
      description: "خطط تسويقية مبتكرة للوصول إلى أكبر شريحة من المشترين",
      color: "from-amber-500 to-amber-600"
    }
  ]

  return (
    <div className='w-full py-20 md:py-28 lg:py-32 bg-black/30'>
        
      <div className='container mx-auto px-4 md:px-8'>
        
        {/* عنوان السكشن */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16'
        >
        
          <p className='text-white/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto'>
            نقدم لكم مجموعة متكاملة من الخدمات العقارية بكل احترافية وثقة
          </p>
        </motion.div>

        {/* بطاقات الخدمات */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-amber-500/50'
            >
              {/* أيقونة الخدمة */}
              <div className='flex justify-center mb-6'>
                <div className='text-amber-500 group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>
              </div>

              {/* عنوان الخدمة */}
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                {service.title}
              </h3>

              {/* وصف الخدمة */}
              <p className='text-white/60 text-sm md:text-base leading-relaxed'>
                {service.description}
              </p>

              {/* خط أسفل البطاقة عند hover */}
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-20 h-0.5 bg-amber-500 transition-all duration-300'></div>
            </motion.div>
          ))}
        </div>

        {/* زر إضافي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-12 md:mt-16'
        >
          <button className='px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300'>
            احصل على استشارة مجانية
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default SecFour