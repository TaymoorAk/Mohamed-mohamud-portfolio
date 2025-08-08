import React from "react";

const CoachingOfferSection = () => {
  return (
    <section className="bg-yellow-200 text-gray-800 py-12 px-4 flex items-center justify-center min-h-[200px]">
      <div className="grid grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="text-left">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
            What Coaching
          </h2>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
            <span className="underline">Delivers</span>
          </h2>
        </div>
        <div className="text-left">
          <p className="mb-4 text-text-secondary">
            This isn’t feel-good fluff. The research is clear:
          </p>
          <ul className="list-disc list-inside space-y-2  text-text-secondary">
            <li>Higher self-regulation around goals</li>
            <li>Better actual goal attainment</li>
            <li>Sharper solutions-focused thinking</li>
            <li>Stronger readiness to lead through change</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoachingOfferSection;
