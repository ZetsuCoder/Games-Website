
import Card from '@/components/aboutpage/card'
import Legends from '@/components/aboutpage/legends'
import Main from '@/components/aboutpage/main'
import Team from '@/components/aboutpage/team'
import Footer from '@/components/footer'
import Contact from '@/components/homepage/contact'
import Mdnavbar from '@/components/mdnavbar'
import Navbar from '@/components/navbar'

import React from 'react'

const about = () => {
  return (
    <div>
      <Navbar />
      <Mdnavbar />
      <Main />
      <Card />
      <Legends />
      <Team />
      <Contact />   
      <Footer />
    </div>
  )
}

export default about
