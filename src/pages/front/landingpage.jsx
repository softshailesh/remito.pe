import React from "react";
import HeroSection from "./components/remitohero";
import Payment from "./components/payment";
import Service from "./components/service";
import Choose from "./components/choose";
import Works from "./components/works";
import LogoSlider from "./components/LogoSlider";
import IndustriesWeServe from "./components/IndustriesWeServe";
import AboutSection from "./components/about";

const Landingpage = () => {
  return (
    <div>
      <HeroSection />
      <LogoSlider />

      {/* Add IDs for scroll targeting */}
      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="why-remitope">
        <Choose />
      </section>

      <section id="payment">
        <Payment />
      </section>

      <section id="works">
        <Works />
      </section>

      <section id="industries">
        <IndustriesWeServe />
      </section>

     
    </div>
  );
};

export default Landingpage;
