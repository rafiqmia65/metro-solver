"use client";

import React from "react";
import { Users, CheckCircle, Users2 } from "lucide-react";

const StatsSection = () => {
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
                <div className="flex items-center justify-center text-white mb-4 space-x-2">
                  <Icon className="w-10 h-10 text-yellow-400" />
                  <span className="text-5xl font-extrabold">{stat.value}</span>
                </div>

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
