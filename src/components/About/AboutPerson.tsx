import React from "react";
import { Settings } from "lucide-react";
import heroCharacter from "@/assets/images/4.png";
const AboutPersonSection = () => {
  return (
    <div className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight mb-6">
              About <span className="text-primary font-medium">Mohamed</span>
            </h2>

            <div className="text-gray-700 text-lg leading-relaxed">
              <p>
                Mohamed Mohamud is a former chief strategy officer, former COO,
                and a long-time consultant, facilitator, and executive coach for
                leadership teams and boards of directors.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 relative">
            <div className="relative flex items-center justify-center">
              {/* Background decorative circles */}
              <div className="absolute w-64 h-64 bg-primary rounded-full opacity-70"></div>
              <div className="absolute top-8 right-8 w-20 h-20 bg-orange-300 rounded-full"></div>

              {/* Main character illustration */}

              {/* Gear decoration */}
              <div className="relative z-10 flex justify-center">
                <div className="w-72 h-72 bg-surface-light rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={heroCharacter}
                    alt="Professional consultant character illustration"
                    className="w-72 h-72 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPersonSection;
