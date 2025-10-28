import React from "react";
import Federal from "../../../assets/1.svg";
import StandardChartered from "../../../assets/2.svg";
import BFCBank from "../../../assets/3.svg";
import SBMBank from "../../../assets/4.svg";
import IndusInd from "../../../assets/5.svg";
import ICICI from "../../../assets/6.svg";
import IDFCFirst from "../../../assets/7.svg";
import Axis from "../../../assets/8.svg";
import HDFCBank from "../../../assets/9.svg";
import YesBank from "../../../assets/10.svg";
import Kotak from "../../../assets/11.svg";
import CitiBank from "../../../assets/12.svg";
import HSBC from "../../../assets/13.svg";

const SLIDE_SPEED = 40;

const logos = [
  Federal,
  StandardChartered,
  BFCBank,
  SBMBank,
  IndusInd,
  ICICI,
  IDFCFirst,
  Axis,
  HDFCBank,
  YesBank,
  Kotak,
  CitiBank,
  HSBC,
];

const LogoSlider = () => (
  <div className="relative w-full bg-white border-b border-blue-100 py-4 flex justify-center">
    <div className="w-full max-w-[1350px] box-border px-6 md:px-10 overflow-hidden">
      <div className="whitespace-nowrap flex animate-slide">
        {[...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`partner-logo-${i}`}
            onError={(e) => {
              // console.error(`❌ Image failed to load: partner-logo-${i}`, logo);
              e.target.style.display = "none"; // hide broken image
            }}
            onLoad={() => console.log(`✅ Image loaded successfully: partner-logo-${i}`)}
            className="h-8 md:h-12 mx-8 inline-block opacity-90 object-contain transition-transform duration-300 hover:scale-105"
            style={{ width: "auto" }}
          />
        ))}
      </div>
    </div>

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
