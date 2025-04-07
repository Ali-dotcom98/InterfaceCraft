import React from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import Sections from "./Section";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-screen p-5">
        <h1 className="text-3xl font-bold">Tailwind & Context API</h1>
        <ThemeToggleButton />
        <Sections />
      </div>
    </ThemeProvider>
  );
};

export default App;
