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
  const steps = [
    {
      number: "01",
      title: "Delivery and Support",
      icon: Package,
      style: "top-0 left-1/2 -translate-x-1/2",
      smStyle: "top-2 left-1/2 -translate-x-1/2",
    },
    {
      number: "02",
      title: "Book a Call",
      icon: Phone,
      style: "top-1/4 right-0",
      smStyle: "top-1/3 right-2",
    },
    {
      number: "03",
      title: "Requirement Analysis",
      icon: ClipboardPen,
      style: "bottom-1/4 right-0",
      smStyle: "bottom-1/3 right-2",
    },
    {
      number: "04",
      title: "Service Customization",
      icon: Cog,
      style: "bottom-0 left-1/2 -translate-x-1/2",
      smStyle: "bottom-2 left-1/2 -translate-x-1/2",
    },
    {
      number: "05",
      title: "Implement & Develop",
      icon: Wrench,
      style: "bottom-1/4 left-0",
      smStyle: "bottom-1/3 left-2",
    },
    {
      number: "06",
      title: "Quality Assurance",
      icon: CheckCircle,
      style: "top-1/4 left-0",
      smStyle: "top-1/3 left-2",
    },
  ];

  return (
    <section className="bg-[#0e0c24] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center h-[600px] sm:h-[500px] xs:h-[400px]">
        {/* Central Circle hidden on small devices */}
        <div className="relative z-10 flex items-center justify-center w-36 h-36 bg-purple-900/30 rounded-full text-white font-extrabold p-4 text-center shadow-lg shadow-purple-900/50 hidden sm:flex">
          <h3 className="text-xl leading-tight">How It Works?</h3>
        </div>

        {/* Positioned Cards */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className={`absolute flex items-center bg-[#1a1835] rounded-full px-4 sm:px-5 py-2 sm:py-3 shadow-lg hover:shadow-purple-700/30 transition-all duration-300 
                ${step.style} sm:${step.smStyle}`}
              style={{ minWidth: "200px", justifyContent: "flex-start" }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-purple-800/30 flex items-center justify-center mr-3">
                <Icon className="text-purple-400 w-5 h-5" />
              </div>
              <span className="text-white text-sm sm:text-base font-medium whitespace-nowrap">
                {step.title}
              </span>
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                {step.number}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
