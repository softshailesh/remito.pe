
import React, { useEffect, useState } from "react";
import free_trial from "../../../assets/Sign_Up.jpg";
import man_billing from "../../../assets/Receive_Payments.jpg";
import private_mode from "../../../assets/Transaction.jpg";
import wire_transfer from "../../../assets/Secure_Transfers.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Works = () => {
  const steps = [
    {
      title: "Sign Up",
      image: free_trial,
      description:
        "Create an account with us in minutes. Our user-friendly registration process requires only basic personal and business information to get started.",
    },
    {
      title: "Send or Receive Payments",
      image: wire_transfer,
      description:
        "Choose the amount you want to send, select the destination currency, and provide the recipient’s details. It’s that simple.",
    },
    {
      title: "Track Your Transaction",
      image: private_mode,
      description:
        "Get real-time updates on the status of your payment. You’ll know when it’s been received and when funds are available.",
    },
    {
      title: "Enjoy Fast & Secure Transfers",
      image: man_billing,
      description:
        "Your payment is processed swiftly and securely, ensuring your recipient gets the money quickly and without hassle with minimum time.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === steps.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <section className="bg-[#F5F5F5] py-16 flex justify-center overflow-hidden w-full">
      <div className="w-full max-w-[1350px] box-border px-10 md:px-10">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* Left Image */}
          <div className="flex justify-center md:justify-end mb-10 md:mb-0">
            <div className="flex justify-center md:justify-start order-1 md:order-none min-h-[460px] max-h-[460px] bg-white p-[27px] rounded-[10px] shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[activeIndex].image}
                  src={steps[activeIndex].image}
                  alt="How It Works"
                  className="border-2 border-gray-100 rounded-[10px] shadow-sm w-full h-full flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Step Content */}
          <div className="relative flex items-start px-4">
            <div className=" flex-1">
              {steps.map((step, index) => (
                <div
                  onMouseOver={() => { setActiveIndex(index); setHovered(true); }}
                  onMouseOut={() => setHovered(false)}
                  className={`w-full border-l-8 pl-4 transition-all duration-700 ${index === activeIndex
                      ? "border-[#EB5C26]"
                      : "border-[#E2E2E2]"
                    }`}
                >
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
                      className={`text-sm leading-relaxed transition-colors duration-500 pb-5 ${index !== steps.length - 1 ? "border-b-[0.5px]" : ""
                        } ${index === activeIndex ? "text-gray-700" : "text-gray-500"
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
