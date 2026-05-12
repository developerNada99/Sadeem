import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaSnapchat, FaTiktok } from 'react-icons/fa'

const Navbar = () => {
  // أحجام الأيقونات حسب الشاشة
  const iconSizes = {
    mobile: 20,    // للشاشات الصغيرة
    tablet: 22,    // للتابلت
    desktop: 24,   // للديسكتوب
    large: 26      // للشاشات الكبيرة
  }

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 z-50 right-3 sm:right-4 md:right-5 lg:right-6 xl:right-8 2xl:right-10">
      <div className=" p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4">
        
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaInstagram size={iconSizes.mobile} 
              className="sm:w-5.5 sm:h-5.5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6.5 xl:h-6.5" />
          </a>
          
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaFacebook size={iconSizes.mobile} 
              className="sm:w-5.5 sm:h-5.5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6.5 xl:h-6.5" />
          </a>
          
          <a 
            href="https://snapchat.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaSnapchat size={iconSizes.mobile} 
              className="sm:w-5.5 sm:h-5.5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6.5 xl:h-6.5" />
          </a>
          
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaTiktok size={iconSizes.mobile} 
              className="sm:w-5.5 sm:h-5.5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6.5 xl:h-6.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar