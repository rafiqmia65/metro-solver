"use client";

import React from "react";

const WhyChooseUsSection = () => {
  // Feature cards data with custom rotation and relative positioning for the right half
  const features = [
    {
      text: "Cancel Anytime",
      bgColor: "bg-[#1a1835]",
      rotate: "-rotate-6",
      pos: "top-0 md:top-10 right-0 md:right-20",
    },
    {
      text: "24/7 Customer Service",
      bgColor: "bg-purple-800",
      rotate: "rotate-3",
      pos: "top-20 md:top-40 left-0 md:left-5",
    },
    {
      text: "Refers & Earn",
      bgColor: "bg-[#1a1835]",
      rotate: "-rotate-3",
      pos: "bottom-20 md:bottom-20 right-0 md:right-10",
    },
    {
      text: "Money Back Guarantee",
      bgColor: "bg-[#1a1835]",
      rotate: "rotate-6",
      pos: "bottom-0 md:bottom-0 left-0 md:left-28",
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
            {/* Optional icon */}
            {/* <Image src="/path/to/icon.png" alt="Book Now Icon" width={20} height={20} /> */}
            <span>Book Now</span>
          </button>
        </div>

        {/* Right side feature cards (using absolute positioning) */}
        {/* The container has a fixed height (h-[450px]) and relative positioning */}
        <div className="md:w-1/2 relative h-[450px] w-full mt-16 md:mt-0">
          {/* A central element to act as a focal point for the other cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 bg-purple-900/30 rounded-full blur-3xl opacity-50"></div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              // Using 'absolute' positioning and 'transform' classes
              className={`absolute px-8 py-4 rounded-full text-white font-semibold text-lg whitespace-nowrap shadow-xl transition-all duration-300 ${feature.bgColor} ${feature.rotate} ${feature.pos}`}
              style={{
                // Custom offset to slightly shift cards left or right
                transform: `translate(${index % 2 === 0 ? "-50%" : "50%"}, 0)`,
              }}
            >
              {feature.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
