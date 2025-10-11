import React from "react";
import remiti_logo from "../../../assets/remitologo.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="w-full px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={remiti_logo} alt="RemitoPe Logo" className="h-10" />
        </div>

        {/* Title */}
        <h2 className="text-[#0B153C] text-lg font-semibold mb-2">
          Lorem ipsum dolor sit
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          dolorem. Sit, officiis cum rerum, obcaecati nihil laudantium natus,
          tempora soluta nisi numquam dolore ipsam porro voluptatem quaerat!
          Similique, ex praesentium!
        </p>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between  text-gray-400 text-sm border-t border-gray-100 pt-6">
          <p className="mb-2 md:mb-0">
            Copyright{" "}
            <span className="text-orange-500 font-medium">@remitope</span>. All Rights Reserved.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
