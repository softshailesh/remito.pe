import React from "react";

// ✅ Import your partner logos from assets
import Federal from "../../../assets/logo1.svg";
import StandardChartered from "../../../assets/logo2.svg";
import BFCBank from "../../../assets/logo3.svg";
import SBMBank from "../../../assets/logo4.svg";
import IndusInd from "../../../assets/logo5.svg";
import ICICI from "../../../assets/logo6.svg";
import IDFCFirst from "../../../assets/logo7.svg";
import Axis from "../../../assets/logo8.svg";

const SLIDE_SPEED = 30; // seconds to complete one full slide

const logos = [
  Federal,
  StandardChartered,
  BFCBank,
  SBMBank,
  IndusInd,
  ICICI,
  IDFCFirst,
  Axis,
];

const LogoSlider = () => (
  <div className="relative w-full bg-white border-b border-blue-100 py-3 overflow-hidden">
    <div className="whitespace-nowrap flex animate-slide">
      {/* Duplicate for infinite scrolling effect */}
      {[...logos, ...logos].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`partner-logo-${i}`}
          className="h-8 md:h-12 mx-8 inline-block opacity-90 object-contain"
          style={{ width: "auto", minWidth: 110 }}
        />
      ))}
    </div>

    {/* Animation styles */}
    <style>{`
      @keyframes slide {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-slide {
        animation: slide ${SLIDE_SPEED}s linear infinite;
      }
    `}</style>
  </div>
);

export default LogoSlider;
