import React from "react";
import { useTheme } from "./Context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-lg shadow-md transition duration-300 mt-4
                  ${theme === "light" ? "bg-gray-800 text-white" : "bg-yellow-400 text-black"}`}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggleButton;
