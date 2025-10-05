// components/BlogSection.tsx

import React from "react";

// Card Data (for better structure)
const cards = [
  {
    type: "Case Study",
    title: "The Turnaround of a Mid-Level Company",
    summary:
      "A detailed look at how we implemented a new tech stack and consulting strategy to save the company 40% in operating costs.",
    color: "text-purple-400",
    time: "5 min read",
    bgStyle:
      "bg-gray-900 group transition hover:border-purple-500 border border-transparent",
    image: "/images/stock-meeting-1.jpg",
  },
  {
    type: "Success Story",
    title: "Scaling Up a Mid-Size Hyper-Growth Company",
    summary:
      "From Series A to B in 12 months. See the strategy behind their rapid market expansion and product development lifecycle.",
    color: "text-green-400",
    time: "3 min read",
    bgStyle:
      "bg-gradient-to-b from-purple-900 to-black border-2 border-purple-600 transform md:scale-[1.02]", // Highlighted style
    image: "/images/stock-meeting-2.jpg",
  },
  {
    type: "Blog Post",
    title: "5 AI Trends That Will Impact Your Industry",
    summary:
      "An expert analysis of the top emerging technologies and market shifts you need to watch and invest in this year.",
    color: "text-yellow-400",
    time: "7 min read",
    bgStyle:
      "bg-gray-900 group transition hover:border-yellow-500 border border-transparent",
    image: "/images/stock-meeting-3.jpg",
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-4">
        The Success Stories,
      </h2>
      <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-400">
        Case Studies & Blog
      </h2>
      <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
        Dive into our detailed case studies, read our latest success stories,
        and get industry insights from our blog.
      </p>

      {/* Content Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgStyle} rounded-xl shadow-2xl overflow-hidden`}
          >
            {/* Image Placeholder */}
            {/* Note: In a real Next.js app, use the <Image> component */}
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="p-6">
              <span
                className={`text-xs font-semibold ${card.color} uppercase tracking-wider`}
              >
                {card.type}
              </span>
              <h3
                className={`text-xl font-semibold mt-2 mb-2 group-hover:text-white ${card.color} transition`}
              >
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {card.summary}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className={`${card.color.replace("-400", "-500")} hover:${
                    card.color
                  } font-semibold text-sm transition`}
                >
                  Read More &rarr;
                </a>
                <span className="text-xs text-gray-500">{card.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-16">
        <a
          href="#"
          className="inline-block px-10 py-3 text-lg font-medium rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-500/50"
        >
          View All Stories & Blog
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
