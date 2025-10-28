import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import remito_logo from "../../../assets/remitologo.svg";
import { TiSocialLinkedin } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLink = "text-orange-500";
  const defaultLink = "hover:text-orange-500";

  // Scroll handler function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm relative flex justify-center items-center w-full">
      <div className="w-full max-w-[1350px]">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 py-4">
          {/* Left: Logo + Links */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <img src={remito_logo} alt="Remitore Logo" className="h-8" />
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-8 text-[15px] font-semibold text-[#0a2a57]">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={defaultLink}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className={defaultLink}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-remitope")}
                  className={defaultLink}
                >
                  Why RemitoPe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className={defaultLink}
                >
                  Resources
                </button>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? activeLink : defaultLink
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right: Sign In + LinkedIn + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Sign In */}
            <button
              onClick={() => (window.location.href = "https://portal.remito.pe/")}
              className="hidden lg:block border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300"
            >
              Sign In
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-[#0a2a57] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden w-full absolute z-50 bg-white border-t border-[#babdbf] shadow-sm">
            <ul className="flex flex-col text-[15px] font-semibold text-[#0a2a57] px-6 py-4 space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={defaultLink}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className={defaultLink}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-remitope")}
                  className={defaultLink}
                >
                  Why RemitoPe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className={defaultLink}
                >
                  Resources
                </button>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLink : defaultLink
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="pt-3 border-t border-[#babdbf] flex gap-4 items-center">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "https://portal.remito.pe/";
                  }}
                  className="text-center border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
