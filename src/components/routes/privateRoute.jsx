import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("tokenId");
  const user = localStorage.getItem("user");

  // 🚫 Not logged in → redirect to login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in → allow access
  return <Outlet />;
};

export default PrivateRoute;
