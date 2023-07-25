import Footer from '@/components/footer'
import Cards from '@/components/homepage/cards'
import Contact from '@/components/homepage/contact'
import Devices from '@/components/homepage/devices'
import Main from '@/components/homepage/main'
import Projects from '@/components/homepage/projects'
import Spiderman from '@/components/homepage/spiderman'
import Mdnavbar from '@/components/mdnavbar'
import Navbar from '@/components/navbar'
import React from 'react'

const home = () => {
  return (
    <div>
      <Navbar />
      <Mdnavbar />
      <Main />
      <Cards />
      <Spiderman />
      <Devices />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default home
