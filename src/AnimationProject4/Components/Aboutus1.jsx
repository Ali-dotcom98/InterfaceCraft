import React from "react";
import bg11 from "../assets/bg-4.svg";
import { useTheme } from "../ContextApi/ThemeContext";

const Aboutus1 = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative min-h-[50vh] py-10 px-5 md:px-10 ${
        theme === "dark"
          ? "bg-dark-bg-overlay text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src={bg11}
          alt="Background"
          className="w-full h-full object-cover rounded-2xl pointer-events-none"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-3 h-full text-center">
        <h1 className="text-2xl md:text-3xl font-medium">Stay in the loop</h1>
        <p className="font-medium max-w-2xl">
          Get the latest travel deals, tips, and updates straight to your inbox
        </p>

        <div className="w-full md:w-[60%] flex flex-col sm:flex-row gap-3 mt-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border text-black border-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-pr rounded-2xl p-2"
            />
          </div>
          <button className="px-4 py-2 bg-primary-pr text-white rounded-2xl hover:bg-primary-pr/90 transition-colors duration-200">
            Send Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus1;
