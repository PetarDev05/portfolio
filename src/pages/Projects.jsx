import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const projectsArray = [
    {
      id: "001",
      title: "Organic",
      img: "organic.png",
      description:
        "Organic is an e-commerce web application designed for selling organic fruits and vegetables that includes product listings, detailed product pages, and a basic shopping flow.",
    },
    {
      id: "002",
      title: "Foodly",
      img: "foodly.png",
      description:
        "Foodly is a web application for sharing and discovering recipes. Users can explore recipes and share their own creations. The project focuses on data handling, user interaction, and core application logic.",
    },
    {
      id: "003",
      title: "Digit",
      img: "digit.png",
      description:
        "Digit is a simple calculator yet fully functional web application for performing basic mathematical operations. This project was built to practice event handling, and managing application state through the user interface.",
    },
  ];

  return (
    <div id="projects" className="w-full min-h-screen flex flex-col items-center justify-center gap-15 p-5 bg-(--dark-bg) max-[500px]:pt-20">
      <h2 className="text-4xl sm:text-5xl text-(--white) text-center">
        Here are some of my projects
      </h2>
      <div className="w-fit grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projectsArray.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
