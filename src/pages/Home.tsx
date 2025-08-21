import React from 'react'
import AboutSection from '../sections/AboutSection'
import ServicesPreview from '../sections/ServicesPreview'
import ContactSection from '../sections/ContactSection'
import { Element } from 'react-scroll'
import { scroller } from 'react-scroll';
import { motion } from "motion/react"

const Home = () => {
  return (
   <div>
    <Element name="home">
       <motion.section  className='bg-red-500 h-screen flex flex-col items-center justify-center relative
        ' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}  >
        <span>HomePage</span>
        <div className='flex flex-row items-center gap-2'>
         <button
          onClick={() => scroller.scrollTo('about', { smooth: true, duration: 800, offset: -0 })}
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition" 
          >
          Hakkımızda
          </button>
           <button
          onClick={() => scroller.scrollTo('services', { smooth: true, duration: 800, offset: -0 })} 
           className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          Hakkımızda
          </button>
        </div>
       
      </motion.section>
    </Element>
    <Element name='about' >
        <section className='bg-blue-500 h-screen flex items-center justify-center relative'>
        <AboutSection />
        </section>
    </Element>
    <Element name='services'>
      <section className=' bg-orange-500 h-screen flex items-center justify-center relative'>
          <ServicesPreview />
      </section>
    </Element>
    <Element name='contact'>
      
      <section className='bg-purple-500 h-screen flex items-center justify-center relative'>
          <ContactSection />
            <button
              onClick={() => scroller.scrollTo('home', { smooth: true, duration: 800, offset: -80 })}
              className=" bg-blue-500 text-white px-4 py-2 rounded cursor-pointer rounded-full z-50 absolute bottom-4 right-4 "
                >
              En Üste Çık
          </button>
          
      </section>
    </Element>
   
   
    </div>
   
   
    
  )
}

export default Home