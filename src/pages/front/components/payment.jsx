import React from "react";
import bussinessImage from "../../../assets/Businesses.svg";
import individualImage from "../../../assets/Individuals.svg";
import msmeImage from "../../../assets/MSME.svg";

const PaymentSolutions = () => {
  const data = [
    {
      id: "01",
      image: bussinessImage,
      title: "For Businesses:",
      points: [
        "International invoicing and payments",
        "Multi-currency accounts for businesses",
        "Real-time payment tracking and notifications",
        "Automated payment solutions for e-commerce",
      ],
    },
    {
      id: "02",
      image: individualImage,
      title: "For Individuals:",
      points: [
        "Affordable international remittances",
        "Quick and secure money transfers to freelancers, family and friends",
        "Currency conversion with competitive rates",
      ],
    },
    {
      id: "03",
      image: msmeImage,
      title: "For MSME’s:",
      points: [
        "Smooth, secure, and scalable transactions across borders.",
        "Fast, affordable transfers to loved ones or partners—anywhere in the world.",
        "Streamline IP-related payments like licensing and royalty payments with ease and compliance.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 mediascreenmob w-full flex justify-center">
      <div className="w-full max-w-[1350px] box-border px-6 md:px-10">
        {/* Heading Section */}
        <h2 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[46px] font-[700] md:font-[700] md:font-[700] text-center text-[#0b153c] mb-4">
          Quick, Secure and Easy Payments <br className="hidden md:block" />
          Anytime, Anywhere
        </h2>
        <p className="text-center text-[#8c94a6] mb-12 text-sm md:text-base">
          Leverage the complexity of cross-border transactions for any kind of
          business
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[1350px] bg-[#EDECFD] rounded-[15px] p-8 shadow-sm hover:shadow-md transition-all duration-300 mr-8"
            >
              {/* Top: Image + ID */}
              <div className="flex justify-between items-center mb-1">
                <div className=" w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[70px] h-[60px] object-contain"
                  />
                </div>
                <span className="text-[rgba(29,52,88,0.4)] text-[48px] font-[700]">
                  {item.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-[700] text-[#0b153c] mb-1">
                {item.title}
              </h3>

              {/* Orange underline */}
              <div className="flex gap-1 mb-5">
                <div className="h-[6px] w-12 bg-[#EB5C26] rounded-full"></div>
                <div className="h-[6px] w-3 bg-[#EB5C26] rounded-full"></div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-0 text-[#525F7F] leading-relaxed">
                {item.points.map((point, index) => (
                  <li key={index} className="flex items-baseline gap-2">
                    <span className="text-[#EB5C26] text-3xl leading-none">
                      •
                    </span>
                    <span className="font-[500] text-[18px]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSolutions;
