import { createContext } from "react";

const Context = createContext({
  isHome: true,
  isLightBox: false,
  whichPhotog: "jorge",
  activeImg: null,
});
export default Context;
