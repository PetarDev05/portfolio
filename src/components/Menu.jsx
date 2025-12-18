const Menu = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full flex flex-col items-center justify-start">
      <a
        href="#about"
        className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
      >
        About me
      </a>
      <a
        href="#projects"
        className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
      >
        Projects
      </a>
      <a
        href="#pricing"
        className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
      >
        Pricing
      </a>
      <a
        href="#contact"
        className="text-md hover:shadow-switch-dark w-25 py-1 rounded-full text-center"
      >
        Contact
      </a>
    </div>
  );
};

export default Menu;
