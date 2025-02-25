// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);

 const ThemeProvider = ({ children }) => {
  // Check localStorage or default to light theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to HTML root and persist to localStorage
  useEffect(() => {

    const root = document.documentElement;
  
  
  
    if (theme === "dark") {
  
      root.classList.add("dark");
  
    } else {
  
      root.classList.remove("dark");
  
    }
  
  
  
    localStorage.setItem("theme", theme);
    console.log("Current theme", theme);
    console.log("Root className", root.className);

  
  }, [theme]);

  // Toggle Theme Function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

