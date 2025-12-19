import { useState } from "react";
import emailjs from "@emailjs/browser";
import useContextHook from "../hooks/useContext.jsx";

const ContactForm = () => {
  const { notify } = useContextHook();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    project_type: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_d25zh59",
        "template_ojgr3k3",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          project_type: formData.project_type,
          message: formData.message,
        },
        "rN0Jt6hDkcrZNh6On"
      )
      .then(() => {
        notify("Your message is sent successfully");
      })
      .catch(() => {
        notify("Something went wrong. Try again later");
      });

    setFormData({
      user_name: "",
      user_email: "",
      project_type: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={sendEmail}
      className="w-full sm:w-150 flex flex-col items-center gap-10 shadow-inner-sm sm:shadow-inner-md rounded-[20px] sm:rounded-[30px] p-7 sm:p-15"
    >
      <input
        type="text"
        required
        onChange={handleChange}
        value={formData.user_name}
        className="px-3 py-2 w-full bg-(--card-dark) text-(--white) rounded-lg border border-transparent focus:outline-none
    focus:border-(--blue)
    focus:ring-1 focus:ring-(--blue)"
        placeholder="Enter name"
        name="user_name"
      />
      <input
        type="email"
        required
        onChange={handleChange}
        value={formData.user_email}
        className="px-3 py-2 w-full bg-(--card-dark) text-(--white) rounded-lg border border-transparent
    focus:outline-none
    focus:border-(--blue)
    focus:ring-1 focus:ring-(--blue)"
        placeholder="Enter email"
        name="user_email"
      />
      <select
        name="project_type"
        required
        onChange={handleChange}
        value={formData.project_type}
        className="px-3 py-2 w-full bg-(--card-dark) text-(--white) rounded-lg border border-transparent
    focus:outline-none
    focus:border-(--blue)
    focus:ring-1 focus:ring-(--blue)"
      >
        <option value="" className="">
          Chose project type
        </option>
        <option value="Starter - Landing page" className="">
          Starter - Landing page
        </option>
        <option value="Bussiness - Website" className="">
          Bussiness - Website
        </option>
      </select>
      <textarea
        name="message"
        onChange={handleChange}
        value={formData.message}
        required
        className="w-full p-3 min-h-32 resize-none bg-(--card-dark) text-(--white) rounded-lg border border-transparent
    focus:outline-none
    focus:border-(--blue)
    focus:ring-1 focus:ring-(--blue)"
        placeholder="Type your message here . . ."
      ></textarea>
      <button type="submit" className="w-full px-8 py-2 rounded-lg bg-(--dark-blue) text-white cursor-pointer">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
