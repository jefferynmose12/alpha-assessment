import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default useThemeContext;
