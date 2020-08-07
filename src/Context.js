import { createContext } from "react";

const Context = createContext({
  isHome: true,
  isLightBox: false,
  whichPhotog: null,
  activeImg: null,
});
export default Context;
