
const Biography = () => {
  return (
    <div className="md:w-150 flex flex-row items-center gap-10">
      <div className="flex flex-col items-start justify-evenly gap-8">
        <p className="text-(--text-dark) text-lg">
          My name is Petar, a full-stack web developer. I live in Belgrade, Serbia. My primary focus is on building modern, functional, and user-friendly websites. I work with the MERN stack (MongoDB, Express, Node, React) to create clean and efficient solutions tailored to project requirements. I am currently a second-year student at Faculty of Organizational Sciences in Belgrade, studying "Technologies of Electronic Business." I place strong emphasis on the quality of my work and clear communication, ensuring that every project I build is both technically sound and easy to use. I have developed several full-stack applications and websites to hone my skills. If you are interested in collaborating or discussing a project, feel free to get in touch.
        </p>
        <a href="#contact" className="px-8 py-2 rounded-lg bg-(--dark-blue) text-white cursor-pointer">Contact me</a>
      </div>
    </div>
  )
}

export default Biography
