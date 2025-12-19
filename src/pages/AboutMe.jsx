import Biography from "../components/Biography.jsx";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-10 bg-(--dark-bg) overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-start justify-center gap-7 sm:gap-10"
      >
        <h2 className="text-4xl sm:text-5xl text-(--white)">About me</h2>
        <Biography />
      </motion.div>
    </div>
  );
};

export default AboutMe;
