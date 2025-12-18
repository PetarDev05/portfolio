import { useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const value = { open, toggleMenu };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
