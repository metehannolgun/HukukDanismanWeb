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
       <motion.section  className="bg-[url('/src/assets/banner.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center relative " 
          initial={{ opacity: 0.5}} animate={{ opacity: 1 }} transition={{ duration: 2 }}  >
        <div className='text-center'>
          <motion.h1
           initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className='text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl '>
            Adalet İçin Yanınızdayız
          </motion.h1>
          <motion.p
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 ">
           Deneyimli ve uzman avukat kadromuzla, her adımda haklarınızı koruyor; hukuki süreçlerinizde güvenilir, şeffaf ve çözüm odaklı yaklaşımımızla yanınızda oluyor ,<br/> en doğru sonuca ulaşmanız için titizlikle çalışıyoruz.
          </motion.p>
        </div>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
           <motion.button 
           
          onClick={() => scroller.scrollTo('about', { smooth: true, duration: 800, offset: -0 })}
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition mt-10 cursor-pointer" 
          >
          Hakkımızda 
          </motion.button>
           <button
          onClick={() => scroller.scrollTo('services', { smooth: true, duration: 800, offset: -0 })} 
           className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition mt-10 cursor-pointer">
          Hizmetlerimiz
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