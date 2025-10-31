import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../../assets/remitologo.svg";
import { loginUser } from "../../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Login Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }
    dispatch(loginUser(formData))
      .unwrap()
      .then(() => {
        navigate("/dashboard"); // ✅ Redirect after success (change path as needed)
      })
      .catch(() => {
        // Error is already handled by slice
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F08A68] px-4">
      <div className="bg-white rounded-md shadow-md border border-lime-300 w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Remito Logo" className="w-36" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-lime-400">
              <div className="bg-[#F08A68] p-5 text-white">
                <FiMail size={18} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="admin@remito.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 text-gray-700 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-lime-400">
              <div className="bg-[#F08A68] p-5 text-white">
                <FiLock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 text-gray-700 outline-none"
              />
              <button
                type="button"
                className="p-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-[#e67a59] cursor-not-allowed" : "bg-[#F08A68] hover:bg-[#e67a59]"
            } text-white font-medium py-3 rounded-md transition`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
