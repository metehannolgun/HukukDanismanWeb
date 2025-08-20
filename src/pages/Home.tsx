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
       <section  className=' bg-red-500 h-screen flex items-center justify-center '>
        HomePage
      </section>
    </Element>
    <Element name='about' >
        <section className='bg-blue-500 h-screen flex items-center justify-center'>
        <AboutSection />
        </section>
    </Element>
    <Element name='services'>
      <section className=' bg-orange-500 h-screen flex items-center justify-center'>
          <ServicesPreview />
      </section>
    </Element>
    <Element name='contact'>
      
      <section className='bg-purple-500 h-screen flex items-center justify-center'>
          <ContactSection />
          <button
              onClick={() => scroller.scrollTo('home', { smooth: true, duration: 800, offset: -80 })}
              className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
              En Üste Çık
          </button>
      </section>
    </Element>
   </div>
    
  )
}

export default Home