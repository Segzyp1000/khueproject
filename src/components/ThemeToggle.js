// ThemeToggle.js
import React from "react";
import { useTheme } from "../ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;