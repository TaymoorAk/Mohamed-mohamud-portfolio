const PressureCoachingSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-background to-surface-light py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
              <span className="text-text-primary">Coaching Built for</span>{" "}
              <span className="text-brand-gold">Pressure Moments</span>
            </h1>

            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg">
              When the stakes are high and the path isn’t obvious, executive
              coaching helps leaders move forward with clarity and confidence. I
              help clients think more expansively, act more deliberately, and
              lead in a way that invites trust and accountability.
            </p>
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg">
              This work isn’t therapy. It’s not advice. It’s a structured,
              evidence-based process that helps high-performing people become
              even more effective.
            </p>

            <button className=" uppercase bg-primary  text-white px-8 py-3 rounded font-medium transition-colors duration-200">
              MEET WITH Mohamed
            </button>
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
                  src={
                    "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/03af76bb-0bc7-4dbc-bf5c-071d00b58322/Asset+7.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/03af76bb-0bc7-4dbc-bf5c-071d00b58322/Asset+7.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/03af76bb-0bc7-4dbc-bf5c-071d00b58322/Asset+7.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/03af76bb-0bc7-4dbc-bf5c-071d00b58322/Asset+7.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/03af76bb-0bc7-4dbc-bf5c-071d00b58322/Asset+7.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/03af76bb-0bc7-4dbc-bf5c-071d00b58322/Asset+7.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/03af76bb-0bc7-4dbc-bf5c-071d00b58322/Asset+7.png?format=2500w 2500w"
                  }
                  alt="Professional consultant character illustration"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressureCoachingSection;
