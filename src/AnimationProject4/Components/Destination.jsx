import React from 'react';
import { popularDestinations } from "../data";
import Slider from 'react-slick';
import { useTheme } from "../ContextApi/ThemeContext";

const Destination = () => {
  const { theme, ToggleTheme } = useTheme();

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    draggable: true,
    swipe: true,
  };

  // Dynamic classes based on theme
  const sectionBg = theme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const mutedText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardOverlay = theme === "dark" ? "bg-black opacity-30" : "bg-white opacity-30";
  const bottomOverlay = theme === "dark" ? "bg-black bg-opacity-85" : "bg-white bg-opacity-80";

  return (
    <section id="destination" className={`h-fit font-poppins py-20 space-y-6 ${sectionBg}`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">Where Will</h1>
        <h2 className="text-3xl font-medium text-primary-pr">You GO Next</h2>
        <p className={`font-medium ${mutedText}`}>
          Discover some of the most sought-after destinations around the world.
        </p>
        {/* Theme Toggle Button */}
        <button
          onClick={ToggleTheme}
          className="mt-4 px-4 py-2 rounded-lg bg-primary-pr text-white hover:opacity-90"
        >
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Slider */}
      <div className="px-10">
        <div className="overflow-x-hidden">
          <Slider {...settings}>
            {popularDestinations.map((data, idx) => (
              <div
                key={idx}
                className="relative w-full h-[70vh] rounded-2xl overflow-hidden group"
              >
                <img
                  src={data.image}
                  className="w-full h-full object-cover rounded-2xl"
                  alt={data.title}
                />
                <div className={`absolute inset-0 rounded-2xl ${cardOverlay}`} />
                <div className="opacity-100 group-hover:opacity-0 absolute top-4 right-0 py-1 rounded-3xl px-4 mx-3 bg-black">
                  {data.rating}
                </div>

                {/* Hover Details */}
                <div className="opacity-0 transition-all ease-in duration-200 group-hover:opacity-100 absolute top-10 w-full px-3">
                  <div className="relative z-20 text-sm flex flex-col gap-3">
                    {[
                      { value: data.hotels_number, label: "Hotels" },
                      { value: data.flights_number, label: "Flights" },
                      { value: data.price, label: "Premium Service" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-3xl relative text-white border">
                        <div className="relative z-20 flex flex-row gap-2 px-5 py-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-pr"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                            <path d="M12 11h4" />
                            <path d="M12 16h4" />
                            <path d="M8 11h.01" />
                            <path d="M8 16h.01" />
                          </svg>
                          <div className="flex flex-col">
                            <h1>{item.value}</h1>
                            <p>{item.label}</p>
                          </div>
                        </div>
                        <div className="absolute bg-black opacity-45 inset-0 rounded-3xl" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Overlay */}
                <div className={`absolute bottom-0 z-10 h-[30%] w-full ${bottomOverlay}`}>
                  <div className="relative flex flex-col w-full items-center justify-center pt-3">
                    <h1 className="text-2xl font-bold">{data.country}</h1>
                    <p className="text-center">{data.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-row items-center justify-center">
        <button className="bg-primary-pr py-2 px-3 rounded-3xl">All Destination</button>
      </div>
    </section>
  );
};

export default Destination;
