import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import remito_logo from "../../../assets/remitologo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Tailwind style for active NavLink
  const activeLink = "text-orange-500";
  const defaultLink = "hover:text-orange-500";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
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
                to="/products"
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Solutions
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center space-x-1">
                <span>Company</span>
                <svg
                  className="w-4 h-4 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {/* Dropdown Menu */}
              <ul className="absolute hidden group-hover:block top-6 left-0 bg-white shadow-lg border rounded-md py-2 w-40">
                <li>
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/careers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/partners"
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right: Sign In Button */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/signin"
            className="hidden md:block border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300"
          >
            Sign In
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#0a2a57] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col text-[15px] font-semibold text-[#0a2a57] px-6 py-3 space-y-3">
            <li>
              <NavLink
                to="/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/solutions"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partners"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? activeLink : defaultLink)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="w-full text-center border border-yellow-400 text-yellow-500 font-medium px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
