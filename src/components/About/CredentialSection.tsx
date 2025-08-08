import React from "react";
import { MessageSquare, Award } from "lucide-react";

const CredentialsSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Published Articles Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
          {/* Left Content */}
          <div className="flex-1 lg:pr-8 justify-center">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-light text-gray-800 mb-8 leading-tight">
              A respected voice on topics of{" "}
              <span className="text-primary font-medium">
                executive leadership.
              </span>
            </h2>

            {/* Illustration */}
            <div className="flex items-center justify-start mb-8 lg:mb-0">
              <div className="relative">
                {/* Background circle */}
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* Podium illustration */}
                  <div className="relative">
                    {/* Person on podium */}
                    <div className="w-8 h-8 bg-gray-600 rounded-full mb-1"></div>
                    <div className="w-6 h-4 bg-gray-600 rounded-t mx-auto"></div>
                    {/* Podium */}
                    <div className="w-12 h-6 bg-primary mt-1"></div>
                  </div>
                </div>
                {/* Speech bubble */}
                <div className="absolute -top-2 -right-8">
                  <MessageSquare className="w-8 h-8 text-primary fill-orange-100" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Articles List */}
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800 mb-6">
              Published Articles:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div>
                  <span className="text-gray-700">
                    How to lead someone you don't like very much{" "}
                  </span>
                  <span className="text-primary italic">
                    (The CEO Magazine)
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div>
                  <span className="text-gray-700">
                    How to embrace emotional situations in the workplace{" "}
                  </span>
                  <span className="text-primary italic">
                    (The CEO Magazine)
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div>
                  <span className="text-gray-700">
                    How to be a leader people want to follow{" "}
                  </span>
                  <span className="text-primary italic">
                    (The CEO Magazine)
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div>
                  <span className="text-gray-700">
                    Have an executive team members who's struggling? Here's how
                    to deal with it{" "}
                  </span>
                  <span className="text-primary italic">
                    (Senior Executive)
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div>
                  <span className="text-gray-700">
                    Let your leaders lead: the case for loosening your grip on
                    your domain expertise{" "}
                  </span>
                  <span className="text-primary italic">
                    (Senior Executive)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-8 leading-tight">
              The formal{" "}
              <span className="text-primary font-medium">credentials.</span>
            </h2>

            {/* Illustration */}
            <div className="flex items-center justify-start">
              <div className="relative">
                {/* Award/Certificate illustration */}
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center relative">
                  <Award className="w-10 h-10 text-white" />
                  {/* Medal ribbon */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-8 bg-orange-300"></div>
                    <div className="w-4 h-2 bg-orange-500 transform rotate-45 origin-top-left"></div>
                    <div className="w-4 h-2 bg-orange-500 transform -rotate-45 origin-top-right -mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Credentials List */}
          <div className="flex-1">
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div className="text-gray-700 leading-relaxed">
                  <strong>Certified Executive Coach</strong>, trained and
                  credentialed by the Center for Executive Coaching (CEC), an
                  "Approved Coach Training Provider" (ACTP) of the International
                  Coaching Federation (ICF).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div className="text-gray-700 leading-relaxed">
                  <strong>Member</strong> of the International Coaching
                  Federation (ICF).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div className="text-gray-700 leading-relaxed">
                  <strong>Certified Master Facilitator</strong> by the Center
                  for Executive Coaching (CEC).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">›</span>
                <div className="text-gray-700 leading-relaxed">
                  <strong>Accredited Facilitator:</strong> the Five Behaviors, a
                  Wiley-brand training program and credential based on the
                  brilliant and simple team-development framework first
                  represented in Patrick Lencioni's{" "}
                  <em>Five Dysfunctions of a Team</em>.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredentialsSection;
