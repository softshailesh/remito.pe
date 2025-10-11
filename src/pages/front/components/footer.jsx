import React from "react";
import remiti_logo from "../../../assets/remitologo.svg"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Logo & Description */}
        <div className="w-full lg:w-[22%] mb-8 lg:mb-0">
          {/* Replace src with your logo path */}
          <img
            src={remiti_logo}
            alt="Remitope Logo"
            className="h-8 mb-3"
          />
          <h2 className="font-semibold text-lg text-gray-700 mb-2">
            Lorem ipsum dolor sit
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolorem. Sit, officiis cum rerum, obcaecati nihil laudantium natus, tempora soluta nisi numquam dolore ipsam porro voluptatem quaerat! Similique, ex praesentium!
          </p>
        </div>

        {/* Useful Links */}
        <div className="w-full lg:w-[18%] mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            Useful Links
          </h3>
          {/* Orange underline as two bars */}
          <div className="flex gap-2 mb-3">
            <div className="h-[6px] w-12 bg-[#ff7a00] rounded-lg"></div>
            <div className="h-[6px] w-6 bg-[#ff7a00] rounded-lg"></div>
          </div>
          <ul className="space-y-1">
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold">Products</a></li>
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold">Solutions</a></li>
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold">Partners</a></li>
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold ">Resources</a></li>
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold ">Contact Us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-full lg:w-[18%] mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            Company
          </h3>
          {/* Orange underline as two bars */}
          <div className="flex gap-2 mb-3">
            <div className="h-[6px] w-12 bg-[#ff7a00] rounded-lg"></div>
            <div className="h-[6px] w-6 bg-[#ff7a00] rounded-lg"></div>
          </div>
          <ul className="space-y-1">
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold">About Us</a></li>
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold">Careers</a></li>
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold">FAQs</a></li>
            <li><a href="#" className="text-slate-800 hover:text-orange-600 text-sm font-bold">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="w-full lg:w-[18%]">
          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            Follow Us
          </h3>
          {/* Orange underline as two bars */}
          <div className="flex gap-2 mb-3">
            <div className="h-[6px] w-12 bg-[#ff7a00] rounded-lg"></div>
            <div className="h-[6px] w-6 bg-[#ff7a00] rounded-lg"></div>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-blue-600 text-2xl hover:scale-110 transition"><FaFacebookF /></a>
            <a href="#" className="text-pink-500 text-2xl hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" className="text-blue-700 text-2xl hover:scale-110 transition"><FaLinkedinIn /></a>
            <a href="#" className="text-red-600 text-2xl hover:scale-110 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        Copyright <span className="text-orange-500 font-medium">@remitorpe</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
