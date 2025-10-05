"use client";

import React from "react";
import { Battery, Zap, Smartphone } from "lucide-react";

const BrandsSection: React.FC = () => {
  const brands = [
    { name: "Luminous", icon: Zap },
    { name: "Brembo", icon: Battery },
    { name: "Motorola", icon: Smartphone },
    { name: "Luminous", icon: Zap },
    { name: "Brembo", icon: Battery },
    { name: "Motorola", icon: Smartphone },
  ];

  return (
    <section className="bg-[#0e0c24] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Marquee Container */}
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap space-x-6">
            {brands.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center flex-none w-28 h-28 bg-[#1a1835] rounded-xl shadow-lg hover:shadow-purple-700/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex gap-2">
                    <Icon className="text-purple-400 w-6 h-6 mb-1" />
                  <span className="text-white text-sm font-medium text-center">
                    {brand.name}
                  </span>
                  </div>
                </div>
              );
            })}
            {/* Duplicate items for seamless marquee */}
            {brands.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <div
                  key={`dup-${index}`}
                  className="flex flex-col items-center justify-center flex-none w-28 h-28 bg-[#1a1835] rounded-xl shadow-lg hover:shadow-purple-700/30 transition-all duration-300 transform hover:scale-105"
                >
                  <Icon className="text-purple-400 w-6 h-6 mb-1" />
                  <span className="text-white text-sm font-medium text-center">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS for marquee */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 1.5rem;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default BrandsSection;
