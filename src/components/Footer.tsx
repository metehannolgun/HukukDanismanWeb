import React from 'react'
import { Link } from 'react-scroll'
import { FaEnvelope, FaInstagram } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from 'react-icons/io5';
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4">
      {/*Ana container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto items-center">
         
         {/* Logo ve başlık */}
        <div className="max-w-xs">
          <img src="/logo.png" alt="Logo" className="h-8 mb-2" />
          <h2 className="text-base font-semibold mb-2">Hukuk Danışmanlığı</h2>
          <p className="text-lg opacity-80">
            Hukuk danışmanlığı hizmetlerimizle, hukuki sorunlarınıza profesyonel çözümler sunuyoruz.
            Uzman ekibimizle her adımda yanınızdayız.
          </p>
        </div>
        {/* Yönlendirme linkleri (sayfa içi) */}
        <div className="max-w-xs">
          
          <ul className="space-y-10 flex justify-between" >
            <li className=' font-bold '>
              <Link to="home" className='text-white cursor-pointer ' smooth={true} duration={700}  >Home</Link>
            </li>
            <li className=' font-bold '>
              <Link to="about" className='text-white cursor-pointer' smooth={true} duration={700}  >About</Link>
            </li>
            <li className=' font-bold '>
              <Link to="services" className='text-white cursor-pointer' smooth={true} duration={700}  >Services</Link>
            </li>        
          </ul>
        </div>
        
        {/* 3. row harita ve iletişim bilgileri*/}
        <div className="max-w-xs">
          <h3 className="text-lm font-semibold ">İLETİŞİM & SOSYAL</h3>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6024.12995082824!2d29.026303430615325!3d40.98005803700745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab88a6b1a7fc5%3A0x2a8426d49e0a222a!2zTW9kYSBTYWhpbCBQYXJrxLEgdmUgWcO8csO8ecO8xZ8gWW9sdQ!5e0!3m2!1str!2str!4v1755793015132!5m2!1str!2str"
              width="500"
              height="220"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Firma Konumu">
          </iframe>
          <ul className="text-lg mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-400 w-5 h-5" />
              <span className='text-sm'>Moda Sahil Parkı, Kadıköy, İstanbul</span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                <FaPhone className="w-5 h-5" />
                +90 123 456 7890
              </span>
            </li>
            <li className="flex items-center gap-2">
                    <FaEnvelope className="text-gray-400 w-5 h-5" />
                    <span>info@example.com</span>
                  </li>
          </ul>
          <div className="flex gap-2 mt-3">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-300 transition-colors duration-200'>
              <FaInstagram className='w-6 h-6' />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-300 transition-colors duration-200'>
              <BsTwitterX className='w-6 h-6' />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-300 transition-colors duration-200'>
              <GrLinkedinOption className='w-6 h-6' />
            </a>  
          </div>
        </div>
      </div>
      <div className="col-span-3 border-t border-white/10 mt-4 pt-2 text-center text-xs text-red-200/70">
        © {year}  Tüm hakları saklıdır. Made with <span className="text-red-400">♥</span> metehannolgun
      </div>
    </footer>
  )
}

export default Footer

