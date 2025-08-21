import React from 'react'
import { Link } from 'react-scroll'
 
const Navbar = () => {
  return (
    
    <nav className='flex-col bg-gray-800 p-8  w-full  '>
      <ul className='flex gap-4 justify-end '>
        <li className=' font-bold '>
         <Link to="home" className='text-white cursor-pointer ' smooth={true} duration={700}  >Home</Link>
        </li>
        <li className=' font-bold '>
         <Link to="about" className='text-white cursor-pointer' smooth={true} duration={700}  >About</Link>
        </li>
        <li className=' font-bold '>
         <Link to="contact" className='text-white cursor-pointer' smooth={true} duration={700}  >Contact</Link>
        </li>
        <li className=' font-bold '>
         <Link to="services" className='text-white cursor-pointer' smooth={true} duration={700}  >Services</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar