import React from "react";

const coachingSteps = [
  {
    title: "DISCOVER AND UNDERSTAND",
    img: "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/c1749794-195b-4590-849f-a7e6edec8be1/Lighbulb+icon.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/c1749794-195b-4590-849f-a7e6edec8be1/Lighbulb+icon.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/c1749794-195b-4590-849f-a7e6edec8be1/Lighbulb+icon.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/c1749794-195b-4590-849f-a7e6edec8be1/Lighbulb+icon.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/c1749794-195b-4590-849f-a7e6edec8be1/Lighbulb+icon.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/c1749794-195b-4590-849f-a7e6edec8be1/Lighbulb+icon.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/c1749794-195b-4590-849f-a7e6edec8be1/Lighbulb+icon.png?format=2500w 2500w",
  },
  {
    title: "SET GOAL",
    img: "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a22e93f1-7ba8-485b-b360-abaf76df0556/Bullseye+icon.png",
  },
  {
    title: "CRAFT ACCOUNTABILITY METRICS",
    img: "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/8e3bb88e-0adc-4f86-a143-d47eed346058/Metrics.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/8e3bb88e-0adc-4f86-a143-d47eed346058/Metrics.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/8e3bb88e-0adc-4f86-a143-d47eed346058/Metrics.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/8e3bb88e-0adc-4f86-a143-d47eed346058/Metrics.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/8e3bb88e-0adc-4f86-a143-d47eed346058/Metrics.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/8e3bb88e-0adc-4f86-a143-d47eed346058/Metrics.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/8e3bb88e-0adc-4f86-a143-d47eed346058/Metrics.png?format=2500w 2500w",
  },
  {
    title: "COACH",
    img: "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=2500w 2500w",
  },
  {
    title: "ASSESS PROGRESS AND TRAJECTORY",
    img: "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a17aadad-73dc-46bf-a334-c8cb3d37ada9/Gears+icon.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a17aadad-73dc-46bf-a334-c8cb3d37ada9/Gears+icon.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a17aadad-73dc-46bf-a334-c8cb3d37ada9/Gears+icon.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a17aadad-73dc-46bf-a334-c8cb3d37ada9/Gears+icon.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a17aadad-73dc-46bf-a334-c8cb3d37ada9/Gears+icon.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a17aadad-73dc-46bf-a334-c8cb3d37ada9/Gears+icon.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/a17aadad-73dc-46bf-a334-c8cb3d37ada9/Gears+icon.png?format=2500w 2500w",
  },
  {
    title: "COACH",
    img: "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png?format=2500w 2500w",
  },
  {
    title: "HIT ACCOUNTABILITY GOAL",
    img: "https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/316021ad-ccd3-4a43-b80d-db61375f4536/Asset+3.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/316021ad-ccd3-4a43-b80d-db61375f4536/Asset+3.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/316021ad-ccd3-4a43-b80d-db61375f4536/Asset+3.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/316021ad-ccd3-4a43-b80d-db61375f4536/Asset+3.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/316021ad-ccd3-4a43-b80d-db61375f4536/Asset+3.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/316021ad-ccd3-4a43-b80d-db61375f4536/Asset+3.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/316021ad-ccd3-4a43-b80d-db61375f4536/Asset+3.png?format=2500w 2500w",
  },
];

const CoachingProcess = () => {
  return (
    <section className="bg-[#e7d5ae] py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
        Here’s what coaching looks like:
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
        {coachingSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={step.img} alt={step.title} className="w-16 h-16 mb-4" />
            <p className="text-xs font-semibold uppercase tracking-wide leading-tight text-gray-900">
              {step.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoachingProcess;
