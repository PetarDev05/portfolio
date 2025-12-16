import Header from "../components/Header.jsx"
import HeroHeart from "../components/HeroHeart.jsx"

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-(--white) dark:bg-(--dark-bg)">
      <Header />
      <HeroHeart />
    </div>
  )
}

// bg-linear-to-b from-(--light-blue)/50 to-(--light-red)

export default Hero
