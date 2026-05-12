import React from 'react'
import Image from "next/image";
import TexOne from './Tex1';
import TexTwo from './Tex2';

const SecOne = () => {
    return (
        <div>
            <div className="fixed inset-0 -z-10 h-full">
                <div className="absolute inset-0 bg-black/90"></div>
                <Image
                    src="/about3.jpg"
                    alt="خلفية الصفحة"
                    fill
                    quality={75}
                    priority
                    className="object-cover opacity-45"
                    sizes="100vw"
                />
            </div>
            <div className=''>
            <TexOne />
            <TexTwo/>

            </div>
        </div>
    )
}

export default SecOne