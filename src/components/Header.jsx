import useContextHook from "../hooks/useContext.jsx";
import { RiMenu4Line } from "react-icons/ri";
import Menu from "./Menu.jsx";

const Header = () => {
  const { toggleMenu } = useContextHook();

  return (
    <div className="fixed top-0 left-0 right-0 w-full flex flex-row items-center justify-end p-5 pr-10 bg-(--dark-bg) z-20">
      <div className="sm:flex flex-row items-center gap-5 hidden  text-(--white)">
        <a
          href="#about"
          className="text-md hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          About me
        </a>
        <a
          href="#projects"
          className="text-md hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          Projects
        </a>
        <a
          href="#pricing"
          className="text-md hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="text-md hover:shadow-switch-dark w-30 py-1.5 rounded-lg text-center"
        >
          Contact
        </a>
      </div>
      <RiMenu4Line
        onClick={toggleMenu}
        className="text-xl block sm:hidden text-(--white) z-20 cursor-pointer"
      />
    </div>
  );
};

export default Header;
