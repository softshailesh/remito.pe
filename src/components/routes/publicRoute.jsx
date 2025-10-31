import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/front/components/header";
import Footer from "../../pages/front/components/footer";

const PublicRoute = () => {
  const token = localStorage.getItem("tokenId");
  const user = localStorage.getItem("user");
  const location = useLocation();

  // ✅ Prevent logged-in users from visiting login or home page again
  const restrictedPaths = ["/login", "/"]; // You can add "/signup" if needed

  if (token && user && restrictedPaths.includes(location.pathname)) {
    return <Navigate to="/enquiry" replace />; // redirect to enquiry or dashboard
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoute;
