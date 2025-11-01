import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../pages/front/components/header";
import Footer from "../../pages/front/components/footer";

const PublicRoute = () => {
  const token = localStorage.getItem("tokenId");
  const user = localStorage.getItem("user");

  // 🚫 If logged in → block all public routes
  if (token && user) {
    return <Navigate to="/enquiry" replace />;
  }

  // ✅ Otherwise show normal public layout
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoute;
