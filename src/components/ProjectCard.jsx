import { TbExternalLink } from "react-icons/tb";
import { motion } from "motion/react";

const ProjectCard = ({ project }) => {
  const item = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={item}
      className="max-w-95 p-5 bg-(--card-dark) rounded-lg flex flex-col items-start justify-between gap-10 shadow-[0px_0px_10px_1px_var(--blue)]"
    >
      <div className="w-50 overflow-hidden h-15 flex items-center justify-center rounded-xl">
        <img src={`${project.img}`} alt="" className="" />
      </div>
      <p className="text-(--text-dark)">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        className="px-8 py-2 rounded-lg bg-(--dark-blue) text-white cursor-pointer flex items-center gap-2"
      >
        Visit
        <TbExternalLink />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
