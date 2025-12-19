import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return <div id="contact" className="w-full min-h-screen flex flex-col items-center justify-center gap-15 px-5 sm:p-10 sm:py-30 py-30 bg-(--dark-bg) ">
    <h2 className="text-4xl sm:text-5xl text-(--white)">Contact me</h2>
    <ContactForm/>
  </div>;
};

export default Contact;
