
const Biography = () => {
  return (
    <div className="md:w-150 flex flex-row items-center gap-10">
      <div className="flex flex-col items-start justify-evenly gap-8">
        <p className="text-(--text-dark)">
          I am Petar, a full-stack web developer focused on building modern, 
          functional, and user-friendly websites. I specialize in MERN stack 
          (MongoDB, Express, Node, React), delivering clean and efficient 
          solutions tailored to each client’s needs.
          I place strong emphasis on quality of my products and clean communication with clients,
           ensuring that every project is 
          both technically sound and easy to use. I have experience working on
           few full-stack applications and websites.
          If you are looking for reliable and scalable website, 
          feel free to get in touch and we can discuss the best solution for your project.
        </p>
        <a href="#contact" className="px-8 py-2 rounded-lg bg-(--dark-blue) text-white cursor-pointer">Contact me</a>
      </div>
    </div>
  )
}

export default Biography
