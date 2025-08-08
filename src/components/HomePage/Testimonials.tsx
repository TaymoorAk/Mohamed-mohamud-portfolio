import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-600 py-20 px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-white p-1">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.pravatar.cc/150?img=45"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-white text-xl lg:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            "In just a few sessions, Mohamed prompted me with really smart
            questions and exercises that provided clarity and focus for me as I
            navigated something big."
          </blockquote>

          {/* Attribution */}
          <p className="text-white text-sm font-medium">
            — Jessica Bachdahl, (former) CEO, KT Tape
          </p>
        </div>

        {/* Navigation Arrows */}
        {/* <button className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary  rounded-full flex items-center justify-center transition-colors duration-200">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary  rounded-full flex items-center justify-center transition-colors duration-200">
          <ChevronRight className="w-6 h-6 text-white" />
        </button> */}
      </div>
    </div>
  );
};

export default Testimonials;
