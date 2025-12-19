const HeroHeart = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-20 justify-between p-10 sm:p-15 lg:p-20 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[80px] rounded-bl-[80px] sm:rounded-tr-[100px] sm:rounded-bl-[100px]  lg:rounded-tl-[45px] lg:rounded-br-[45px] lg:rounded-tr-[150px] lg:rounded-bl-[150px] bg-(--dark-bg) shadow-inner-sm-hero sm:shadow-inner-md">
      <img
        src="user.png"
        alt=""
        className="w-45 min-[450px]:w-55 lg:w-75 rounded-full"
      />
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-lg lg:text-xl text-(--white)">Hi, I am</p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-(--white) -ml-0.75">
          Petar
        </h2>
        <p className="text-xl lg:text-xl text-(--white)">a web developer</p>
      </div>
    </div>
  );
};

export default HeroHeart;
