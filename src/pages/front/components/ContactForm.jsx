import React, { useState } from "react";

const ContactForm = () => {
  const [selectedType, setSelectedType] = useState("Freelancer");

  const types = ["Freelancer", "MSME", "E-Comm", "Service"];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-6">
      <div className="w-full  bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-200">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          How Can We Help You Today?
        </h2>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          Share your details, and our team will get back to you within 24 hours.
        </p>

        {/* Select Section */}
        <div className="mt-6">
          <label className="block text-gray-800 font-medium mb-3">
            Select <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2.5 rounded-full border text-sm md:text-base font-medium transition-all duration-200 ${
                  selectedType === type
                    ? "bg-indigo-50 border-indigo-600 text-indigo-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <div className="flex items-center px-3 text-gray-700 border-r border-gray-300 text-sm bg-gray-50">
                🇮🇳 +91
              </div>
              <input
                type="tel"
                placeholder="Enter your number"
                className="w-full px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Select Country <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-gray-800 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="What do we call you?"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-start gap-2 text-xs md:text-sm text-gray-600 leading-relaxed">
            <input
              type="checkbox"
              className="mt-1 accent-indigo-600 cursor-pointer"
            />
            <p>
              By submitting this form, you agree to be contacted by our team. We
              respect your privacy; please read our{" "}
              <a href="#" className="text-indigo-600 underline">
                Privacy Policy
              </a>
              . If you wish to opt out of future communications, please let us
              know via email.
            </p>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="px-8 py-2.5 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
