import useContextHook from "../hooks/useContext.jsx";
import { RiMenu4Line } from "react-icons/ri";
import { motion } from "motion/react";

const Header = () => {
  const { toggleMenu } = useContextHook();

  return (
    <div className="fixed top-0 left-0 right-0 w-full flex flex-row items-center justify-end p-4 bg-(--dark-bg) z-20">
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, ease: "easeOut"}}
      className="sm:flex flex-row items-center gap-5 hidden  text-(--white)">
        <a
          href="#about"
          className="text-md transition-all duration-200 hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          About me
        </a>
        <a
          href="#projects"
          className="text-md transition-all duration-200 hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          Projects
        </a>
        <a
          href="#pricing"
          className="text-md transition-all duration-200 hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="text-md transition-all duration-200 hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          Contact
        </a>
      </motion.div>
      <button
        className="p-3 hover:shadow-switch-dark sm:hidden rounded-md cursor-pointer"
        onClick={toggleMenu}
      >
        <RiMenu4Line className="text-xl text-(--white) z-20 " />
      </button>
    </div>
  );
};

export default Header;
