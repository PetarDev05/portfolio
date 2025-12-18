import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { RiMenu4Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full flex flex-row items-center justify-end p-5 pr-10">
      <div className="sm:flex flex-row items-center gap-5 hidden text-(--white)">
        <a
          href="#about"
          className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
        >
          About me
        </a>
        <a
          href="#projects"
          className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
        >
          Projects
        </a>
        <a
          href="#pricing"
          className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
        >
          Contact
        </a>
      </div>
      <RiMenu4Line className="text-xl block sm:hidden text-(--white) z-20" />
    </div>
  );
};

export default Header;
