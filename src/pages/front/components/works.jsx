import React, { useEffect, useState } from "react";
import HowImage from "../../../assets/Works.webp";

const Works = () => {
  const steps = [
    {
      title: "Sign Up",
      description:
        "Create an account with us in minutes. Our user-friendly registration process requires only basic personal and business information to get started.",
    },
    {
      title: "Send or Receive Payments",
      description:
        "Choose the amount you want to send, select the destination currency, and provide the recipient’s details. It’s that simple.",
    },
    {
      title: "Track Your Transaction",
      description:
        "Get real-time updates on the status of your payment. You’ll know when it’s been received and when funds are available.",
    },
    {
      title: "Enjoy Fast & Secure Transfers",
      description:
        "Your payment is processed swiftly and securely, ensuring your recipient gets the money quickly and without hassle with minimum time.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === steps.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="border-4 border-gray-100 rounded-2xl p-3 shadow-sm">
              <img
                src={HowImage}
                alt="How It Works"
                className="rounded-xl object-cover w-full max-w-md"
              />
            </div>
          </div>

          {/* Right Steps */}
          {/* <div className="relative flex items-start"> */}
          {/* <div class="flex flex-col items-center h-96">
              <div class="w-4 h-16 bg-orange-500 rounded-t"></div>
              <div class="w-4 h-full bg-gray-200"></div>
            </div> */}

          {/* Vertical Progress Bar */}




          {/* Step Content */}
          <div className="relative flex items-start">
            <div className=" flex-1">
              {steps.map((step, index) => (
                <div className={`w-full border-l-8 pl-4 transition-all duration-700 ${index===activeIndex ?  "border-[#EB5C26]" :  "border-[#E2E2E2]"}`}>
                  <div
                    key={index}
                    className={`transition-all duration-700 ${index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-50 translate-x-2"
                      }`}
                  >
                    <h3
                      className={`text-lg font-semibold mb-2 transition-colors duration-500 ${index === activeIndex
                        ? "text-[#E65A24]"
                        : "text-slate-700"
                        }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 pb-5 border-b-[0.5px] ${index === activeIndex
                        ? "text-gray-700"
                        : "text-gray-500"
                        }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Works;


