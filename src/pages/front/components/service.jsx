import React, { useState, useRef, useEffect } from "react";
import serviceImage from "../../../assets/service.png";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const services = [
  {
    id: "panel1",
    title: "1. Payment Gateway Integration",
    description:
      "Enable secure and seamless online payments for businesses and customers.",
    features: [
      "Multiple payment methods (UPI, Cards, Wallets)",
      "Real-time transaction tracking",
      "Fraud detection and prevention",
      "Easy reconciliation and reporting",
    ],
  },
  {
    id: "panel2",
    title: "2. Embedded Finance Solutions",
    description:
      "Empower businesses to embed financial services directly into their products.",
    features: [
      "Customizable financial modules",
      "Credit and lending APIs",
      "KYC and compliance automation",
      "Analytics dashboard integration",
    ],
  },
  {
    id: "panel3",
    title: "3. Digital Wallet Infrastructure",
    description:
      "Build branded digital wallets for your business and manage user transactions efficiently.",
    features: [
      "Secure wallet creation and management",
      "User balance tracking",
      "Peer-to-peer transfers",
      "Instant settlements",
    ],
  },
  {
    id: "panel4",
    title: "4. API Banking Platform",
    description:
      "Integrate banking capabilities with your business ecosystem effortlessly.",
    features: [
      "Account opening and management",
      "Virtual account creation",
      "Automated reconciliation",
      "Seamless API documentation",
    ],
  },
  {
    id: "panel5",
    title: "5. Open Banking APIs",
    description:
      "Enable seamless integration between MSME accounting software and payment platforms for better automation and reconciliation.",
    features: [
      "International invoicing and payments",
      "Multi-currency accounts for businesses",
      "Real-time payment tracking and notifications",
      "Automated payment solutions for e-commerce",
    ],
  },
];

const accentBoxShadow = "0 12px 40px rgba(70, 100, 160, 0.10)";
const normalBoxShadow = "0 4px 16px rgba(20,30,40,0.07)";

