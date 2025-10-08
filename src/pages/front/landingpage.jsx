import Navbar from "./components/header";
import HeroSection from "./components/remitohero";
import React from "react";
import Header from "./components/header";
import AboutUs from "./components/about";
import Service from "./components/service";
import Choose from "./components/choose";
import Works from "./components/works";
import LogoSlider from "./components/LogoSlider";
import IndustriesWeServe from "./components/IndustriesWeServe";
import Footer from "./components/footer";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <AboutUs />
      <Service />
      <Choose />
      <Works />
      <IndustriesWeServe />
      <Footer />
    </div>
  );
};

export default Landingpage;
