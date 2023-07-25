import Footer from "@/components/footer"
import Contact from "@/components/homepage/contact"
import Mdnavbar from "@/components/mdnavbar"
import Navbar from "@/components/navbar"
import Cards from "@/components/portfolio/cards"
import Game1 from "@/components/portfolio/game1"
import Game2 from "@/components/portfolio/game2"
import Game3 from "@/components/portfolio/game3"
import Main from "@/components/portfolio/main"
import Movie from "@/components/portfolio/movie"

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Mdnavbar />
      <Main />
      <Movie />
      <Game1 />
      <Game2 />
      <Game3 />
      <Cards />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio
