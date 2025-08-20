import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </section>
  )
}

export default MainLayout