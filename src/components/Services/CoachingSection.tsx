import React from "react";

const CoachingSection = () => {
  return (
    <section className="bg-[#f4f1ea] py-16 px-4 md:px-8 text-center relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
          <span className="text-yellow-600 font-bold">
            I help my clients get more out of their people,
          </span>{" "}
          prompting new levels of creative, collaborative problem-solving and
          creating the conditions for responsive, accountable leadership to
          flourish.
        </h2>
        <p className="mt-8 text-base md:text-lg text-gray-800">
          I am trained and certified executive coach by the{" "}
          <span className="font-semibold">Center for Executive Coaching</span>,
          which is accredited by the International Coaching Federation.
        </p>
      </div>
    </section>
  );
};

export default CoachingSection;
