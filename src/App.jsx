import Hero from "./pages/Hero.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import TechStack from "./pages/TechStack.jsx";
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";

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
    </div>
  );
};

export default App;
