import React from "react";
import ChooseImage from "../../../assets/chooseus.webp";
import EasyIcon from "../../../assets/icon1.svg";
import SecurityIcon from "../../../assets/icon2.svg";
import PricingIcon from "../../../assets/icon3.svg";
import SupportIcon from "../../../assets/icon4.svg";
import TransparentIcon from "../../../assets/icon5.svg";

const Choose = () => {
  const features = [
    {
      icon: EasyIcon,
      bgColor: "#FBB81F26",
      title: "Easy-to-Use Platform",
      description:
        "Our intuitive interface makes sending and receiving payments as easy as 1-2-3. Whether you’re on desktop or mobile, our platform is designed for maximum convenience.",
    },
    {
      icon: SecurityIcon,
      bgColor: "#EB5C2626",
      title: "Security You Can Trust",
      description:
        "Security is our top priority. We utilize industry-leading encryption and fraud protection systems to ensure your transactions are always safe and secure.",
    },
    {
      icon: PricingIcon,
      bgColor: "#1D345826",
      title: "Affordable Pricing",
      description:
        "No hidden fees, no surprise charges. We offer transparent pricing so you know exactly what you’re paying for before you send any payment.",
    },
    {
      icon: SupportIcon,
      bgColor: "#D02F4426",
      title: "Dedicated Support",
      description:
        "Our customer support team is available 24/7 to assist you with any questions or concerns. Whether you need help with a transaction or have general inquiries, we’re here for you.",
    },
    {
      icon: TransparentIcon,
      bgColor: "#1A9F0B26",
      title: "Transparent, Low-Cost Pricing",
      description:
        "We offer competitive rates and clear pricing structures. You’ll always know the exact cost of sending or receiving payments, with no hidden fees.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 flex justify-center w-full">
      <div className="w-full max-w-[1350px] box-border px-6 md:px-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm rounded-xl p-5 flex items-start space-x-4 hover:shadow-md transition"
                >
                  {/* Icon with inline background color */}
                  <div
                    className="shrink-0 rounded-lg p-3 flex items-center justify-center"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={ChooseImage}
              alt="Why Choose Us visual"
              className=" w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
