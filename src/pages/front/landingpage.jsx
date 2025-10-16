import Navbar from "./components/header";
import HeroSection from "./components/remitohero";
import React from "react";
import Header from "./components/header";
import Payment from "./components/payment";
import Service from "./components/service";
import Choose from "./components/choose";
import Works from "./components/works";
import LogoSlider from "./components/LogoSlider";
import IndustriesWeServe from "./components/IndustriesWeServe";
import Footer from "./components/footer";
import AboutSection from "./components/about";
import ContactForm from "./components/ContactForm";

const Landingpage = () => {
  return (
    <div>
      <HeroSection />
      <LogoSlider />
      <AboutSection />
      <Service />
      <Choose />
      <Payment />
      <Works />
      <IndustriesWeServe />
    </div>
  );
};

export default Landingpage;
