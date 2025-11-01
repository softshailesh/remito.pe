import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import remito_logo from "../../../assets/remitologo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Detect current path
  const isContactPage = location.pathname === "/contact-us";

  const activeLink = "text-orange-500";
  const defaultLink = "hover:text-orange-500";

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
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
            {!isContactPage && (
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
                    Industries
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
            )}

            {/* Contact Us link (only show this on contact page) */}
            {/* {isContactPage && (
              <NavLink
                to="/contact-us"
                className={`text-[15px] font-semibold ${activeLink}`}
              >
                Contact Us
              </NavLink>
            )} */}
          </div>

          {/* Right: Sign In + Mobile Toggle */}
          <div className="flex items-center">
            {/* Sign In (Always show, even on contact page) */}
            <button
              onClick={() => window.open("https://portal.remito.pe/", "_blank")}
              className="hidden lg:block border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300 cursor-pointer"
            >
              Sign In
            </button>

            {/* Mobile Toggle (Hide on contact page) */}
            {!isContactPage && (
              <button
                className="lg:hidden text-[#0a2a57] focus:outline-none ml-3"
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
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {!isContactPage && isOpen && (
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
                  Industries
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
                    window.open("https://portal.remito.pe/", "_blank");
                  }}
                  className="text-center border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300 cursor-pointer"
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
