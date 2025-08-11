import MM from "@/assets/images/13.png";
const ExpertHumanSection = () => {
  return (
    <div className="bg-orange-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="flex-1 relative">
            {/* Decorative Arrow */}
            <div className="absolute -top-8 left-8 lg:left-16">
              <svg
                className="w-16 h-16 text-gray-600"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M30 20 Q 50 5, 70 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M60 10 L 70 20 L 60 30"
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
                  className="w-full h-full object-cover sepia"
                  style={{
                    filter: "sepia(100%) saturate(0.3) brightness(0.8)",
                  }}
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 lg:pl-8">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight mb-8">
              <span className="text-primary font-medium">Expert in </span>{" "}
              Stories Driving Change
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Mohamed is an award-winning journalist, playwright, and keynote
                speaker whose work bridges media, art, and activism. He crafts
                stories that challenge injustice, explore identity, and inspire
                social action. From global stages to grassroots workshops,
                Mohamed connects with audiences through truth and empathy. His
                leadership in storytelling has sparked dialogue, shifted
                perspectives, and empowered communities worldwide.
              </p>
            </div>

            <button className=" uppercase mt-8 bg-primary  text-white px-8 py-3 rounded font-medium transition-colors duration-200">
              MEET WITH Mohamed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertHumanSection;
