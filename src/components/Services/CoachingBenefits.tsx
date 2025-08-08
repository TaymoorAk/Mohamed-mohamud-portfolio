import { ChevronRight } from "lucide-react";
import pressureBoat from "@/assets/images/1.png";

const CoachingBenefits = () => {
  return (
    <section className="w-full bg-surface-light py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <h2 className="text-xl lg:text-xl xl:text-2xl font-thin text-text-primary text-center mb-3">
                What coaching achieves
              </h2>

              <div className="w-80 h-80 bg-background rounded-full mx-auto flex items-center justify-center shadow-lg">
                <img
                  src={pressureBoat}
                  alt="Leadership team under pressure illustration - boat with conflicting directions"
                  className="w-80 h-80 object-cover rounded-full"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-6 h-6 bg-brand-gold rounded-full opacity-60"></div>
              <div className="absolute bottom-12 left-12 w-4 h-4 bg-surface-cream rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Pressure Points */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Executive coaching results in:
            </h3>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  increased goal-related self-regulation
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  increased work-related goal attainment
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  enhanced solutions-focused thinking
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  greater change readiness.
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm italic text-gray-700">
              (Sources:{" "}
              <span className="italic">
                Harvard Business Review, Journal of Change Management, Journal
                of Positive Psychology, Frontiers in Psychology
              </span>
              )
            </p>

            <button className="uppercase mt-6 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold py-3 px-6 rounded">
              MEET WITH Mohamed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingBenefits;
