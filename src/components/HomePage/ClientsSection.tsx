import { ChevronRight } from "lucide-react";
import pressureBoat from "@/assets/pressure-boat.png";

const ClientsSection = () => {
  return (
    <section className="w-full bg-surface-light py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Background circle */}
              <div className="w-80 h-80 bg-background rounded-full mx-auto flex items-center justify-center shadow-lg">
                <img
                  src={
                    "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/3ab1868e-42e4-41f7-97c8-c61cf39b01b3/Hands+up+icon.png"
                  }
                  alt="Leadership team under pressure illustration - boat with conflicting directions"
                  className="w-64 h-64 object-contain"
                />
              </div>
              <h2 className="text-xl lg:text-xl xl:text-2xl font-thin text-text-primary text-center">
                My clients typically look like this.
              </h2>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-6 h-6 bg-brand-gold rounded-full opacity-60"></div>
              <div className="absolute bottom-12 left-12 w-4 h-4 bg-surface-cream rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Pressure Points */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-lg text-text-primary font-medium">
                  <b>Types of businesses:</b> Small- to medium-sized businesses,
                  typically $500M in annual revenue or less.
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-lg text-text-primary font-medium">
                  <b>Types of nonprofits:</b> Medium- to large-sized
                  associations, professional societies, advocacy organizations,
                  and charitable foundations across the U.S.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-lg text-text-primary font-medium">
                  <b>Who I typically support:</b> CEOs and other C-suite
                  officers, board chairs, EVPs, VPS, and directors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
