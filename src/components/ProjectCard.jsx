import { TbExternalLink } from "react-icons/tb";
const ProjectCard = ({ project }) => {

  return (
    <div className="max-w-95 p-5 bg-(--card-dark) rounded-lg flex flex-col items-start justify-between gap-10 shadow-[0px_0px_10px_1px_var(--white)]">
      <div className="w-50 overflow-hidden h-15 flex items-center justify-center rounded-xl">
        <img src={`${project.img}`} alt="" className="" />
      </div>
      <p className="text-(--text-dark)">{project.description}</p>
      <a href="#" target="_blank" className="px-8 py-2 rounded-lg bg-(--dark-blue) text-white cursor-pointer flex items-center gap-2">
        Visit
        <TbExternalLink />
      </a>
    </div>
  );
};

export default ProjectCard;
