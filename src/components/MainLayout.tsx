import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}

export default MainLayout