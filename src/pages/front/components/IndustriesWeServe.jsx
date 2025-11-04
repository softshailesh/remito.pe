import React from "react";
import ECommerceImg from "../../../assets/E-Commerce.svg";
import FreelancersImg from "../../../assets/Freelancers.svg";
import MSMEImg from "../../../assets/MSME’s.svg";
import TravelImg from "../../../assets/Travel.svg";
import PaymentImg from "../../../assets/Software.svg";
import ImportExportImg from "../../../assets/Import.svg";
import Dots from "../../../assets/dote.png";

const industries = [
  {
    icon: ECommerceImg,
    title: "E-Commerce",
    description:
      "Powering international payments for online retailers. Ensure smooth, quick, and reliable transactions for your customers across borders.",
  },
  {
    icon: FreelancersImg,
    title: "Freelancers & Remote Workers",
    description:
      "Get paid easily from clients around the world with no delays and competitive exchange rates.",
  },
  {
    icon: MSMEImg,
    title: "MSME’s",
    description:
      "Go global without the hassle. Our solution makes international payments fast with low-cost and no hidden fees.",
  },
  {
    icon: TravelImg,
    title: "Travel & Tourism",
    description:
      "Facilitating global payments for the travel industry, including tour operators, hotels, and airlines.",
  },
  {
    icon: PaymentImg,
    title: "Software and Consultancy",
    description:
      "Payments to these partners can be made securely using cross-border services and enabling low-cost payroll.",
  },
  {
    icon: ImportExportImg,
    title: "Import/Export Businesses",
    description:
      "Whether you’re buying or selling internationally, our platform simplifies cross-border payments for your business.",
  },
];

const borderColor = "#FFFFFF";

const IndustriesWeServe = () => (
  <div className="bg-[#e7e8fa] py-16 relative w-full flex justify-center">
    <div className="w-full max-w-[1350px] box-border px-6 md:px-10">
      {/* Section Title */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[46px] font-[700] text-gray-800 mb-4">
          Industries We Serve
        </h2>
      </div>

      {/* Top 4 industries grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col items-center text-center h-full bg-transparent 
                transition 
                lg:border-b-0 
                ${index !== 3 ? "lg:border-r" : ""} 
                ${index < 3 ? "lg:border-b" : ""} 
                border-[#FFFFFF]/100
                border-0
              `}
            >
              <div className="flex justify-center items-center w-[70px] h-[60px] mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[70px] h-[60px] object-contain"
                />
              </div>
              <h3 className="text-[20px] font-[700] text-gray-800 mb-2 whitespace-nowrap">
                {item.title}
              </h3>
              <p className="text-[16px] font-[400] text-[#9A9A9A] text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* Border for large screen only */}
        <div
          className="hidden lg:block absolute left-0 right-0 bottom-0 h-[1px]"
          style={{ background: borderColor }}
        />
      </div>

      {/* Bottom 2 industries grid */}
      <div className="relative max-w-2xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {industries.slice(4).map((item, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col items-center text-center h-full bg-transparent transition 
                lg:border-b-0 
                ${index !== 1 ? "lg:border-r" : ""} 
                lg:border-[#FFFFFF]/100
                border-0
              `}
            >
              <div className="flex justify-center items-center w-[70px] h-[60px] mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[70px] h-[60px] object-contain"
                />
              </div>
              <h3 className="text-[20px] font-[700] text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-[16px] font-[400] text-[#9A9A9A] text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* Bottom border visible only on large screen */}
        <div
          className="hidden lg:block absolute left-0 right-0 bottom-0 h-[1px]"
          style={{ background: borderColor }}
        />
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button
          className="bg-[#EB5C2626] text-[#EB5C26] font-[500] text-[18px] px-10 py-3 rounded-md cursor-pointer"
          onClick={() => window.open("https://portal.remito.pe/", "_blank")}
        >
          Get Started Today
        </button>
      </div>

      {/* Decorative dots (only on large screen) */}
      <div
        className="absolute bottom-4 right-4 w-24 h-24 bg-no-repeat bg-contain hidden sm:block"
        style={{ backgroundImage: `url(${Dots})` }}
      />
    </div>
  </div>
);

export default IndustriesWeServe;
