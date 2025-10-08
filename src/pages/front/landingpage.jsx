import Navbar from "./components/header";
import HeroSection from "./components/remitohero";
import React from "react";
import Header from "./components/header";
import AboutUs from "./components/about";
import Service from "./components/service";
import Choose from "./components/choose";
import Works from "./components/works";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Service />
      <Choose />
      <Works />
    </div>
  );
};

export default Landingpage;
