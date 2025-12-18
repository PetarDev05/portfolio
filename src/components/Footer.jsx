import { MdOutlineHexagon } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-7 flex flex-col items-center gap-3 bg-linear-to-b from-(--dark-bg) to-(--dark-blue) text-(--white)">
      <p className="">Building modern web solutions</p>
      <p className="flex flex-row items-center gap-3">
        <a href="mailto:pejovicpetar02@gmail.com" className="">
          Email
        </a>
        |
        <a href="https://github.com/PetarDev05/" className="">
          Github
        </a>
      </p>
      <p className="">&copy; 2025 Petar. All rights reserved.</p>
    </div>
  );
};

export default Footer;
