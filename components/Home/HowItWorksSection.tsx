"use client";

import React from "react";
import {
  Package,
  Phone,
  CheckCircle,
  ClipboardPen,
  Wrench,
  Cog,
} from "lucide-react";

const HowItWorksSection: React.FC = () => {
  // Steps around the circle
  const steps = [
    { number: "01", title: "Delivery and Support", icon: Package },
    { number: "02", title: "Book a Call", icon: Phone },
    { number: "03", title: "Requirement Analysis", icon: ClipboardPen },
    { number: "04", title: "Service Customization", icon: Cog },
    { number: "05", title: "Implement & Develop", icon: Wrench },
    { number: "06", title: "Quality Assurance", icon: CheckCircle },
  ];

  // Angle calculation for circular layout
  const radius = 250; // distance from center
  const center = 300; // container center for absolute positioning

  return (
    <section className="bg-[#0e0c24] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative h-[600px] flex items-center justify-center">
        {/* Central circle */}
        <div className="relative z-10 flex items-center justify-center w-64 h-64 bg-purple-900/30 rounded-full blur-xl text-white font-extrabold p-8 text-center shadow-lg shadow-purple-900/50">
          <h3 className="text-3xl leading-tight">How It Works?</h3>
        </div>

        {/* Steps positioned in a circle */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          const angle = (index / steps.length) * 360; // degrees
          const rad = (angle * Math.PI) / 180; // convert to radians
          const x = center + radius * Math.cos(rad) - 110; // offset for card width
          const y = center + radius * Math.sin(rad) - 25; // offset for card height

          return (
            <div
              key={index}
              className="absolute flex items-center bg-[#1a1835] rounded-full px-6 py-3 shadow-lg hover:shadow-purple-700/30 transition-all duration-300"
              style={{
                top: y,
                left: x,
                minWidth: "220px",
                justifyContent: "flex-start",
              }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-purple-800/30 flex items-center justify-center mr-3">
                <Icon className="text-purple-400 w-5 h-5" />
              </div>
              <span className="text-white text-base font-medium whitespace-nowrap">
                {step.title}
              </span>
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                {step.number}
              </span>
            </div>
          );
        })}

        {/* Background glow effects */}
        <div className="absolute inset-0 top-1/4 left-1/4 w-96 h-96 bg-purple-900 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute inset-0 bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-900 opacity-15 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2 z-0"></div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
