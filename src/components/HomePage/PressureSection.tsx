import { ChevronRight } from "lucide-react";
import pressureBoat from "@/assets/images/9.png";

const PressureSection = () => {
  return (
    <section className="w-full bg-surface-light py-16 lg:py-24">
      <div className="container mx-auto px-10 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Background circle */}
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
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-text-primary">
              Your leadership team is{" "}
              <span className="text-brand-gold">under pressure.</span>
            </h2>

            {/* Pressure Points */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-lg text-text-primary font-medium">
                  Economic uncertainty
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-lg text-text-primary font-medium">
                  Political turmoil
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-lg text-text-primary font-medium">
                  Profound pressure to adapt and innovate
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 pt-4">
              <p className="text-lg text-text-secondary leading-relaxed">
                Business as usual just won't cut it anymore, and you feel called
                to lead change.{" "}
                <span className="font-semibold text-text-primary">
                  Good news: effective change leadership in trying times is not
                  only possible but within your reach!
                </span>
              </p>

              <p className="text-xl font-semibold text-text-primary pt-2">
                I can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressureSection;
