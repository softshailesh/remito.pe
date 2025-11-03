import React from "react";
import globeIcon from "../../../assets/Global_Payment_Solutions.svg";
import currencyIcon from "../../../assets/Multi_Currency_Accounts.svg";
import blockchainIcon from "../../../assets/Blockchain_Based_Solutions.svg";
import tradeIcon from "../../../assets/Trade_Finance_Tools.svg";
import apiIcon from "../../../assets/Open_Banking_APIs.svg";
import linkIcon from "../../../assets/Payment_Links.svg";

const features = [
  {
    img: globeIcon,
    title: "Global Payment Solutions",
    description:
      "We enable seamless transfers in over 35 currencies, connecting businesses and individuals to their global partners, customers, and suppliers.",
  },
  {
    img: currencyIcon,
    title: "Multi-Currency Accounts",
    description:
      "Accept payments in multiple currencies, while settling in your preferred currency. We take care of the conversion and compliance, so you can focus on your business.",
  },
  {
    img: blockchainIcon,
    title: "Blockchain-Based Solutions",
    description:
      "Use of stablecoins (e.g., USDC, USDT) and blockchain platforms to reduce cost and improve settlement time.",
  },
  {
    img: tradeIcon,
    title: "Trade Finance Tools",
    description:
      "Export/import financing, invoice factoring, and credit insurance to reduce payment risk and improve liquidity.",
  },
  {
    img: apiIcon,
    title: "Open Banking APIs",
    description:
      "Enable seamless integration between MSME accounting software and payment platforms for better automation and reconciliation.",
  },
  {
    img: linkIcon,
    title: "Payment Links",
    description:
      "Generate one-time or recurring payment links that can be sent via email, SMS, WhatsApp, or embedded on your website. No coding required.",
  },
];

const CrossBorderPayments = () => {
  return (
    <section className="bg-white py-16 mediascreenmob px-6 md:px-10">
      <div className="max-w-[1350px] px-6 md:px-10 mx-auto text-center">
        <h2 className="text-[#0A1F44] text-[26px] sm:text-[28px] md:text-[36px] lg:text-[46px] font-[700] md:font-[700] leading-snug mb-12">
          Simplify cross-border payments <br className="hidden sm:block" /> for
          businesses
        </h2>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className=" inline-flex items-center justify-center w-[80px] h-[83px] rounded-full mb-4">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-[70px] h-[60px] object-contain"
                />
              </div>
              <h3 className="text-[22px] font-[700] text-[#0A1F44] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#9A9A9A]  leading-relaxed text-[16px] font-[400]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossBorderPayments;
