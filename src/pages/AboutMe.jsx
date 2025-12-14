import Biography from "../components/Biography.jsx"

const AboutMe = () => {
  return (
    <div className="w-full flex items-center justify-center py-30 px-30">
      <div className="flex flex-col items-start gap-5">
        <h2 className="text-4xl">About me</h2>
        <Biography />
      </div>
    </div>
  )
}

export default AboutMe
