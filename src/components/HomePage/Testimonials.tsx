const Testimonials = () => {
  const testimonials = [
    {
      img: "https://i.pravatar.cc/150?img=45",
      quote:
        "Mohamed’s storytelling leaves you thinking long after the lights go down.",
      name: "— Audience Member",
    },
    {
      img: "https://i.pravatar.cc/150?img=12",
      quote:
        "A rare voice who blends journalism and art with community impact.",
      name: "— Event Organizer",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-slate-600 py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 text-center md:text-left">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              {/* Profile Image */}
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full bg-white p-1 mx-auto md:mx-0">
                  <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
                    <img
                      src={t.img}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-white text-lg lg:text-xl font-light leading-relaxed mb-4">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <p className="text-white text-sm font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
