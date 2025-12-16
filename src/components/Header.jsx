import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { RiMenu4Line } from "react-icons/ri";
import useContextHook from "../hooks/useContext.jsx";

const Header = () => {
  const { theme, toggleTheme } = useContextHook();

  return (
    <div className="absolute top-0 left-0 right-0 w-full flex flex-row items-center justify-between p-5 pr-10">
      <button onClick={toggleTheme} className=" p-2 rounded-full bg-(--black) dark:bg-(--white) cursor-pointer">
        {theme === "dark" ? (
          <FiSun className="text-(--black) text-2xl" />
        ) : (
          <GoMoon className="text-(--white) text-2xl" />
        )}
      </button>
      <div className="sm:flex flex-row items-center gap-10 hidden text-(--text) dark:text-(--white)">
        <p className="text-md">About me</p>
        <p className="text-md">Projects</p>
        <p className="text-md">Pricing</p>
        <p className="text-md">Contact</p>
      </div>
      <RiMenu4Line className="text-xl block sm:hidden text-(--text) dark:text-(--white)" />
    </div>
  );
};

export default Header;