const Service = () => {
  const [expanded, setExpanded] = useState("panel1");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const panelId = entry.target.dataset.id;
          if (entry.isIntersecting) {
            setExpanded(panelId);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 6 },
        bgcolor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        color="#1a2b42"
        mb={7}
        sx={{ fontSize: { xs: 32, md: 40 }, textShadow: "0 2px 3px #f3f6fa" }}
      >
        Services
      </Typography>

      <Stack alignItems="center" spacing={0}>
        {services.map((service, index) => {
          const isOpenBanking = service.id === "panel5";
          const isActive = expanded === service.id;

          return (
            <motion.div
              key={service.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.09 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                width: "100%",
                maxWidth: "900px", // ⬅️ increased from 640px to 900px
                position: isOpenBanking ? "relative" : "static",
                zIndex: 5 - index,
                marginBottom: isOpenBanking ? 0 : -32,
              }}
            >
              <Accordion
                expanded={isActive}
                component={Paper}
                elevation={0}
                sx={{
                  borderRadius: 4,
                  mt: isOpenBanking ? 0 : 4,
                  boxShadow: isOpenBanking ? accentBoxShadow : normalBoxShadow,
                  bgcolor: isOpenBanking ? "#f7fafc" : "#fff",
                  border: isOpenBanking
                    ? "2.5px solid #dde2ea"
                    : "1px solid #f3f6fa",
                  p: isOpenBanking ? 3.5 : 2,
                  transition: "all 0.25s ease",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#143869" }} />}
                  onClick={() =>
                    setExpanded(isActive ? null : service.id)
                  }
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#143869"
                    sx={{ fontSize: { xs: 18, md: 21 } }}
                  >
                    {service.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    variant="body1"
                    color="#525f72"
                    mb={2}
                    sx={{ fontSize: { xs: 15, md: 16 } }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    color="#1a2b42"
                    mb={1}
                  >
                    Key Features:
                  </Typography>

                  <ul style={{ marginLeft: 24, marginBottom: 0 }}>
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        style={{
                          color: "#f97316",
                          marginBottom: 6,
                          fontSize: 14.7,
                          lineHeight: 1.65,
                          fontWeight: 500,
                        }}
                      >
                        <span style={{ color: "#5c6277", fontWeight: 400 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>

              {isOpenBanking && (
                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: -28, md: -56 },
                    bottom: { xs: -24, md: -30 },
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                >
                 
                </Box>
              )}
            </motion.div>
          );
        })}
      </Stack>

      {/* Background decorative image */}
      <img
        src={serviceImage}
        alt="Coin & Robot Hand"
        className="absolute right-0 bottom-0 w-52 md:w-60 z-10 pointer-events-none"
        style={{ maxWidth: 280 }}
      />
    </Box>
  );
};

export default Service;



// import React, { useState, useEffect, useRef } from "react";

// const services = [
//   {
//     title: "1. International Payments",
//     desc: "Send and receive payments globally with minimal fees.",
//     features: [
//       "Fast transfers across borders",
//       "Low transaction fees",
//       "Multiple currency options",
//       "Secure transactions",
//     ],
//   },
//   {
//     title: "2. Real-Time Notifications",
//     desc: "Get instant updates on all payment activity.",
//     features: [
//       "Immediate alerts",
//       "Configurable notifications",
//       "Multi-channel support",
//       "Mobile-ready",
//     ],
//   },
//   {
//     title: "3. Multi-Currency Accounts",
//     desc: "Operate accounts in multiple currencies for flexibility.",
//     features: [
//       "Hold multiple currencies",
//       "Switch and convert easily",
//       "Detailed reporting",
//       "No hidden charges",
//     ],
//   },
//   {
//     title: "4. Invoice Automation",
//     desc: "Automate invoicing and reconciliation with ease.",
//     features: [
//       "Auto-generate invoices",
//       "Easy reconciliation",
//       "Customizable workflow",
//       "Integrated with accounting tools",
//     ],
//   },
//   {
//     title: "5. Open Banking APIs",
//     desc: "Enable seamless integration between MSME accounting software and payment platforms for better automation and reconciliation",
//     features: [
//       "International invoicing and payments",
//       "Multi-currency accounts for businesses",
//       "Real-time payment tracking and notifications",
//       "Automated payment solutions for e-commerce",
//     ],
//   },
// ];

// const CardStack = () => {
//   const [active, setActive] = useState(4);
//   const lastScrollY = useRef(window.scrollY);
//   const debounce = useRef(false);

//   // Card changes on scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       if (debounce.current) return;
//       debounce.current = true;

//       setTimeout(() => {
//         debounce.current = false;
//       }, 500);

//       const currScrollY = window.scrollY;
//       if (currScrollY > lastScrollY.current) {
//         // Scrolled down, go to next
//         setActive((prev) => (prev + 1) % services.length);
//       } else if (currScrollY < lastScrollY.current) {
//         // Scrolled up, go to previous
//         setActive((prev) => (prev - 1 + services.length) % services.length);
//       }
//       lastScrollY.current = currScrollY;
//     };
//     window.addEventListener("wheel", handleScroll, { passive: false });
//     return () => window.removeEventListener("wheel", handleScroll);
//   }, []);

//   return (
//     <section className="py-10 px-4 md:px-12 lg:px-24 bg-white min-h-[70vh] flex flex-col items-center justify-start relative">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
//         Services
//       </h2>
//       <div className="relative w-full max-w-2xl h-[360px] flex items-center justify-center mb-12">
//         {services.map((serv, i) => {
//           const layer = i - active;
//           // For the inactive cards, space and scale with each layer
//           const scale = 1 - Math.abs(layer) * 0.03;
//           const translateY = Math.abs(layer) * 15 - Math.min(i, active) * 1.5;
//           return (
//             <div
//               key={i}
//               className="absolute left-0 right-0 mx-auto transition-all duration-700 ease-in-out rounded-xl border bg-white"
//               style={{
//                 zIndex: i === active ? 30 : 10 + i,
//                 opacity: i <= active ? 1 : 0.70,
//                 transform: `scale(${scale}) translateY(${translateY}px)`,
//                 boxShadow:
//                   i === active
//                     ? "0 6px 24px rgba(0,0,0,0.13)"
//                     : "0 1px 8px 0px #ececec",
//                 pointerEvents: i === active ? "auto" : "none",
//                 border: i === active ? "none" : "1.5px solid #f1f1f7",
//               }}
//             >
//               <div className="p-8">
//                 <h3 className="text-2xl md:text-2xl font-bold text-[#1a3354] mb-2">
//                   {serv.title}
//                 </h3>
//                 <p className="text-gray-500 mb-5 text-base">{serv.desc}</p>
//                 <span className="font-semibold text-lg text-[#1a3354] mb-2 block">
//                   Key Features:
//                 </span>
//                 <ul className="mb-1">
//                   {serv.features.map((ft, idx) => (
//                     <li key={idx} className="flex items-center gap-2 text-[15px] text-gray-600 mb-2">
//                       <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
//                       {ft}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default CardStack;



// import React, { useState, useEffect, useRef } from "react";
// import serviceImage from "../../../assets/service.png";
// const services = [
//   {
//     title: "1. International Payments",
//     desc: "Send and receive payments globally with minimal fees.",
//     features: [
//       "Fast transfers across borders",
//       "Low transaction fees",
//       "Multiple currency options",
//       "Secure transactions",
//     ],
//   },
//   {
//     title: "2. Real-Time Notifications",
//     desc: "Get instant updates on all payment activity.",
//     features: [
//       "Immediate alerts",
//       "Configurable notifications",
//       "Multi-channel support",
//       "Mobile-ready",
//     ],
//   },
//   {
//     title: "3. Multi-Currency Accounts",
//     desc: "Operate accounts in multiple currencies for flexibility.",
//     features: [
//       "Hold multiple currencies",
//       "Switch and convert easily",
//       "Detailed reporting",
//       "No hidden charges",
//     ],
//   },
//   {
//     title: "4. Invoice Automation",
//     desc: "Automate invoicing and reconciliation with ease.",
//     features: [
//       "Auto-generate invoices",
//       "Easy reconciliation",
//       "Customizable workflow",
//       "Integrated with accounting tools",
//     ],
//   },
//   {
//     title: "5. Open Banking APIs",
//     desc: "Enable seamless integration between MSME accounting software and payment platforms for better automation and reconciliation",
//     features: [
//       "International invoicing and payments",
//       "Multi-currency accounts for businesses",
//       "Real-time payment tracking and notifications",
//       "Automated payment solutions for e-commerce",
//     ],
//   },
// ];

// const CardStack = () => {
//   const [active, setActive] = useState(4);
//   const lastScrollY = useRef(window.scrollY);
//   const debounce = useRef(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (debounce.current) return;
//       debounce.current = true;
//       setTimeout(() => {
//         debounce.current = false;
//       }, 500);

//       const currScrollY = window.scrollY;
//       if (currScrollY > lastScrollY.current) {
//         setActive((prev) => (prev + 1) % services.length);
//       } else if (currScrollY < lastScrollY.current) {
//         setActive((prev) => (prev - 1 + services.length) % services.length);
//       }
//       lastScrollY.current = currScrollY;
//     };
//     window.addEventListener("wheel", handleScroll, { passive: false });
//     return () => window.removeEventListener("wheel", handleScroll);
//   }, []);

//   return (
//     <section className="py-10 px-4 md:px-12 lg:px-24 bg-white min-h-[60vh] flex flex-col items-center justify-start relative">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
//         Services
//       </h2>
//       <div className="relative w-full max-w-2xl h-[350px] flex items-center justify-center mb-12">
//         {services.map((serv, i) => {
//           const layer = i - active;
//           const isActive = i === active;
//           const scale = isActive ? 1 : 0.98 - Math.abs(layer) * 0.03;
//           const translateY = isActive ? 0 : Math.abs(layer) * 15;
//           return (
//             <div
//               key={i}
//               className={`absolute left-0 right-0 mx-auto transition-all duration-700 ease-in-out rounded-xl 
//                 bg-white 
//                 ${isActive ? "shadow-lg" : "shadow-sm border"}`
//               }
//               style={{
//                 zIndex: 30 - Math.abs(layer),
//                 opacity: 1,
//                 transform: `scale(${scale}) translateY(${translateY}px)`,
//                 border: isActive ? "none" : "2px solid #f1f2f7",
//                 boxShadow: isActive
//                   ? "0 6px 24px rgba(0,0,0,0.14)"
//                   : "0 1px 8px 0px #ececec",
//                 pointerEvents: isActive ? "auto" : "none",
//               }}
//             >
//               <div className="p-8">
//                 <h3 className="text-2xl md:text-2xl font-bold text-[#1a3354] mb-2">
//                   {serv.title}
//                 </h3>
//                 <p className="text-gray-500 mb-5 text-base">{serv.desc}</p>
//                 <span className="font-semibold text-lg text-[#1a3354] mb-2 block">
//                   Key Features:
//                 </span>
//                 <ul className="mb-1">
//                   {serv.features.map((ft, idx) => (
//                     <li key={idx} className="flex items-center gap-2 text-[15px] text-gray-600 mb-2">
//                       <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
//                       {ft}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           );
//         })}

        
//       </div>

//       <img
//         src={serviceImage}
//         alt="Coin & Robot Hand"
//         className="absolute right-0 bottom-0 w-52 md:w-52 z-10 pointer-events-none"
//         style={{ maxWidth: 250 }}
//       />
//     </section>
//   );
// };

// export default CardStack;
