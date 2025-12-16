

const HeroHeart = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-between p-10 md:px-20 md:py-15 rounded-3xl bg-(--dark-bg) shadow-[0_0_50px_7px_#2229ef]">
      <img src="user.png" alt="" className="w-55 sm:w-65 md:w-75 rounded-full" />     
      <div className="flex flex-col items-start">
        <p className="text-lg md:text-2xl text-(--white)">Hi, I am</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-(--white)">Petar</h2>
        <p className="text-xl md:text-2xl text-(--white)">a web developer</p>
      </div>
    </div>
  )
}

export default HeroHeart
