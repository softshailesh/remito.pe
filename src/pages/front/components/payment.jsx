import React from "react";
import bussinessImage from "../../../assets/bussiness.svg";
import individualImage from "../../../assets/individual.svg";
import msmeImage from "../../../assets/msme.svg";

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
    <section className="bg-white py-16 w-full flex justify-center">
      <div className="w-full max-w-[1350px] box-border px-6 md:px-10">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b153c] mb-4">
          Quick, Secure and Easy Payments <br className="hidden md:block" />
          Anytime, Anywhere
        </h2>
        <p className="text-center text-[#8c94a6] mb-12 text-sm md:text-base">
          Leverage the complexity of cross-border transactions for any kind of
          business
        </p>

        {/* Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible scroll-smooth no-scrollbar pb-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] md:min-w-0 bg-[#EDECFD] rounded-[15px] p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Top: Image + ID */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-[#FFFFFF] w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-9 h-10 object-cover"
                  />
                </div>
                <span className="text-[rgba(29,52,88,0.4)] text-[48px] font-[700]">
                  {item.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[36px] font-[700] text-[#0b153c] mb-1">
                {item.title}
              </h3>

              {/* Orange underline */}
              <div className="flex gap-1 mb-5">
                <div className="h-[6px] w-12 bg-[#EB5C26] rounded-full"></div>
                <div className="h-[6px] w-3 bg-[#EB5C26] rounded-full"></div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-[#525F7F] leading-relaxed">
                {item.points.map((point, index) => (
                  <li key={index} className="flex items-baseline gap-2">
                    <span className="text-[#EB5C26] text-2xl leading-[1]">
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
