import { Context } from "../context/Context";
import { useContext } from "react";

const useContextHook = () => {
  const context = useContext(Context);

  if (!context) {
    console.log("No context found");
    return;
  }

  return context;
};

export default useContextHook;
