import MM from "@/assets/images/5.png";
const MeetWithShaneSection = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 lg:pr-8">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
                <span className="text-primary font-medium">
                  Expert in humans
                </span>{" "}
                leading other humans
              </h2>

              {/* Decorative Arrow */}
              <div className="mb-8 lg:hidden">
                <svg
                  className="w-16 h-16 text-gray-600"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M20 50 Q 50 20, 80 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M70 40 L 80 50 L 70 60"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  I help executive leaders to inspire, cultivate, and positively
                  persuade their fellow leaders as their primary means of
                  driving terrific business outcomes.
                </p>

                <p>
                  I am a certified executive coach and certified master
                  facilitator. I'm also a former Chief Strategy Officer, former
                  COO, and career expert in strategic communications and public
                  affairs. I've spent decades as a consultant to
                  senior-leadership teams and boards of directors.
                </p>
              </div>

              <button className="uppercase mt-8 bg-primary text-white px-8 py-3 rounded font-medium transition-colors duration-200">
                MEET WITH Mohamed
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative">
              {/* Decorative Arrow for Desktop */}
              <div className="hidden lg:block absolute -left-20 top-8">
                <svg
                  className="w-20 h-20 text-gray-600"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M20 30 Q 50 10, 80 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M70 20 L 80 30 L 70 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="relative">
                {/* Main circular image */}
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden bg-gray-300 relative">
                  <img
                    src={MM}
                    alt="Mohamed - Leadership Expert"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative circle */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetWithShaneSection;
