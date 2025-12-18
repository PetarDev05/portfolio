

const HeroHeart = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-20 justify-between p-10 lg:px-20 lg:py-15 rounded-[45px] bg-(--dark-bg) shadow-inner-sm sm:shadow-inner-md">
      <img src="user.png" alt="" className="w-45 min-[450px]:w-55 lg:w-75 rounded-full" />     
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-lg lg:text-2xl text-(--white)">Hi, I am</p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-(--white)">Petar</h2>
        <p className="text-xl lg:text-2xl text-(--white)">a web developer</p>
      </div>
    </div>
  )
}

export default HeroHeart
