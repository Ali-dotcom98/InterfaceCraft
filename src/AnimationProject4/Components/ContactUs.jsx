import React, { useState } from "react";
import bg_1 from "../assets/bg-5.svg";
import { faq } from "../data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "../ContextApi/ThemeContext";

const ContactUs = () => {
  const [hide, setHide] = useState(null);
  const { theme } = useTheme();

  const toggleHide = (index) => {
    setHide(hide === index ? null : index);
  };

  const inputClass = `p-2 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-pr ${
    theme === "dark"
      ? "bg-dark-bg-secondary placeholder-white"
      : "bg-light-bg-primary placeholder-black"
  }`;

  return (
    <section
      id="contact"
      className={`min-h-screen ${
        theme === "dark" ? "bg-dark-bg-overlay text-white" : "text-black bg-[#FAFAFA]"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-1 pt-8">
        <h1 className="text-2xl font-bold">How to</h1>
        <h2 className="text-3xl font-bold text-primary-pr">Contact Ous</h2>
      </div>
      <div className="h-full flex items-center justify-center md:px-10  font-poppins">
        <div className="md:w-[90%] w-full grid grid-cols-1g gap-3  md:grid-cols-2 md:gap-4 px-5 md:px-10 py-10 md:py-24">
          <div className="px-5 space-y-5">
            <h1 className="font-medium w-fit">
              Frequent <span className="text-primary-pr w-fit">Asked Question</span>
            </h1>
            <div className="flex flex-col gap-3">
              {faq.map((data, index) => (
                <div key={index}>
                  <div className="flex flex-row items-center justify-between border py-5 px-3 rounded-2xl">
                    <div>{data.title}</div>
                    <div
                      onClick={() => toggleHide(index)}
                      className={`border p-1 rounded-full cursor-pointer transition-colors duration-300 ${
                        hide === index
                          ? `bg-primary-pr text-white`
                          : `hover:bg-primary-pr ${theme == "dark" ? "text-white": "text-black hover:text-white"}`
                      }`}
                    >
                      {hide === index ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 px-3 ${
                      hide === index
                        ? "max-h-[500px] opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    {data.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div
              className={`relative p-5 rounded-2xl border border-zinc-400 ${
                theme === "dark" ? "bg-black" : "bg-white"
              }`}
            >
              <div className="z-10 flex flex-col items-start justify-start gap-2 relative">
                <h1 className="mt-3 flex gap-3 text-2xl md:text-3xl leading-tight font-medium">
                  <span>Still Got Questions?</span>
                </h1>
                <p className="text-primary-pr text-xl font-bold text-start">
                  Reach out to us
                </p>
              </div>

              <form action="" className="relative z-10">
                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <input className={inputClass} type="text" placeholder="First Name" />
                  <input className={inputClass} type="text" placeholder="Last Name" />
                </div>

                <div className="flex flex-col md:flex-row gap-3 mt-5">
                  <input className={inputClass} type="email" placeholder="Email" />
                  <input className={inputClass} type="tel" placeholder="Phone Number" />
                </div>

                <textarea
                  className={`${inputClass} w-full h-36 mt-5 resize-none`}
                  placeholder="Message"
                ></textarea>

                <button className="w-full text-white px-3 py-2 bg-primary-pr mt-5 rounded-md">
                  Send Now
                </button>

                {/* Background image */}
                <div className="absolute z-0 inset-0 pointer-events-none">
                  <img src={bg_1} alt="" className="w-full h-full object-cover" />
                </div>
              </form>
            </div>

            <div className="rounded-2xl flex gap-3 items-center border border-zinc-400 p-5 md:p-4">
              <div className="text-primary-pr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold">Email</h1>
                <p>alishah1234584.as@gmail.com</p>
              </div>
            </div>

            <div className="rounded-2xl flex gap-3 items-center border border-zinc-400 p-5 md:p-4">
              <div className="text-primary-pr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold">Phone</h1>
                <p>+1234567890</p>
              </div>
            </div>

            <div className="rounded-2xl flex gap-3 items-center border border-zinc-400 p-5 md:p-4">
              <div className="text-primary-pr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold">Address</h1>
                <p>Islamabad - Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
