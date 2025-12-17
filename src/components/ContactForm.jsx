const ContactForm = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full sm:w-150 py-15 px-7 sm:p-15 shadow-inner-sm sm:shadow-inner-md rounded-[30px]">
      <h2 className="text-4xl text-(--text) dark:text-(--white)">Contact me</h2>
      <form className="w-full flex flex-col items-center gap-10">
        <input
          type="text"
          className="px-3 py-2 bg-(--super) w-full dark:bg-(--card-dark) dark:text-(--white) rounded-lg"
          placeholder="Enter name"
          name="name"
        />
        <input
          type="email"
          className="px-3 py-2 bg-(--super) w-full dark:bg-(--card-dark) dark:text-(--white) rounded-lg"
          placeholder="Enter email"
          name="name"
        />
        <select name="" id="" className="px-3 py-2 bg-(--super) w-full dark:bg-(--card-dark) dark:text-(--white) rounded-lg">
          <option value="" className="">Chose project type</option>
          <option value="" className="">Starter - Landing page</option>
          <option value="" className="">Bussiness - Website</option>
          <option value="" className="">Profesionall - Full stack application</option>
        </select>
        <textarea
          name="message"
          id=""
          className="w-full bg-(--super) p-3 min-h-32 resize-none dark:bg-(--card-dark) dark:text-(--white) rounded-lg"
          placeholder="Type your message here . . ."
        ></textarea>
        <button className="w-full px-8 py-2 rounded-lg bg-(--dark-blue) text-white cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
