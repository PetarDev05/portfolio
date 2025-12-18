import Biography from "../components/Biography.jsx"

const AboutMe = () => {
  return (
    <div id="about" className="w-full flex items-center justify-center p-10 pb-30 bg-(--dark-bg)">
      <div className="flex flex-col items-start justify-center gap-5">
        <h2 className="text-4xl text-(--white)">About me</h2>
        <Biography />
      </div>
    </div>
  )
}

export default AboutMe
