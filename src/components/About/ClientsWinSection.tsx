import React from "react";
import { Target, Plus, Minus } from "lucide-react";

const ClientWinsSection = () => {
  const [openItems, setOpenItems] = React.useState(["new-ceo"]);

  const toggleItem = (value) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const clientWins = [
    {
      id: "new-ceo",
      title: "NEW CEO REPLACED HER INNER COO.",
      content:
        "Working with me, a new-CEO client successfully surmounted the limiting conviction that every operational detail required her attention. She loosened her grip on operational levers and focused her energy on the vision, strategy, and the people parts of running her organization.",
    },
    {
      id: "healthcare-innovation",
      title: "HEALTHCARE-INNOVATION CEO FOUND NEW WAY.",
      content:
        "Through strategic coaching sessions, this healthcare innovation CEO discovered new approaches to leadership that transformed their organizational culture and improved patient outcomes significantly.",
    },
    {
      id: "wellness-tech",
      title: "WELLNESS-TECH CEO EXPANDED HER SOFT-SKILLS RANGE.",
      content:
        "A wellness-tech CEO developed enhanced emotional intelligence and communication skills that resulted in better team collaboration and increased employee satisfaction across all departments.",
    },
    {
      id: "accomplished-cto",
      title: "ACCOMPLISHED CTO DISCOVERED THE UTILITY OF SOFT SKILLS.",
      content:
        "An accomplished CTO learned to balance technical expertise with people leadership, resulting in improved team performance and more effective cross-functional collaboration.",
    },
    {
      id: "ceo-sleep",
      title: "CEO STOPPED LOSING SLEEP OVER LOW-PERFORMING EXECUTIVE OFFICER.",
      content:
        "Through targeted executive coaching strategies, a CEO developed effective approaches for managing underperforming executives, leading to improved team dynamics and better sleep.",
    },
    {
      id: "c-suite-values",
      title: "C-SUITE TEAM UNCOVERED BUSINESS'S DEFINING VALUES.",
      content:
        "A C-suite team worked together to identify and articulate their organization's core values, resulting in clearer decision-making frameworks and improved organizational alignment.",
    },
    {
      id: "elt-five-behaviors",
      title: "ELT ADOPTED FIVE BEHAVIORS OF A COHESIVE TEAM.",
      content:
        "An Executive Leadership Team successfully implemented the Five Behaviors framework, dramatically improving trust, healthy conflict, commitment, accountability, and results focus.",
    },
  ];

  return (
    <div className="bg-orange-50 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Target Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
            Sample client wins.
          </h2>

          <p className="text-gray-600 text-lg">
            Here's a sampling of the successes my clients have celebrated after
            we've worked together.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-12">
          {clientWins.map((item) => (
            <div key={item.id} className="border-b border-gray-300">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200"
              >
                <span className="text-gray-700 font-medium text-sm tracking-wide uppercase">
                  {item.title}
                </span>
                <div className="ml-4">
                  {openItems.includes(item.id) ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              {openItems.includes(item.id) && (
                <div className="pb-6 pr-8">
                  <p className="text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-primary uppercase  text-white px-8 py-3 rounded font-medium transition-colors duration-200">
            MEET WITH Mohamed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientWinsSection;
