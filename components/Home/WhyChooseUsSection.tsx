"use client";

import React from "react";
import Image from "next/image"; // If your "Book Now" button has an image icon

const WhyChooseUsSection = () => {
  // Data for the feature cards on the right side
  const features = [
    { text: "Cancel Anytime", bgColor: "bg-[#1a1835]", rotate: "-rotate-6" },
    {
      text: "24/7 Customer Service",
      bgColor: "bg-purple-800",
      rotate: "rotate-3",
    },
    { text: "Refers & Earn", bgColor: "bg-[#1a1835]", rotate: "-rotate-3" },
    {
      text: "Money Back Guarantee",
      bgColor: "bg-[#1a1835]",
      rotate: "rotate-6",
    },
  ];

  return (
    <section className="bg-[#0e0c24] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left side content (text and button) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Why You Choose <br /> Metro Solver?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-sm mb-10">
            We are constantly growing, learning, and improving. Enter your
            personal real estate sanctuary, where finding the ideal home is
            effortless and comfortable with our assistance.
          </p>
          <button className="flex items-center justify-center space-x-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-purple-900/50">
            {/* Optional icon/image for the "Book Now" button */}
            {/* <Image src="/path/to/icon.png" alt="Book Now Icon" width={20} height={20} /> */}
            <span>Book Now</span>
          </button>
        </div>

        {/* Right side feature cards */}
        <div className="md:w-1/2 relative flex flex-col items-center justify-center space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute px-8 py-4 rounded-full text-white font-semibold text-lg whitespace-nowrap shadow-lg transition-all duration-300 transform 
                ${feature.bgColor} ${feature.rotate}
                ${index === 0 ? "-top-10 md:-top-16 -left-10 md:left-20" : ""}
                ${index === 1 ? "top-10 md:top-20 -right-10 md:right-0" : ""}
                ${
                  index === 2
                    ? "bottom-20 md:bottom-20 -left-10 md:left-10"
                    : ""
                }
                ${
                  index === 3
                    ? "-bottom-10 md:-bottom-16 right-0 md:right-20"
                    : ""
                }
              `}
              // You can use inline styles to set random positions and rotations
              // However, using absolute with top/bottom/left/right is better for precise placement
              style={{}}
            >
              {feature.text}
            </div>
          ))}
          {/* A central element that can act as a reference point for other cards */}
          <div className="w-48 h-48 bg-purple-900/30 rounded-full blur-2xl flex items-center justify-center text-white text-xl font-bold opacity-0">
            {/* This div is only for reference and may not be visible */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
