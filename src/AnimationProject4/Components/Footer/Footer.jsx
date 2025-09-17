import React from "react";
import watermark from "../../assets/bg-3.svg";
import { footer } from "../../data";
import { useTheme } from "../../ContextApi/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden font-poppins ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={watermark} alt="Watermark" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <div>
            <h2 className="font-medium">Email</h2>
            <p className="text-sm">alishah123458.as@gmail.com</p>
          </div>
          <div>
            <h2 className="font-medium">Phone</h2>
            <p className="text-sm">+1234567890</p>
          </div>
          <div>
            <h2 className="font-medium">Address</h2>
            <p className="text-sm">Xyz</p>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {footer.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h1 className="text-xl font-medium">{group.title}</h1>
              <div className="flex flex-col gap-3">
                {group.links.map((link, linkIdx) => (
                  <div
                    key={linkIdx}
                    className="flex items-center gap-3 hover:text-primary-pr transition-colors duration-200 cursor-pointer"
                  >
                    <link.icon className="w-5 h-5" />
                    <p className="text-sm">{link.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-full py-3 border-t ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Confix - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
