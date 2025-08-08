import React from "react";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

const LeadershipSections = () => {
  return (
    <div className="w-full">
      {/* First Section - Call to Action with Steps */}
      <div className="bg-gray-50 py-16 px-8">
        <div className=" mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left side - CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-6">
              Better leadership{" "}
              <span className="text-primary font-medium">starts here.</span>
            </h2>
            <button className="uppercase bg-primary text-white px-8 py-3 rounded font-medium transition-colors duration-200">
              MEET WITH Mohamed
            </button>
            {/* Decorative icon */}
            <div className="mt-8 bg-secondary rounded-full p-6">
              <Settings className="w-12 h-12 text-gray-600" />
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="flex flex-col space-y-8 lg:ml-12">
            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold text-primary">1.</span>
              <div>
                <h3 className="text-xl font-medium text-gray-800">
                  Get in touch.
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold text-primary">2.</span>
              <div>
                <h3 className="text-xl font-medium text-gray-800">
                  Envision a strategy.
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold text-primary">3.</span>
              <div>
                <h3 className="text-xl font-medium text-gray-800">
                  Drive better results.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSections;
