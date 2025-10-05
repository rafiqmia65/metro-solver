"use client";

import React from "react";
import { Users, CheckCircle, Users2 } from "lucide-react";

const StatsSection: React.FC = () => {
  const stats = [
    { value: "150", label: "Current Clients", icon: Users },
    { value: "25k", label: "Completed Projects", icon: CheckCircle },
    { value: "90", label: "Metro Solver Teams", icon: Users2 },
  ];

  return (
    <section className="bg-[#0e0c24] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-[#1a1835] text-center shadow-2xl shadow-purple-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-700/50"
              >
                {/* Value with glowing dot */}
                <div className="flex items-center justify-center text-white mb-2">
                  <span className="text-5xl font-extrabold mr-1">
                    {stat.value}
                  </span>

                  <span className="relative w-2 h-2">
                    <span className="absolute w-full h-full rounded-full bg-yellow-400 opacity-80 blur-sm animate-pulse"></span>
                    <span className="absolute w-full h-full rounded-full bg-yellow-400"></span>
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
