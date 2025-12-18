import Biography from "../components/Biography.jsx"

const AboutMe = () => {
  return (
    <div id="about" className="w-full min-h-screen flex items-center justify-center px-10 bg-(--dark-bg)">
      <div className="flex flex-col items-start justify-center gap-7 sm:gap-10">
        <h2 className="text-4xl sm:text-5xl text-(--white)">About me</h2>
        <Biography />
      </div>
    </div>
  )
}

export default AboutMe
