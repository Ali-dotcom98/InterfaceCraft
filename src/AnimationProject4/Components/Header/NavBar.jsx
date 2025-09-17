import React, { useEffect, useRef, useState } from "react";
import { navigations } from "../../data";
import { Link } from "react-scroll";
import pic from "../../assets/logo.svg";
import gsap from "gsap";
import { useTheme } from "../../ContextApi/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const NavBar = () => {
  const [first, setFirst] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const target = useRef(null);
  const { theme, ToggleTheme } = useTheme();

  
  useEffect(() => {
    if (first) {
      gsap.fromTo(target.current, { y: -150 }, { y: 0, top: 0 });
    }
  }, [first]);

  const Scrollhandle = () => {
    const position = window.scrollY;
    setFirst(position > 60);
  };

  useEffect(() => {
    window.addEventListener("scroll", Scrollhandle);
    return () => window.removeEventListener("scroll", Scrollhandle);
  }, []);

  const navClasses = `${
    first ? "fixed z-50  top-0 left-0 w-full border-b border-primary-pr" : "relative z-50"
  } font-poppins px-4 py-2 flex justify-between items-center ${
    theme === "dark"
      ? "bg-black text-white opacity-100"
      : "bg-white text-black bg-opacity-90"
  }`;

  return (
    <nav ref={target} className={navClasses}>
      <div className="flex items-end gap-2 pl-4">
        <img className="size-8" src={pic} alt="logo" />
        <h1 className="text-2xl font-bold">Travins</h1>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {navigations.map((data, index) => (
          <Link
            key={index}
            to={data.to}
            offset={data.offset}
            smooth={true}
            duration={500}
            hashSpy={true}
            isDynamic={true}
            spy={true}
            activeClass="border-b-2 border-primary-pr !text-primary-pr"
            className="font-medium cursor-pointer hover:text-primary-pr"
          >
            {data.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4 pr-4">
        <div
          onClick={ToggleTheme}
          className={`p-1 cursor-pointer rounded-full hover:bg-gray-200 ${
            theme === "dark" ? "hover:bg-light-bg-primary hover:text-black" : "hover:bg-primary-pr hover:text-white"
          }`}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
        <button className="bg-primary-pr py-2 px-4 rounded-3xl text-white hover:opacity-90">
          <Link to="contact" offset={30} smooth={true}>
            Get Started
          </Link>
        </button>
        <Link
          to="contact"
          offset={50}
          smooth={true}
          className="hover:text-primary-pr font-medium"
        >
          Sign up
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-4">
  <div
    onClick={ToggleTheme}
    className={`p-1 cursor-pointer rounded-full transition-colors duration-200 
      ${theme === "dark" 
        ? "hover:bg-light-bg-primary hover:text-black" 
        : "hover:bg-primary-pr hover:text-white"}`}
  >
    {theme === "light" ? <Moon /> : <Sun />}
  </div>
  <button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`p-2 rounded-md transition-colors duration-200 
    ${theme === "dark" 
      ? "hover:bg-light-bg-primary hover:text-black" 
      : "hover:bg-primary-pr hover:text-white"}`}
>
  {menuOpen ? <X /> : <Menu />}
</button>


</div>


      {menuOpen && (
  <div
    className={`absolute top-full left-0 w-full shadow-lg md:hidden ${
      theme === "dark" ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    <div className="flex flex-col items-center gap-4 py-4">
      {navigations.map((data, index) => (
        <Link
          key={index}
          to={data.to}
          offset={data.offset}
          smooth={true}
          duration={500}
          spy={true} 
          activeClass="text-primary-pr font-bold border-b-2 border-primary-pr" 
          onClick={() => setMenuOpen(false)}
          className="font-medium cursor-pointer transition-colors duration-200 hover:text-primary-pr"
        >
          {data.label}
        </Link>
      ))}

      
      <button className="bg-primary-pr py-2 px-4 rounded-3xl text-white hover:opacity-90">
        <Link
          to="contact"
          offset={30}
          smooth={true}
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </Link>
      </button>

     
      <Link
        to="contact"
        offset={50}
        smooth={true}
        onClick={() => setMenuOpen(false)}
        className="hover:text-primary-pr font-medium"
      >
        Sign up
      </Link>
    </div>
  </div>
)}

    </nav>
  );
};

export default NavBar;
