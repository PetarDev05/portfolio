import { motion } from "motion/react";

import {
  JavaScript,
  NodeJs,
  ExpressJsLight,
  React,
  MongoDB,
  TailwindCSS,
  Git,
  HTML5,
  ViteJS,
} from "developer-icons";

const TechStack = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-30 pt-30 bg-(--dark-bg)">
      <h2 className="text-4xl sm:text-5xl text-(--white) px-5 text-center">
        Technologies I use
      </h2>
      <motion.div
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-60 h-60 min-[500px]:w-75 min-[500px]:h-75 sm:w-85 sm:h-85 md:w-120 md:h-120 flex items-center justify-center p-20 "
      >
        <HTML5 className="absolute w-14 sm:w-16 md:w-20 transition-all duration-200
             drop-shadow-[0_0_25px_var(--html)] lg:w-25 -translate-1/2 top-0 left-1/2 " />
        <ExpressJsLight className="absolute w-14 sm:w-16 md:w-20 transition-all duration-200
             drop-shadow-[0_0_25px_var(--express)] lg:w-25 -translate-1/2 top-1/8 left-7/8 " />
        <React
          className="absolute w-14 sm:w-16 md:w-20 lg:w-25 -translate-1/2 top-7/8 left-7/8 transition-all duration-200
             drop-shadow-[0_0_25px_var(--react)]"
        />
        <MongoDB className="absolute w-14 sm:w-16 md:w-20 transition-all duration-200
             drop-shadow-[0_0_25px_var(--mongodb)] lg:w-25 -translate-1/2 top-1/2 left-full " />
        <TailwindCSS className="absolute w-14 sm:w-16 md:w-20 transition-all duration-200
             drop-shadow-[0_0_25px_var(--tailwind)] lg:w-25 -translate-1/2  top-7/8 left-1/8 " />
        <Git className="absolute w-14 sm:w-16 md:w-20 transition-all duration-200
             drop-shadow-[0_0_25px_var(--git)] lg:w-25 -translate-1/2 top-full left-1/2 " />
        <JavaScript size={120} className="transition-all duration-200
             drop-shadow-[0_0_25px_var(--js)]" />
        <NodeJs className="absolute w-14 sm:w-16 md:w-20 transition-all duration-200
             drop-shadow-[0_0_30px_var(--node)] lg:w-25 -translate-1/2  top-1/2 left-0 " />
        <ViteJS className="absolute w-14 sm:w-16 md:w-20 transition-all duration-200
             drop-shadow-[0_0_25px_var(--vite)] lg:w-25 -translate-1/2 top-1/8 left-1/8 " />
      </motion.div>
    </div>
  );
};

export default TechStack;
