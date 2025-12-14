

const HeroHeart = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 w-fit flex flex-row items-center gap-20 justify-between">
      <div className="w-85 h-85 rounded-full bg-(--black)"></div>      
      <div className="flex flex-col items-center">
        <p className="text-2xl text-(--text)">Hello, my name is</p>
        <h2 className="text-7xl font-semibold text-(--text)">Petar</h2>
        <p className="text-2xl text-(--text)">I am web developer</p>
      </div>
    </div>
  )
}

export default HeroHeart
