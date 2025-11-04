import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import AnimatedNumber from "./animatenumber";
import remito_hero from "../../../assets/remito_hero.webp"; // Background image
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [money, setmoney] = useState({
    clientPays: 6500,
    youReceive: 569759,
    bankAmount: 562767,
    paypalAmount: 520173,
    conversionRate: 88.1192,
    saving: 23500,
  });

  // Slider scale marks
  const RangeMarks = () => (
    <div className="flex justify-between text-xs text-gray-400 px-1 mb-1 select-none">
      <span>500</span>
      <span>10K</span>
      <span>100K</span>
      <span>1M</span>
    </div>
  );

  return (
    <section
      style={{ backgroundImage: `url(${remito_hero})` }}
      className="bg-[#fff8f2] bg-cover bg-center bg-no-repeat py-14  min-h-[600px] w-full flex justify-center items-center relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 w-full max-w-[1350px] px-6 md:px-10 box-border">
        <div className="w-full md:w-[70%] text-center md:text-left flex flex-col justify-center space-y-10">
          <h1 className="font-bai text-[30px] sm:text-[28px] md:text-[36px] lg:text-[46px] font-[700] md:font-[700] text-[#0a2a57] leading-[110%] tracking-[0] mb-2">
            Seamless Global <br />
            Payments. Simplified for You.
            <br />
            <span className="text-yellow-500 text-[30px] sm:text-[36px] md:text-[48px] lg:text-[54px] align-middle pl-2 font-[700]">
              ₹<AnimatedNumber to={money.saving} />
            </span>
          </h1>

          <p className="text-gray-500 text-[18px] md:text-lg max-w-3xl mb-2 mt-4 font-[400] ">
            Expand your business, streamline your operations, and connect with
            the world through secure, fast, and reliable cross-border payment
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 mt-4">
            <button
            onClick={() => window.open("https://portal.remito.pe/", "_blank")}
             className="flex items-center justify-center gap-2 bg-[#FBB81F26] text-[#FBB81F]  cursor-pointer font-medium px-10 py-3 rounded-md hover:bg-yellow-200 transition w-full sm:w-auto">
              Get started <FaArrowRight className="text-sm" />
            </button>
            <button
             onClick={() => navigate("/contact-us")}
             className="border border-orange-300 text-[#EB5C26] font-medium px-10 py-3 rounded-md cursor-pointer hover:bg-orange-50 transition w-full sm:w-auto bg-[#EB5C2626]">
              Book for demo
            </button>
          </div>
        </div>

        {/* RIGHT CARD - Reduced width & height */}
        <div className="w-full md:w-[40%] bg-white rounded-2xl shadow-xl p-5 pt-6 max-h-[420px] overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="w-[65%] flex flex-col items-start gap-2">
              <span className="text-gray-500 text-[14px] font-medium mb-1">
                Client pays
              </span>
              <input
                type="number"
                value={money.clientPays}
                min={500}
                max={1000000}
                onChange={(e) => {
                  const clientPays = parseFloat(e.target.value) || 0;
                  const conversionRate = money.conversionRate;
                  const youReceive = Math.floor(clientPays * conversionRate);
                  const bankAmount = Math.floor(youReceive * 0.988);
                  const paypalAmount = Math.floor(youReceive * 0.913);
                  const saving = youReceive - paypalAmount;
                  setmoney({
                    clientPays,
                    youReceive,
                    bankAmount,
                    paypalAmount,
                    conversionRate,
                    saving,
                  });
                }}
                className="w-full border-none bg-transparent text-left text-[#0a2a57] text-[30px] font-bold focus:outline-none p-0"
                aria-label="Client Pays"
              />
            </div>
            <div className="w-[30%] flex items-center gap-2 justify-end">
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USD flag"
                className="h-4"
              />
              <select className="bg-transparent text-[#0a2a57] text-[24px] font-[700] focus:outline-none cursor-pointer pr-2">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>

          <RangeMarks />
          <input
            type="range"
            min="500"
            max="1000000"
            step={50}
            value={money.clientPays}
            className="w-full accent-[#0a2a57] mb-4"
            onChange={(e) => {
              const clientPays = parseFloat(e.target.value) || 0;
              const conversionRate = money.conversionRate;
              const youReceive = Math.floor(clientPays * conversionRate);
              const bankAmount = Math.floor(youReceive * 0.988);
              const paypalAmount = Math.floor(youReceive * 0.913);
              const saving = youReceive - paypalAmount;
              setmoney({
                clientPays,
                youReceive,
                bankAmount,
                paypalAmount,
                conversionRate,
                saving,
              });
            }}
            aria-label="Client Pays Slider"
          />

          <div className="text-center bg-gray-50 py-2 rounded-md text-sm font-semibold text-[#0a2a57] mb-5">
            1 USD ={" "}
            <span className="text-orange-500 font-bold">88.1192 INR</span>
          </div>

          <div className="flex justify-between items-center pb-1">
            <div>
              <p className="text-gray-500 text-xs mb-1">You’ll receive</p>
              <p className="text-[#0a2a57] font-bold text-2xl">
                ₹<AnimatedNumber to={money.youReceive} />
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="INR flag"
                className="h-4"
              />
              <span className="text-[#0a2a57] font-semibold text-[26px] pl-1">
                INR
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div className="border-t pt-3">
              <p className="text-gray-500">Banks</p>
              <p className="text-[#0a2a57] font-bold">
                ₹<AnimatedNumber to={money.bankAmount} />
              </p>
              <p className="text-red-500 text-xs">You lose: 1.2%</p>
            </div>
            <div className="border-t pt-3">
              <p className="text-gray-500">cards </p>
              <p className="text-[#0a2a57] font-bold">
                ₹<AnimatedNumber to={money.paypalAmount} />
              </p>
              <p className="text-red-500 text-xs">You lose: 8.7%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
