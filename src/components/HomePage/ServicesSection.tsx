import { Button } from "@/components/ui/button";
import {
  Users,
  Lightbulb,
  Shield,
  Puzzle,
  Megaphone,
  ClipboardList,
  Pen,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Pen,
      title: "Journalism & Writing",
      // subtitle: "For individual leadership growth",
      description:
        "Investigative features, opinion pieces, and cultural commentary that spotlight important issues.",
      // link: "#executive-coaching",
    },
    {
      icon: Lightbulb,
      title: "Keynote Speaking",
      // subtitle: "For strength-based leadership teams",
      description:
        "Powerful, thought-provoking talks for conferences, schools, and corporate events, tailored to inspire and inform.",
      // link: "#management-consulting",
    },
    {
      icon: Shield,
      title: "Theatre & Playwriting",
      // subtitle: "For nonprofit boards of directors",
      description:
        "Bold, socially conscious plays that challenge perceptions and open dialogue.",
    },
    {
      icon: Puzzle,
      title: "Community Engagement",
      description:
        "Workshops, mentorship, and activism that empower individuals and strengthen communities.",
    },
  ];

  return (
    <section className="w-full bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-text-primary">
            What We Do at Sideways Productions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-surface-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <service.icon
                    className="w-8 h-8 text-brand-gold"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                </div>

                <p className="text-text-secondary leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-colors duration-300 font-semibold uppercase tracking-wide text-xs"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
