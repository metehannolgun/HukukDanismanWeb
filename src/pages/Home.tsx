import React from 'react'
import AboutSection from '../sections/AboutSection'
import ServicesPreview from '../sections/ServicesPreview'
import ContactSection from '../sections/ContactSection'
import { Element } from 'react-scroll'
import { scroller } from 'react-scroll';

const Home = () => {
  return (
   <div>
    <Element name="home">
       <section  className=' bg-red-500 h-screen flex items-center justify-center relative  '>
        HomePage
        
      </section>
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