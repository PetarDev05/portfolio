import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiJsonwebtokens } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiAxios } from "react-icons/si";

const TechStack = () => {
  

  return <div className="w-full h-fit flex flex-col items-center gap-20 px-10 pb-30 pt-20 bg-(--dark-bg)">
    <h2 className="text-4xl text-(--white)">Technologies I use</h2>
    <div className="relative w-60 h-60 min-[500px]:w-75 min-[500px]:h-75 md:w-120 md:h-120 flex items-center justify-center p-20">

      <FaHtml5 className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-0 left-1/2 text-(--html)"/>
      <SiExpress className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-1/12 left-3/4 text-(--ex)"/>
      <FaReact className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-3/4 left-11/12 text-(--react)"/>
      <BiLogoMongodb className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-1/2 left-full text-(--mongo)"/>
      <SiJsonwebtokens className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl  top-1/4 left-11/12 text-(--jwt)"/>
      <RiTailwindCssFill className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl  top-11/12 left-1/4 text-(--tailwind)"/>
      <FaGitAlt className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-full left-1/2 text-(--git) "/>
      <FaNpm className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-11/12 left-3/4 text-(--npm)" />
      <SiJavascript className="text-6xl md:text-9xl text-(--js) shadow"/>
      <SiReactrouter className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-3/4 left-1/12 text-(--router)"/>
      <FaNodeJs className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl  top-1/2 left-0 text-(--node)"/>
      <SiAxios className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-1/12 left-1/4 text-(--axios)"/>
      <SiMongoose className="absolute -translate-1/2 min-[500px]:text-5xl text-4xl md:text-7xl top-1/4 left-1/12 text-(--mongoose)"/>
    </div>
  </div>;
};

export default TechStack;
