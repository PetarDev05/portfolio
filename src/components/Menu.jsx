import useContextHook from "../hooks/useContext.jsx";
import { IoCloseOutline } from "react-icons/io5";

const Menu = () => {
  const { open, toggleMenu } = useContextHook();

  return (
    <div
      className={`fixed  w-full flex flex-col items-center justify-start bg-(--dark-bg) shadow-menu-link pt-15 pb-5 transform tranistion-all duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      } sm:hidden z-30`}
    >
      <a
        href="#about"
        onClick={toggleMenu}
        className="w-full text-md text-center p-3 text-(--white) hover:shadow-menu-link"
      >
        About me
      </a>
      <a
        href="#projects"
        onClick={toggleMenu}
        className="w-full text-md text-center p-3 text-(--white) hover:shadow-menu-link"
      >
        Projects
      </a>
      <a
        href="#pricing"
        onClick={toggleMenu}
        className="w-full text-md text-center p-3 text-(--white) hover:shadow-menu-link"
      >
        Pricing
      </a>
      <a
        href="#contact"
        onClick={toggleMenu}
        className="w-full text-md text-center p-3 text-(--white) hover:shadow-menu-link"
      >
        Contact
      </a>
      <button
        className="p-3 hover:shadow-switch-dark sm:hidden rounded-md cursor-pointer"
        onClick={toggleMenu}
      >
        <IoCloseOutline className="text-2xl text-(--white) z-20 " />
      </button>
    </div>
  );
};

export default Menu;
