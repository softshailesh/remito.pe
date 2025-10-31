import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("tokenId");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token && user) {
      // ✅ Replace current route in history so Back button can't go to /login or /
      if (location.pathname === "/login" || location.pathname === "/") {
        navigate("/enquiry", { replace: true });
      }

      // ✅ Disable Back/Forward navigation to public routes
      const handlePopState = () => {
        if (location.pathname !== "/enquiry") {
          navigate("/enquiry", { replace: true });
        }
      };
      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [token, user, navigate, location.pathname]);

  // 🚫 Not logged in → redirect to login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in → allow access
  return <Outlet />;
};

export default PrivateRoute;
