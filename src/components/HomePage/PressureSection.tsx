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
              Mohamed Mohamud is a:
            </h2>

            {/* Pressure Points */}
            <div className="space-y-4 ">
              <div className="flex items-start space-x-3">
                <span className="text-lg text-text-primary font-medium">
                  Journalist • Keynote Speaker • Author • Playwright • Community
                  Activist
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-text-secondary leading-relaxed">
                <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg">
                  Mohamed Mohamud is a powerful storyteller whose work spans
                  journalism, literature, theatre, and grassroots activism.
                  Through <b>Sideways Productions</b>, he crafts compelling
                  narratives that challenge stereotypes, explore social issues,
                  and give a voice to communities often left unheard.
                </p>
                <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg">
                  {" "}
                  From international speaking engagements to critically
                  acclaimed plays, Mohamed blends truth, creativity, and
                  advocacy to inspire dialogue and action.
                </p>
              </p>

              <p className="text-xl font-semibold text-text-primary pt-2">
                Key Highlights:
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-text-primary font-medium">
                    Published articles in leading media outlets
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-text-primary font-medium">
                    Acclaimed author of Book
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-text-primary font-medium">
                    Award-winning plays performed nationally
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-text-primary font-medium">
                    Community projects driving real-world change
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressureSection;
