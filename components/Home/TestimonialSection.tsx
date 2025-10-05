import React from "react";
import { Star } from "lucide-react";

// Helper function to render stars
const StarRating = ({ count, color }: { count: number; color: string }) => (
  <div className="flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        // Filled stars use the specified color, empty stars use a darker gray
        className={`w-5 h-5 ${
          i < count ? color : "text-gray-700"
        } fill-current`}
      />
    ))}
  </div>
);

// Testimonial Data (for better structure)
const testimonials = [
  {
    name: "George R.",
    role: "CEO of Company A",
    quote:
      "This service is revolutionary. It completely transformed our workflow and boosted our revenue beyond expectations. Highly recommend!",
    rating: 5,
    color: "text-yellow-500",
    bgColor: "bg-gray-900",
    avatarInitial: "R",
  },
  {
    name: "Alex W.",
    role: "Founder of Company B",
    quote:
      "The team's dedication and expertise are unmatched. They delivered a custom solution that perfectly met our complex needs on a tight deadline.",
    rating: 5,
    color: "text-green-400",
    bgColor:
      "bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-500 transform scale-[1.03]", // Highlighted style
    avatarInitial: "A",
  },
  {
    name: "Sarah K.",
    role: "Marketing Lead",
    quote:
      "Fantastic results! Our engagement rate has skyrocketed since implementing their strategies. A true partner in growth.",
    rating: 5,
    color: "text-orange-500",
    bgColor: "bg-gray-900",
    avatarInitial: "S",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-4">
        What People Say
      </h2>
      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        See how we've helped others achieve their goals. Their success is our
        success.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`${t.bgColor} rounded-lg p-6 shadow-2xl transition hover:shadow-purple-500/50`}
          >
            <div className="flex items-start mb-4">
              {/* Avatar Placeholder */}
              <div
                className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center text-xl font-bold ring-2 ${t.color
                  .replace("text-", "ring-")
                  .replace("-500", "-600")} ${t.color
                  .replace("text-", "bg-")
                  .replace("-500", "-900")}/30`}
              >
                {t.avatarInitial}
              </div>
              <div>
                <StarRating count={t.rating} color={t.color} />
                <p className="text-sm font-semibold mt-1 text-gray-300">
                  {t.name}
                </p>
              </div>
            </div>
            <p className="text-gray-300 italic mb-4 text-sm">"{t.quote}"</p>
            <p className={`font-semibold text-xs ${t.color}`}>
              - {t.name}, {t.role}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-white transition"></button>
        <button className="w-3 h-3 rounded-full bg-purple-500"></button>
        <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-white transition"></button>
      </div>
    </div>
  );
};

export default TestimonialSection;
