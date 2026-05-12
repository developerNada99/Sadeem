'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const SecTwo = () => {
    return (
        <div className='w-full min-h-screen bg-black/30 overflow-hidden'>
            <div className='container mx-auto px-4 md:px-8 py-16 md:py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
                    
                    {/* الجزء الأيمن - الصورة مع حركة */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='relative w-full h-64 md:h-96 lg:h-125 rounded-2xl overflow-hidden shadow-2xl'
                    >
                        <Image
                            src="/about2.jpg"
                            alt="مكتب سديم العقاري"
                            fill
                            className='object-cover'
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="eager"                           
                        />
                    </motion.div>

                    {/* الجزء الأيسر - نص من نحن مع حركة */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='text-right'
                    >
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='text-white/80 text-lg md:text-xl max-md:text-center lg:text-2xl leading-relaxed'
                        >
                            مكتب <span className='text-amber-500 font-semibold'>سَــديم العقاري</span> هو وجهتكم الموثوقة في عالم العقارات، 
                            نقدم لكم حلولاً عقارية متكاملة تجمع بين الخبرة والشفافية والاحترافية. 
                            فريقنا من الخبراء يعمل على مدار الساعة لمساعدتكم في تحقيق أحلامكم 
                            العقارية، سواء كنتم تبحثون عن منزل الأحلام أو فرصة استثمارية واعدة. 
                            نفتخر بثقة عملائنا التي نعتبرها أساس نجاحنا، ونلتزم بتقديم أفضل الخدمات 
                            بأعلى معايير الجودة.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SecTwo