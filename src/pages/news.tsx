import Cards from '@/components/news/cards'
import Mdnavbar from '@/components/mdnavbar'
import Navbar from '@/components/navbar'
import Main from '@/components/news/main'
import Contact from '@/components/homepage/contact'
import Footer from '@/components/footer'


const News = () => {
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

export default News
