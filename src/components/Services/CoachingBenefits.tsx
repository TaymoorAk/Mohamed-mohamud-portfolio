import { ChevronRight } from "lucide-react";
import pressureBoat from "@/assets/images/1.png";

const CoachingBenefits = () => {
  return (
    <section className="w-full bg-surface-light py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 ">
          {/* Left Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 bg-background rounded-full mx-auto flex items-center justify-center shadow-lg">
                <img
                  src={pressureBoat}
                  alt="Mohamed speaking and storytelling illustration"
                  className="w-80 h-80 object-cover rounded-full"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-6 h-6 bg-brand-gold rounded-full opacity-60"></div>
              <div className="absolute bottom-12 left-12 w-4 h-4 bg-surface-cream rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
              Mohamed’s Work — Stories That Spark Change
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mohamed’s career spans journalism, public speaking, theatre, and
              community activism — each reinforcing the other to create
              meaningful impact.
            </p>

            {/* Journalism & Writing */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Journalism & Writing
              </h3>
              <p className="text-gray-700 mb-4">
                Illuminating truth and amplifying voices through investigative
                features, opinion pieces, and cultural commentary.
              </p>
              <ul className="space-y-2">
                {[
                  "Investigations into social inequality and human rights",
                  "Opinion pieces challenging stereotypes and political narratives",
                  "Cultural essays exploring art, heritage, and identity",
                  "Profiles that bring hidden voices to the forefront",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keynote Speaking */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Keynote Speaking
              </h3>
              <p className="text-gray-700 mb-4">
                Powerful talks that inspire action, blending journalism,
                theatre, and activism.
              </p>
              <ul className="space-y-2">
                {[
                  "The Power of Storytelling in Social Change",
                  "Media, Truth, and Representation",
                  "Migration, Identity, and Belonging",
                  "Building Bridges Across Communities",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Theatre & Playwriting */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Theatre & Playwriting
              </h3>
              <p className="text-gray-700 mb-4">
                Bringing hidden stories to the stage through socially conscious
                plays.
              </p>
              <ul className="space-y-2">
                {[
                  "Realistic, character-driven narratives",
                  "Themes of migration, displacement, and resilience",
                  "Community-based theatre projects involving local voices",
                  "Post-performance Q&A sessions to inspire dialogue",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Engagement */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Community Engagement
              </h3>
              <p className="text-gray-700 mb-4">
                Turning stories into action through workshops, mentorship, and
                collaborative projects.
              </p>
              <ul className="space-y-2">
                {[
                  "Storytelling workshops for youth and aspiring journalists",
                  "Mentorship for emerging writers and playwrights",
                  "Community campaigns addressing social injustice",
                  "Creative collaborations between artists, activists, and educators",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="uppercase mt-6 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold py-3 px-6 rounded">
              Meet With Mohamed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingBenefits;
