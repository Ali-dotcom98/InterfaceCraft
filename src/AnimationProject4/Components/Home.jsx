import React, { useRef } from "react";
import air from "../assets/airplane.png";
import bg2 from "../assets/bg-2.svg";
import beach from "../assets/beach.png";
import City from "../assets/citycafe.png";
import { partners } from "../data";
import female from "../assets/traveller.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Slider from "react-slick";
import { useTheme } from "../ContextApi/ThemeContext";
import world from "../assets/world.svg";

const Home = () => {
  const { theme } = useTheme();
  const box = useRef(null);

  useGSAP(() => {
    gsap.to(box.current, {
      y: -25,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const setting = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 2000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="home"
      className={`relative font-poppins pt-6 px-4 sm:px-6 md:px-10 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-10 py-6 text-center md:text-left  md:-translate-y-16 md:translate-x-3 md:space-y-16">
          <h1 className="font-zentry text-3xl sm:text-4xl lg:text-5xl font-bold translate-y-10">
            Explore the World, Your way with{" "}
            <span className="text-primary-pr">Travins</span>
          </h1>
          <p className="text-text-muted font-medium max-w-md mx-auto md:mx-0 ">
            Book your next adventure with ease. Affordable, reliable, and
            unforgettable travel experiences await.
          </p>
          <div ref={box} className="flex justify-center md:justify-start">
            <img src={air} alt="airplane" className="w-3/5 md:w-4/5" />
          </div>
        </div>

        <div className="relative h-full">
          <div className="absolute z-0 inset-0 flex justify-center">
            <img
              src={bg2}
              className="w-3/4 sm:w-full scale-75 -translate-y-16 rotate-12 -translate-x-5"
              alt="background"
            />
          </div>
          <div className="relative z-20 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-end">
                <h1 className="text-2xl sm:text-3xl font-bold">4.5</h1>
                <div className="flex flex-col">
                  <div className="flex scale-75 -translate-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FFFF00"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-text-muted">1210 Reviews</div>
                </div>
              </div>
              <img
                src={beach}
                className="scale-75 rounded-3xl mt-2"
                alt="beach"
              />
            </div>

            <div>
              <img src={City} alt="city" className="rounded-3xl mb-6" />
              <img src={female} alt="traveller" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-10 sm:mt-16  -translate-y-10">
        <Slider {...setting}>
          {partners.map((data, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center"
            >
              <img
                src={data.image}
                alt="partner"
                className="h-8 sm:h-10 object-contain filter grayscale"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute z-0 inset-0 translate-y-8 sm:-translate-y-8 ">
        <img src={world} alt="world map" className="w-full" />
      </div>
    </section>
  );
};

export default Home;
