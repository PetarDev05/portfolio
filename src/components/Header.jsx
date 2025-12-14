import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { RiMenu4Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full flex flex-row items-center justify-between p-5 pr-10">
      <button className=" p-2 rounded-full bg-(--black)">
        <FiSun className="text-(--white) text-2xl" />
      </button>
      <div className="sm:flex flex-row items-center gap-10 hidden">
        <p className="text-md">About me</p>
        <p className="text-md">Projects</p>
        <p className="text-md">Pricing</p>
        <p className="text-md">Contact</p>
      </div> 
    <RiMenu4Line className="text-xl block sm:hidden" />
    </div>
  )
}

export default Header
