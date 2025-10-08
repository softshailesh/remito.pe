import React from "react";
import about1 from "../../../assets/about1.svg";
import about2 from "../../../assets/about2.svg";
import about3 from "../../../assets/about3.svg";

const AboutUs = () => {
    const data = [
        {
            id: "01",
            image: about1,
            title: "Our Mission:",
            subtitle:
                "At Remito.Pe, we are dedicated to simplifying cross-border payments for businesses and individuals across the globe. With an emphasis on security, speed, and affordability, we make global financial transactions effortless and accessible for everyone.",
        },
        {
            id: "02",
            image: about2,
            title: "What We Do:",
            subtitle:
                "We provide a powerful platform that allows you to send and receive payments across borders, without the complexities and high costs traditionally associated with international transfers. Whether you're a small business owner, an online retailer, or an individual sending money abroad, we offer tailored solutions that suit your needs.",
        },
        {
            id: "03",
            image: about3,
            title: "Our Vision:",
            subtitle:
                "To make international payments as easy as sending a message, while ensuring that every transaction is secure, fast, and cost-efficient.",
        },
    ];

    return (
        <section className="bg-[#EDECFD] py-16 px-4 md:px-10 lg:px-20">
            <h2 className="text-5xl md:text-4xl font-bold text-center text-[#0b153c] mb-12">
                About Us
            </h2>

            {/* Horizontal scroll on mobile */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible scroll-smooth no-scrollbar pb-4">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[200px] md:min-w-0 flex-shrink-0 bg-white rounded-[15px] shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left"
                    >
                        <div className="flex justify-between items-center mb-6">
                            {/* Image box instead of icon */}
                            <div className="bg-[#EB5C2626] w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <span className="text-[#1D345866] text-5xl font-bold">
                                {item.id}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#0b153c] mb-2">
                            {item.title}
                        </h3>

                        {/* Double underline (exact as image design) */}
                        <div className="flex gap-1 mb-4">
                            <div className="h-[6px] w-12 bg-[#ff7a00] rounded-full"></div>
                            <div className="h-[6px] w-3 bg-[#ff7a00] rounded-full"></div>
                        </div>

                        {/* Subtitle with responsive max-width */}
                        <p className="text-[#8c94a6] leading-relaxed text-sm md:text-base max-w-[260px] sm:max-w-full">
                            {item.subtitle}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
