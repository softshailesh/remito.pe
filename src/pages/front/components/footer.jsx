import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import remiti_logo from "../../../assets/remitologo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 flex flex-col justify-center w-full">
      <div className="container mx-auto py-10 px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1350px]">
        {/* Left Section */}
        <div>
          <img src={remiti_logo} alt="RemitoPe Logo" className="h-10 mb-3" />
          <p className="text-[#9A9A9A] font-[400] leading-relaxed">
            Remito.Pe is to make cross-border payments easier for people and
            companies worldwide. We make international financial transactions
            easy and accessible to everyone by prioritizing security, speed, and
            price.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[#0B153C] text-lg font-semibold mb-3 relative inline-block">
              Quick Link
              <div className="flex gap-1">
                <span className="block h-[6px] w-[51px] bg-orange-500 mt-1 rounded"></span>
                <span className="block h-[6px] w-[18px] bg-orange-500 mt-1 rounded"></span>
              </div>
            </h3>
            <ul className="space-y-2 text-[16px] text-[#1D3458] font-[600]">
              <li>
                <NavLink
                  to="/contact-us"
                  className="hover:text-orange-500 transition"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  onClick={() =>
                    window.open("https://portal.remito.pe/", "_blank")
                  }
                  className="hover:text-orange-500 transition"
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="hover:text-orange-500 transition"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-conditions"
                  className="hover:text-orange-500 transition"
                >
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#0B153C] text-lg font-semibold mb-3 relative inline-block">
              Follow Us
              <div className="flex gap-1">
                <span className="block h-[6px] w-[51px] bg-orange-500 mt-1 rounded"></span>
                <span className="block h-[6px] w-[18px] bg-orange-500 mt-1 rounded"></span>
              </div>
            </h3>
            <div className="flex space-x-4">
              <NavLink
                to="#"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61580295502746",
                    "_blank"
                  )
                }
                className="w-8 h-8 rounded-full bg-[#1877F2] text-[#FFFFFF] flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaFacebookF size={14} />
              </NavLink>
              <NavLink
                to="#"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/remito-pe",
                    "_blank"
                  )
                }
                className="w-8 h-8 rounded-full bg-[#007AB9] text-[#F1F2F2] flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaLinkedinIn size={14} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 py-5 pt-4 text-center text-gray-400 text-sm">
        Copyright ©{" "}
        <a
  href="https://remito.pe/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-orange-500 font-medium hover:underline"
>
  remito.pe
</a>
. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
