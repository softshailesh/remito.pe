import React, { useState, useRef, useEffect } from "react";
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
  const [expanded, setExpanded] = useState("panel1"); // only one panel open
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const panelId = entry.target.dataset.id;
          if (entry.isIntersecting) {
            setExpanded(panelId); // open only the visible panel
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% of panel visible
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 1, sm: 2, md: 0 }, bgcolor: "#fff" }}>
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
              transition={{ duration: 0.6, delay: index * 0.09, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                width: "100%",
                maxWidth: 640,
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
                  border: isOpenBanking ? "2.5px solid #dde2ea" : "1px solid #f3f6fa",
                  p: isOpenBanking ? 3.5 : 2,
                  transition: "all 0.25s cubic-bezier(.56,.16,.62,1.14)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#143869" }} />}
                  onClick={() => setExpanded(isActive ? null : service.id)} // toggle on click
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#143869"
                    sx={{ fontSize: { xs: 18, md: 21 }, letterSpacing: "-0.4px" }}
                  >
                    {service.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    variant="body1"
                    color="#525f72"
                    fontWeight={400}
                    mb={2}
                    sx={{ fontSize: { xs: 15, md: 16 } }}
                  >
                    {service.description}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={700} color="#1a2b42" mb={1}>
                    Key Features:
                  </Typography>
                  <ul style={{ marginLeft: 24, marginBottom: 0, paddingBottom: 0 }}>
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
                        <span style={{ color: "#5c6277", fontWeight: 400 }}>{feature}</span>
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
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#FFD166,#FF8C42 80%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 24px #edd6b1",
                    }}
                  >
                    <Typography fontSize={36} fontWeight={700} color="#fff">
                      $
                    </Typography>
                  </Box>
                </Box>
              )}
            </motion.div>
          );
        })}
      </Stack>
    </Box>
  );
};



export default Service;
