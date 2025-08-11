import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/images/6.png";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-background to-surface-light py-16 lg:py-24">
      <div className="container mx-auto px-10 lg:px-12 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-brand-gold text-2xl lg:text-3xl xl:text-4xl">
              Sideways Productions – Stories That Shift Perspectives
            </h1>
            <h1 className="text-xl lg:text-xl xl:text-2xl font-semibold leading-tight">
              <span className="text-text-primary">
                “Shining Light on Untold Stories.”
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg">
              Through words, performance, and advocacy, Mohamed Mohamud
              challenges narratives, amplifies unheard voices, and inspires
              change.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <Button variant="brand" size="lg" className="px-8 py-3">
                Meet with Mohamed
              </Button>

              {/* Arrow pointing to button */}
              <div className="hidden lg:block">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  className="text-text-primary"
                  fill="none"
                >
                  <path
                    d="M5 35 Q25 5 55 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            {/* Background shapes */}
            <div className="absolute inset-0">
              <div className="w-32 h-32 bg-surface-cream rounded-full absolute top-0 right-16 opacity-60"></div>
              <div className="w-24 h-24 bg-surface-cream rounded-full absolute bottom-16 left-8 opacity-80"></div>
              <div className="w-16 h-16 bg-brand-gold rounded-full absolute top-20 left-12 opacity-70"></div>
              <div className="w-20 h-20 bg-surface-cream rounded-full absolute bottom-8 right-8 opacity-50"></div>

              {/* Geometric shapes */}
              <div className="absolute top-8 right-8 w-12 h-12 border-2 border-text-primary opacity-30 rotate-12">
                <div className="w-full h-full bg-transparent border border-text-primary transform rotate-45"></div>
              </div>

              <div className="absolute bottom-20 right-20 w-8 h-8 bg-text-primary opacity-20 transform rotate-45"></div>
            </div>

            {/* Main character illustration */}
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
    </section>
  );
};

export default Hero;
