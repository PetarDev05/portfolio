

const HeroHeart = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-between">
      <img src="user.png" alt="" className="w-55 rounded-full shadow-md" />     
      <div className="flex flex-col items-center">
        <p className="text-xl md:text-2xl text-(--text)">Hi, I am</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-(--text)">Petar</h2>
        <p className="text-xl md:text-2xl text-(--text)">a web developer</p>
      </div>
    </div>
  )
}

export default HeroHeart
