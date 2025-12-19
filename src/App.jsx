import Hero from "./pages/Hero.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import TechStack from "./pages/TechStack.jsx";
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-full">
      <Menu />
      <Hero />
      <AboutMe />
      <Projects />
      <TechStack />
      <Pricing />
      <Contact />
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            backgroundColor: "#070051",
            color: "#ffffff",
            padding: "0.5rem 2.5rem",
            fontSize: "1.25rem",
            borderRadius: "10px",
            boxShadow: "inset 0 0px 12px 3px var(--dark-blue)",
            textAlign: "center"
          },
        }}
      />
    </div>
  );
};

export default App;
