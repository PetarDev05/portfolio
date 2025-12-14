import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";

const Header = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between p-3 pr-10">
      <button className=" p-2 rounded-full bg-(--black)">
        <FiSun className="text-(--white) text-2xl" />
      </button>
      <div className="flex flex-row items-center gap-10">
        <p className="text-lg">About me</p>
        <p className="text-lg">Projects</p>
        <p className="text-lg">Pricing</p>
        <p className="text-lg">Contact</p>
      </div> 
    </div>
  )
}

export default Header
