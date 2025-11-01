import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-transparent border-t-[#F08A68] border-r-[#F08A68] rounded-full animate-spin"></div>
        <div className="absolute w-6 h-6 bg-white rounded-full"></div>
      </div>

      {/* Loading Text */}
      <p className="text-[#F08A68] font-medium tracking-wide text-sm animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
