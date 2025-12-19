import { useState } from "react";
import { Context } from "./Context";
import toast from "react-hot-toast";

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const notify = (message) => toast(message);

  const value = { open, toggleMenu, notify };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
