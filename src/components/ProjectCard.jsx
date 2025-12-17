import { TbExternalLink } from "react-icons/tb";
const ProjectCard = ({ project }) => {

  return (
    <div className="flex-1 p-5 bg-(--card-light) dark:bg-(--card-dark) rounded-lg flex flex-col items-start justify-between gap-5 sa">
      <h3 className="text-2xl text-(--text) dark:text-(--white)">{project.title}</h3>
      <p className="text-(--text-light) dark:text-(--text-dark)">{project.description}</p>
      <button className="px-8 py-2 rounded-lg bg-(--dark-blue) text-white cursor-pointer flex items-center gap-2">
        Visit
        <TbExternalLink />
      </button>
    </div>
  );
};

export default ProjectCard;
