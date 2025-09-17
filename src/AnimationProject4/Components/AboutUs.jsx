import bg2 from "../assets/bg-2.svg";
import male from "../assets/traveller-male.png";
import ship from "../assets/cruiseship.png";
import Build from "../assets/hotel.png";
import bg1 from "../assets/bg-1.svg";
import { OdoMeterContent, whyChooseUs } from "../data";
import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import { useTheme } from "../ContextApi/ThemeContext";

const AboutUs = () => {
  const { theme } = useTheme();
  const [X, setX] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setX(OdoMeterContent.map((item) => item.count));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <section
        id="about"
        className={`px-4 sm:px-8 lg:px-16 py-16 lg:py-24 font-poppins ${
          theme === "dark"
            ? "bg-dark-bg-overlay text-white"
            : "bg-zinc-200 text-black"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative flex justify-center">
            <img
              src={bg2}
              alt=""
              className="absolute inset-0 w-full max-w-lg scale-90 -z-10 opacity-50"
            />
            <div className="relative z-20 flex flex-row justify-center items-center gap-4">
              <img
                src={male}
                alt="traveller"
                className="w-40 sm:w-48 md:w-56 lg:w-64 -translate-y-5"
              />
              <div className="flex flex-col items-center gap-3">
                <img src={Build} alt="hotel" className="w-32 md:w-48" />
                <img
                  src={ship}
                  alt="cruise"
                  className="w-32 md:w-48 -translate-y-4"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-4 relative z-10">
              <h1 className="text-lg sm:text-xl text-primary-pr font-medium">
                About Us
              </h1>
              <p className="text-xl sm:text-2xl font-semibold capitalize">
                Who We Are
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                At Travins, we believe travel is more than just going places —
                it's about creating memories that last a lifetime. Our mission is
                to make travel planning simple, affordable, and accessible for
                everyone. From flights to accommodations and everything in
                between, we're here to help you every step of the way.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-6">
                {OdoMeterContent.map((data, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center py-4 rounded-xl ${
                      theme === "dark"
                        ? "bg-dark-bg-secondary"
                        : "bg-light-bg-secondary"
                    }`}
                  >
                    <h1 className="text-primary-pr">{data.icon}</h1>
                    <p className="text-2xl sm:text-3xl py-1 flex items-center gap-1">
                      <Odometer value={X[index]} format="d" />
                      <span>{data.sign}</span>
                    </p>
                    <p className="text-sm sm:text-base">{data.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={bg1}
              alt=""
              className="absolute inset-0 w-full max-w-md opacity-15 scale-75 translate-x-20 translate-y-20 -z-10"
            />
          </div>
        </div>
      </section>

      <section
        className={`${
          theme === "dark" ? "bg-black text-white" : "bg-light-bg-primary text-black"
        }`}
      >
        <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-8 px-6 sm:px-10 py-12`}>
          {whyChooseUs.map((data, idx) => (
            <div
              key={idx}
              className={`${theme == "dark" ? "bg-dark-bg-primary":"bg-light-bg-secondary"} flex flex-col sm:flex-row items-start gap-4 max-w-sm min-h-32 p-5 rounded-md`}
            >
              <div className="text-3xl text-primary-pr">
                <data.icon />
              </div>
              <div>
                <h1 className="font-semibold text-lg">{data.title}</h1>
                <p className="text-sm sm:text-base text-text-muted">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
