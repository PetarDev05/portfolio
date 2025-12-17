import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const projectsArray = [
    {
      id: "001",
      title: "Organic",
      description:
        "Organic is an e-commerce web application designed for selling organic fruits and vegetables that includes product listings, detailed product pages, and a basic shopping flow.",
    },
    {
      id: "002",
      title: "Foodly",
      description:
        "Foodly is a web application for sharing and discovering recipes. Users can explore recipes and share their own creations. The project focuses on data handling, user interaction, and core application logic.",
    },
    {
      id: "003",
      title: "Calculator",
      description:
        "Calculator is a simple yet fully functional web application for performing basic mathematical operations. This project was built to practice event handling, and managing application state through the user interface.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 bg-(--white) dark:bg-(--dark-bg)">
      <h2 className="text-4xl text-(--text) dark:text-(--white)">
        Here are some of my projects
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 p-5">
        {projectsArray.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
