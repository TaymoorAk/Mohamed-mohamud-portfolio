import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Footer */}
      <footer className="bg-slate-700 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Brand & CTA */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">SP</span>
                </div>
                <div className="text-primary font-medium text-xl uppercase">
                  SIDEWAYS <span className="text-white">Productions</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white text-lg leading-relaxed mb-8 max-w-md">
                Leadership support for pressured management teams and boards of
                directors.
              </p>

              {/* CTA Button */}
              <button className=" uppercase bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded font-medium transition-colors duration-200 mb-8">
                MEET WITH Mohamed
              </button>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-slate-700" />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-primary font-medium text-sm mb-6 tracking-wider">
                NAVIGATION
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-primary  transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary  transition-colors duration-200"
                  >
                    Executive Coaching
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary  transition-colors duration-200"
                  >
                    Management Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary  transition-colors duration-200"
                  >
                    Board Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-primary font-medium text-sm mb-6 tracking-wider opacity-0">
                SERVICES
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-primary  transition-colors duration-200"
                  >
                    Planning Facilitation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary  transition-colors duration-200"
                  >
                    Strategic Communications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary  transition-colors duration-200"
                  >
                    Fractional Executive
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-600 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-white text-sm">
                © 2025 Sideways Productions. All rights reserved.
                <a href="#" className="text-primary  ml-1">
                  Privacy Policy
                </a>
                ,
                <a href="#" className="text-primary  ml-1">
                  Sitemap
                </a>
              </div>

              {/* Cookie Preferences */}
              <button className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded text-sm transition-colors duration-200 border border-slate-500">
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
