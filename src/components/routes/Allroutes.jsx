import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "../../pages/front/landingpage";
import PublicRoute from "./publicRoute";
import ContactUs from "../../pages/front/contactUs";
import TermsConditions from "../../pages/front/terms&conditions";
import PrivacyPolicy from "../../pages/privacyPolicy";

const Allroutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
      </Route>
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default Allroutes;
