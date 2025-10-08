import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import remito_hero from "../../../assets/remito_hero.webp";
import AnimatedNumber from "./animatenumber";



const HeroSection = () => {
  const [money, setmoney] = useState({
    clientPays: 6500,
    youReceive: 569759,
    bankAmount: 562767,
    paypalAmount: 520173,
    conversionRate: 88.1192,
    saving: 23500,
  });
  
  return (
    <section style={{ backgroundImage: `url(${remito_hero})` }}
     className="bg-[#fff8f2] bg-cover bg-center bg-no-repeat py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* LEFT CONTENT */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a2a57] leading-tight">
          Seamless Global <br />
          Payments. Simplified for <br />
          You. <AnimatedNumber to={money.saving} />
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-lg">
          Expand your business, streamline your operations, and connect with the
          world through secure, fast, and reliable cross-border payment
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button className="flex items-center justify-center gap-2 bg-yellow-100 text-yellow-600 font-medium px-6 py-3 rounded-md hover:bg-yellow-200 transition w-full sm:w-auto">
            Get started <FaArrowRight className="text-sm" />
          </button>
          <button className="border border-orange-300 text-orange-400 font-medium px-6 py-3 rounded-md hover:bg-orange-50 transition w-full sm:w-auto">
            Book for demo
          </button>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="flex-1 w-full md:w-[400px] lg:w-[420px] bg-white rounded-2xl shadow-md p-6">
        {/* Input */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-500 text-sm font-medium">Client pays</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={money.clientPays}
              onChange={(e) => {
                const clientPays = parseFloat(e.target.value) || 0;
                const conversionRate = money.conversionRate;
                const youReceive = Math.floor(clientPays * conversionRate);
                const bankAmount = Math.floor(youReceive * 0.988);
                const paypalAmount = Math.floor(youReceive * 0.913);
                const saving = youReceive - paypalAmount;
                setmoney({
                  clientPays: clientPays,
                  youReceive: youReceive,
                  bankAmount: bankAmount,
                  paypalAmount: paypalAmount,
                  conversionRate: conversionRate,
                  saving: saving,
                });
              }}
              className="w-20 border-none bg-transparent text-[#0a2a57] text-lg font-semibold focus:outline-none text-right"
            />
            <div className="flex items-center gap-1">
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USD"
                className="h-4"
              />
              <select className="bg-transparent text-[#0a2a57] font-semibold text-sm focus:outline-none cursor-pointer">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min="500"
          max="1000000"
          value={money.clientPays}
          className="w-full accent-[#0a2a57] mb-6"
          onChange={(e) => {
            const clientPays = parseFloat(e.target.value) || 0;
            const conversionRate = money.conversionRate;
            const youReceive = Math.floor(clientPays * conversionRate);
            const bankAmount = Math.floor(youReceive * 0.988);
            const paypalAmount = Math.floor(youReceive * 0.913);
            const saving = youReceive - paypalAmount;
            setmoney({
              clientPays: clientPays,
              youReceive: youReceive,
              bankAmount: bankAmount,
              paypalAmount: paypalAmount,
              conversionRate: conversionRate,
              saving: saving,
            });
          }}
        />

        {/* Conversion Rate */}
        <div className="text-center bg-gray-50 py-2 rounded-md text-sm font-medium text-[#0a2a57] mb-6">
          1 USD = <span className="text-orange-500">88.1192 INR</span>
        </div>

        {/* Conversion Result */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm mb-1">You’ll receive</p>
            <p className="text-[#0a2a57] font-bold text-xl">
              <AnimatedNumber to={money.youReceive} />
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="INR"
              className="h-4"
            />
            <span className="text-[#0a2a57] font-semibold text-sm">INR</span>
          </div>
        </div>

        {/* Bank Comparison */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="border-t pt-3">
            <p className="text-gray-500">Banks</p>
            <p className="text-[#0a2a57] font-semibold">
              <AnimatedNumber to={money.bankAmount} />
            </p>
            <p className="text-red-500 text-xs">You lose: 1.2%</p>
          </div>
          <div className="border-t pt-3">
            <p className="text-gray-500">PayPal</p>
            <p className="text-[#0a2a57] font-semibold">
              <AnimatedNumber to={money.paypalAmount} />
            </p>
            <p className="text-red-500 text-xs">You lose: 8.7%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
