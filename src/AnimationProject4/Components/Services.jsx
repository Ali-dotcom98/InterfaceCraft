import React from 'react';
import { services } from "../data";
import { useTheme } from "../ContextApi/ThemeContext";

const Services = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`font-poppins ${
        theme === "dark"
          ? "bg-dark-bg-secondary text-white"
          : "bg-light-bg-primary text-black"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-10 py-10">
        {services.map((data, index) => (
          <article
            key={index}
            className={`flex flex-col ${theme == "dark" ? "bg-dark-bg-primary":"bg-light-bg-secondary"} gap-2 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="text-primary-pr font-bold text-3xl">
              <data.icon />
            </div>
            <h2 className="text-lg font-medium">{data.title}</h2>
            <p>{data.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
