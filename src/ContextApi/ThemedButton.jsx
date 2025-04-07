import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext"

const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`px-4 py-2 mt-4 rounded-lg shadow-md transition duration-300 
                  ${
                    theme === "light"
                      ? "bg-white text-black border border-gray-300 hover:bg-gray-200"
                      : "bg-gray-900 text-white border border-gray-600 hover:bg-gray-800"
                  }`}
    >
      Toggle Theme
    </button>
  );
};

export default ThemedButton;
