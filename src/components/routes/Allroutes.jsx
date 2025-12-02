// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Landingpage from "../../pages/front/landingpage";
// import PublicRoute from "./publicRoute";
// import PrivateRoute from "./privateRoute";
// import ContactUs from "../../pages/front/contactUs";
// import TermsConditions from "../../pages/front/terms&conditions";
// import PrivacyPolicy from "../../pages/privacyPolicy";
// import Login from "../../pages/front/components/login";
// import Enquiry from "../../pages/front/components/enquiry";

// const Allroutes = () => {
//   return (
//     <Routes>
//       {/* 🌐 Public Layout (Navbar + Footer) */}
//       <Route element={<PublicRoute />}>
//         <Route path="/" element={<Landingpage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/terms-conditions" element={<TermsConditions />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       </Route>

//       {/* 🔒 Private Routes */}
//       <Route element={<PrivateRoute />}>
//         <Route path="/enquiry" element={<Enquiry />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Allroutes;



import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "../../pages/front/landingpage";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import ContactUs from "../../pages/front/contactUs";
import TermsConditions from "../../pages/front/terms&conditions";
import PrivacyPolicy from "../../pages/privacyPolicy";
import Login from "../../pages/front/components/login";
import Enquiry from "../../pages/front/components/enquiry";

const Allroutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
      </Route>
      <Route path="/login" element={<Login />} />
        <Route path="/enquiry" element={<Enquiry />} />
    </Routes>
  );
};

export default Allroutes;
