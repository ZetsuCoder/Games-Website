import Footer from '@/components/footer'
import Contact from '@/components/homepage/contact'
import Mdnavbar from '@/components/mdnavbar'
import Navbar from '@/components/navbar'
import Cards from '@/components/news/cards'
import Main from '@/components/news/main'
import React from 'react'

const news = () => {
  return (
    <div>
      <Navbar />
      <Mdnavbar />
      <Main />
      <Cards />
      <Contact />
      <Footer />
    </div>
  )
}

export default news
