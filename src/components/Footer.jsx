import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-7 flex flex-col items-center gap-3 bg-linear-to-b from-(--dark-bg) to-(--dark-blue) text-(--white)">
      <p className="">Building modern web solutions</p>
      <a href="https://github.com/PetarDev05/" target="_blank" className="flex flex-row items-center gap-3">
        <FaGithub className="text-2xl" />
        <p className="">
          Github
        </p>
      </a>
      <p className="">&copy; 2026 Petar. All rights reserved.</p>
    </div>
  );
};

export default Footer;
