import Header from "../components/Header.jsx"
import HeroHeart from "../components/HeroHeart.jsx"

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-linear-to-b from-(--dark-blue)/50 to-(--white)">
      <Header />
      <HeroHeart />
    </div>
  )
}

export default Hero
