import React from "react";
import aboutImage from "../../../assets/about-globe.webp"; // replace with your actual image path
import plane from "../../../assets/about-image.svg";

const AboutSection = () => {
  return (
    <section className="relative bg-[#EDECFD] py-16 px-4 md:px-10 lg:px-64 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start relative">
          <img
            src={aboutImage}
            alt="About Remito.Pe"
            className="w-full max-w-[480px] object-cover rounded-xl z-10"
          />

          {/* Optional: orange dotted background effect (behind image) */}
          <div className="absolute bottom-[-20px] left-[-20px] w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(235,92,38,0.3)_2px,transparent_2px)] bg-[length:12px_12px] rounded-lg"></div>
        </div>

        {/* Right Content */}
        <div className="text-left z-10">
          <h4 className=" font-[700] text-[24px] mb-1">
            About Us
          </h4>

          {/* Orange underline */}
            <div className="flex gap-1 mb-5">
              <div className="h-[6px] w-12 bg-[#EB5C26] rounded-full"></div>
              <div className="h-[6px] w-5 bg-[#EB5C26] rounded-full"></div>
            </div>

          <h2 className="text-[#0B153C] text-[48px] md:text-4xl font-[700] leading-snug mb-6">
            Simplifying Global Payments, <br className="hidden md:block" />
            Empowering Global Growth
          </h2>

          <p className="text-[#525F7F] text-[16px] md:text-base leading-relaxed mb-4 font-[400]">
            At <span className="font-semibold text-[#0B153C]">Remito.Pe</span>, we
            believe sending and receiving money across borders should be as simple as
            sending a message. It is a powerful, secure, and easy-to-use platform that
            makes global payments effortless for businesses and individuals alike.
          </p>

          <p className="text-[#525F7F] text-[16px] md:text-base leading-relaxed mb-4 font-[400]">
            Our mission is to remove the friction traditionally associated with
            international transactions—complex processes, high fees, and long delays.
            Whether you’re a small business expanding globally, a freelancer working with
            overseas clients, or an individual supporting family abroad, we provide a
            fast, secure, and cost-effective solution tailored to your needs.
          </p>

          <p className="text-[#525F7F] text-[16px] md:text-base leading-relaxed mb-4 font-[400]">
            We serve a wide range of industries including e-commerce, travel and tourism,
            freelancing, and import/export businesses. Backed by 24/7 dedicated customer
            support, competitive exchange rates, and the latest in financial technology.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 text-[#0B153C] font-medium text-sm md:text-base">
            <li className="flex items-baseline gap-2">
              <span className="text-[#EB5C26] text-3xl leading-none">•</span>
              <span className=" text-[16px] font-[500] leading-none">Secure and Trusted</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#EB5C26] text-3xl leading-none">•</span>
              <span className=" text-[16px] font-[500] leading-none">Real-Time Tracking</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#EB5C26] text-3xl leading-none">•</span>
              <span className=" text-[16px] font-[500] leading-none">Competitive Exchange Rates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#EB5C26] text-3xl leading-none">•</span>
              <span className=" text-[16px] font-[500] leading-none">Global Reach</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative Plane Image (fixed position) */}
      <img
        src={plane}
        alt="plane path"
        className="absolute bottom-8 right-52 w-[120px] md:w-[180px] lg:w-[200px] opacity-90"
      />
    </section>
  );
};

export default AboutSection;
