import React from 'react'
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center opacity-90 bg-white p-8 rounded-3xl  '>
        <div className='w-full md:w-1/2 flex justify-center  md:mb-0'>
          <img src='/src/assets/aboutPre.jpg' alt='Hakkımızda' className='rounded-2xl shadow-lg max-h-[500px] max-w-[600px]  ' 
          />
        </div>
        <div className='w-full md:w-1/2 text-center md:text-left justify-between'>
        
            <h1 className='text-2xl md:text-3xl  font-mono mb-2 '>Hakkımızda</h1>
            <span className='text-base md:text-lg font-serif '>
              Yılların verdiği tecrübe ve uzmanlıkla, müvekkillerimizin haklarını en iyi şekilde savunmayı görev edindik. 
          Hukukun her alanında profesyonel çözümler üreterek, güvenilir ve etik değerlerden ödün vermeyen bir anlayışla hizmet veriyoruz.
            </span>
             
          </div>
    </div>
  )
}

export default AboutSection