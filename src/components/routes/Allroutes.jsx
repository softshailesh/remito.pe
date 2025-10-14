import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "../../pages/front/landingpage";
import PublicRoute from "./publicRoute";
import ContactUs from "../../pages/front/contactUs";

const Allroutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default Allroutes;
