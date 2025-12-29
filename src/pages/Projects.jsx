import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from "motion/react";

const Projects = () => {
  const projectsArray = [
    {
      id: "001",
      title: "Organic",
      img: "organic.png",
      description:
        "Organic is an e-commerce web application designed for selling organic fruits and vegetables that includes product listings, detailed product pages, and a basic shopping flow.",
      url: "https://organic-1-ow7z.onrender.com",
    },
    {
      id: "002",
      title: "Habit Master Landing page",
      img: "habit-master.png",
      description:
        "This project is a landing page for a habit-tracking application designed to help users build and maintain healthy routines. The page introduces the core concept, key features, and benefits of the app, with a focus on clear messaging, user engagement, and conversion-oriented design.",
      url: "https://habit-master-landing.onrender.com/",
    },
    {
      id: "003",
      title: "Digit",
      img: "digit.png",
      description:
        "Digit is a simple calculator yet fully functional web application for performing basic mathematical operations. This project was built to practice event handling, and managing application state through the user interface.",
      url: "https://petardev05.github.io/Calculator-vite/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  return (
    <div
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-15 p-5 bg-(--dark-bg) max-[500px]:pt-20 overflow-x-hidden"
    >
      <h2 className="text-4xl sm:text-5xl text-(--white) text-center">
        Here are some of my projects
      </h2>
      <motion.div
        variants={container}
        viewport={{ once: true, amount: 0.3 }}
        initial="hidden"
        whileInView="visible"
        className="w-fit grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {projectsArray.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
