import { ChevronRight } from "lucide-react";

const ServicesFAQ = () => {
  return (
    <section className="w-full bg-surface-light py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <h2 className="text-xl lg:text-xl xl:text-2xl font-thin text-text-primary text-center mb-4">
                Frequently Asked Questions
              </h2>

              <div className="w-80 h-80 bg-background rounded-full mx-auto flex items-center justify-center shadow-lg">
                <img
                  src={
                    "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/78fe2232-b194-43de-9d86-861e19d54382/3.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/78fe2232-b194-43de-9d86-861e19d54382/3.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/78fe2232-b194-43de-9d86-861e19d54382/3.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/78fe2232-b194-43de-9d86-861e19d54382/3.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/78fe2232-b194-43de-9d86-861e19d54382/3.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/78fe2232-b194-43de-9d86-861e19d54382/3.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/78fe2232-b194-43de-9d86-861e19d54382/3.png?format=2500w 2500w"
                  }
                  alt="Leadership team under pressure illustration - boat with conflicting directions"
                  className="w-64 h-64 object-contain"
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

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  <b> Who is executive coaching for? </b>
                  <div>
                    It’s for leaders ready to grow—especially when
                    responsibilities, visibility, or stakes have gone up.
                  </div>
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  <b> Is this like therapy or mentoring? </b>
                  <div>
                    No—it’s a structured, goal-focused process to boost your
                    leadership impact, not process your past or hand you advice.
                  </div>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  <b> How long does coaching typically last?</b>
                  <div>
                    Most clients work with me for 3 to 6 months, depending on
                    their goals.
                  </div>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  <b> How often do we meet?</b>
                  <div>
                    Usually twice a month, but we adjust based on your schedule
                    and what’s most useful.
                  </div>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  <b> What kinds of goals can coaching help with?</b>
                  <div>
                    Everything from improving team dynamics to navigating
                    promotion, strategy pivots, or leadership confidence.
                  </div>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className=" text-text-primary ">
                  <b> How do we start?</b>
                  <div>
                    Book a short call—I’ll ask what’s on your plate, and we’ll
                    go from there.
                  </div>
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

export default ServicesFAQ;
