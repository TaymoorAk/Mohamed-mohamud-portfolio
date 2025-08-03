import { Button } from "@/components/ui/button";
import { 
  Users, 
  Lightbulb, 
  Shield, 
  Puzzle, 
  Megaphone, 
  ClipboardList 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Executive Coaching",
      subtitle: "For individual leadership growth",
      description: "Unlock new mindsets and methods to inspire teams, equip them to lead change, and actually lead them successfully but for results.",
      link: "#executive-coaching"
    },
    {
      icon: Lightbulb,
      title: "Management Consulting",
      subtitle: "For strength-based leadership teams",
      description: "Drive real-deal change in response to unavoidable organizational challenges, aligning strategy and functions for sustainable transformation.",
      link: "#management-consulting"
    },
    {
      icon: Shield,
      title: "Board Consulting",
      subtitle: "For nonprofit boards of directors",
      description: "Sharpen focus on these activities and areas that deliver the absolute highest value in management of the organization you govern and serve.",
      link: "#board-consulting"
    },
    {
      icon: Puzzle,
      title: "Planning Facilitation",
      subtitle: "For boards, coalitions, and more",
      description: "Have structured, disciplined conversations about where your organization, coalition, project, or initiative should be and, most importantly, will achieve.",
      link: "#planning-facilitation"
    },
    {
      icon: Megaphone,
      title: "Strategic Communications",
      subtitle: "For senior teams that need to break through",
      description: "Craft and deliver messages and narratives to favorably influence staff, board, donors, and stakeholders during change-leadership scenarios and far beyond.",
      link: "#strategic-communications"
    },
    {
      icon: ClipboardList,
      title: "Fractional Executive",
      subtitle: "For short-term leadership needs",
      description: "Consistent, interim, or fractional executive leadership while you find the next someone to engage easily, learn quickly and bring a facilitative leadership touch.",
      link: "#fractional-executive"
    }
  ];

  return (
    <section className="w-full bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary">
            Here's how I help.
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-surface-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-gold mb-3">
                    {service.subtitle}
                  </p>
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