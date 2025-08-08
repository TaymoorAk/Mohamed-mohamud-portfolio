import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

const QuickInsightsSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for signing up!");
  };
  return (
    <div className="w-full">
      <div className="bg-slate-600 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Get my monthly Quick 3 Insights
          </h2>

          <p className="text-white text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Every month, receive three short, easy-to-apply insights on
            persuasive, powerful leadership in service to driving terrific
            outcomes for your business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full lg:w-64 px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full lg:w-64 px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full lg:w-64 px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-slate-600 px-8 py-3 rounded font-medium transition-colors duration-200"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickInsightsSection;
