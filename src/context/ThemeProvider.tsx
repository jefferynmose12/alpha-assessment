import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  width: boolean;
  dark: boolean,
  toggleDarkMode: () => void;
  toggleWidth: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  width: false,
  dark: false,
  toggleDarkMode: () => {},
  toggleWidth: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [width, setWidth] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleWidth = () => {
    setWidth(!width);
  };

  return (
    <ThemeContext.Provider value={{ width, dark, toggleDarkMode, toggleWidth }}>
      {children}
    </ThemeContext.Provider>
  );
};
