import React from "react"; 
import ECommerceImg from "../../../assets/ind1.svg";
import FreelancersImg from "../../../assets/ind2.svg";
import MSMEImg from "../../../assets/ind3.svg";
import TravelImg from "../../../assets/ind4.svg";
import PaymentImg from "../../../assets/ind5.svg";
import ImportExportImg from "../../../assets/ind6.svg";
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
    title: "Payment System",
    description:
      "Whether you’re buying or selling internationally, our platform simplifies cross-border payments for your business.",
  },
  {
    icon: ImportExportImg,
    title: "Import/Export Businesses",
    description:
      "Whether you’re buying or selling internationally, our platform simplifies cross-border payments for your business.",
  },
];

const borderColor = "#FFFFFF"; // White border color
const IndustriesWeServe = () => (
  <div className="bg-[#e7e8fa] py-16 relative w-full flex justify-center">
     <div className="w-full max-w-[1350px] box-border px-6 md:px-10">
    {/* Section Title */}
    <div className="text-center mb-12 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Industries We Serve
      </h2>
      <p className="text-gray-500 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
    </div>

    {/* Top 4 industries grid with right and bottom borders */}
    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {industries.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="p-6 transition flex flex-col items-center text-center h-full bg-transparent"
            style={{
              borderRight: index !== 3 ? `1px solid ${borderColor}` : "none",
              borderBottom:
                window.innerWidth >= 1024
                  ? "none"
                  : index < 3
                  ? `1px solid ${borderColor}`
                  : "none",
            }}
          >
            <div className="flex justify-center items-center w-16 h-16 mb-4 bg-white rounded-lg shadow-sm">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Bottom border for the whole grid */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[1px]"
        style={{ background: borderColor }}
      />
      {/* Right border for the whole grid */}
      {/* <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px]"
        style={{ background: borderColor }}
      /> */}
    </div>

    {/* Bottom 2 industries grid with right and bottom borders */}
    <div className="relative max-w-4xl mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {industries.slice(4).map((item, index) => (
          <div
            key={index}
            className="p-6 transition flex flex-col items-center text-center h-full bg-transparent"
            style={{
              borderRight: index !== 1 ? `1px solid ${borderColor}` : "none",
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            <div className="flex justify-center items-center w-16 h-16 mb-4 bg-white rounded-lg shadow-sm">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Bottom border for the whole grid */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[1px]"
        style={{ background: borderColor }}
      />
      {/* Right border for the grid */}
      {/* <div
        className="hidden sm:block absolute right-0 top-0 bottom-0 w-[1px]"
        style={{ background: borderColor }}
      /> */}
    </div>

    {/* Button */}
    <div className="flex justify-center mt-12">
      <button className="bg-orange-100 text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-200 transition">
        Get Started Today
      </button>
    </div>

    {/* Decorative dots on bottom-right as background image */}
    <div
      className="absolute bottom-4 right-4 w-24 h-24 bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${Dots})` }}
    />
    </div>
  </div>
);

export default IndustriesWeServe;
