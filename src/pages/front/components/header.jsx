import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import remito_logo from "../../../assets/remitologo.svg";
import { TiSocialLinkedin } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLink = "text-orange-500";
  const defaultLink = "hover:text-orange-500";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm relative flex justify-center items-center w-full ">
      <div className="w-full max-w-[1350px]">
         <nav className="w-full flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo + Links */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={remito_logo} alt="Remitore Logo" className="h-8" />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-[#0a2a57]">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Why_RemitoPe"
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Why RemitoPe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
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
          <NavLink
            to="/signin"
            className="hidden md:block border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300"
          >
            Sign In
          </NavLink>

          <NavLink
            to="/linkedin"
            className="w-[36px] h-[36px] text-[17px] flex items-center justify-center hidden md:flex border border-[#79bde0] bg-[#79bde0] text-[#007AB9] rounded-[4px] hover:bg-[#007AB9] hover:text-white transition duration-300"
          >
            <TiSocialLinkedin />
          </NavLink>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-[#0a2a57] focus:outline-none"
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
        <nav className="md:hidden w-full h-0 isopen && h-fit transitionall-3s absolute z-100 bg-white border-t border-[#babdbf] shadow-sm">
          <ul className="flex flex-col text-[15px] font-semibold text-[#0a2a57] px-6 py-3 space-y-3">
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Why_RemitoPe"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Why RemitoPe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Contact Us
              </NavLink>
            </li>
           <li className="flex items-center gap-[15px] pt-2 border-t border-[#babdbf]">
              <NavLink
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="text-center border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300 "
              >
                Sign In
              </NavLink>

              {/* Show LinkedIn button on mobile too */}
              <NavLink
                to="/linkedin"
                onClick={() => setIsOpen(false)}
                className="w-[36px] h-[36px] text-[17px] flex items-center justify-center border border-[#79bde0] bg-[#79bde0] text-[#007AB9] rounded-[4px] hover:bg-[#007AB9] hover:text-white transition duration-300"
              >
                <TiSocialLinkedin />
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      </div>
     
    </header>
  );
};

export default Navbar;
