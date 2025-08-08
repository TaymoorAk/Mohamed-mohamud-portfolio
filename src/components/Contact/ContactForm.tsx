import React, { useState } from "react";
import { Linkedin } from "lucide-react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Mohamed will get back to you soon.");
  };

  return (
    <div className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-8 leading-tight">
              What if your leadership team operated with{" "}
              <span className="text-primary font-medium">real clarity?</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              My management consulting work cuts through the noise and builds
              the muscle teams need:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-lg font-medium">›</span>
                <span className="text-gray-700 text-lg">
                  Clear direction with shared ownership
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-lg font-medium">›</span>
                <span className="text-gray-700 text-lg">
                  Smarter decision-making frameworks
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-lg font-medium">›</span>
                <span className="text-gray-700 text-lg">
                  Better meetings, fewer misunderstandings
                </span>
              </li>
            </ul>

            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Walk away with a crystal-clear next move for your team—in one
              discovery call.
            </p>

            {/* Contact Mohamed Section with Arrow */}
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
                Contact{" "}
                <span className="text-primary font-medium">Mohamed</span>
              </h3>

              {/* Decorative Arrow */}
              <div className="absolute -right-8 top-8 hidden lg:block">
                <svg
                  className="w-16 h-16 text-gray-600"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M20 30 Q 50 10, 80 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M70 40 L 80 50 L 70 60"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              {/* LinkedIn */}
              <a
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-full transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex-1">
            <div className="space-y-6">
              {/* Name Fields */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Name <span className="text-gray-500">(required)</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email <span className="text-gray-500">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@yourorganization.com"
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 text-sm text-gray-600"
                >
                  SIGN UP FOR NEWS AND UPDATES
                </label>
              </div>

              {/* Organization Name */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Your Role */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded font-medium transition-colors duration-200"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
