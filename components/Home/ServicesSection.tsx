"use client";

import React from "react";
import {
  SquareTerminal,
  PencilRuler,
  Video,
  Megaphone,
  Lightbulb,
  Search,
  Monitor,
  ShoppingCart,
  Calculator,
  BookOpen,
  Laptop2,
  CloudSun,
  Key,
  Settings,
  GraduationCap,
} from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    { title: "Graphic Design", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: PencilRuler },
    { title: "Web & Software Development", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: SquareTerminal },
    { title: "Multimedia & Video Editing", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Video },
    { title: "Digital Marketing", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Megaphone },
    { title: "Creative Writing Solution", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Lightbulb },
    { title: "SEO", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Search },
    { title: "3D Animation & Visualization", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Monitor },
    { title: "E-Commerce Solution", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: ShoppingCart },
    { title: "Accounting", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Calculator },
    { title: "Special Service", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: BookOpen },
    { title: "Premium Website", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Laptop2 },
    { title: "Premium Domain", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: CloudSun },
    { title: "Proxy", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Key },
    { title: "Maintenance", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: Settings },
    { title: "Academy", description: "We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easy and seamless.", icon: GraduationCap },
  ];

  return (
    <section className="bg-[#0e0c24] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Optional offer badge */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-purple-700 text-white text-xs font-semibold rounded-lg tracking-wider">
            Get My 15% OFF X
          </span>
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Our Services</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm">
            Find your professional staff and software solutions, where finding the ideal business partner is easy and seamless with our dedicated platform.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-2xl h-full bg-[#1a1835] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#1a1835] hover:to-[#2c284c] hover:border hover:border-purple-600 hover:shadow-xl hover:shadow-purple-900/50 hover:scale-[1.03]"
              >
                <div className="flex items-start space-x-4 mb-4">
                  {/* Icon container */}
                  <div className="p-3 rounded-xl flex-none bg-purple-800/20 hover:bg-purple-700/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-purple-400 hover:text-white transition-colors duration-300" />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mt-1">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                {/* Read More link */}
                <a
                  href="#"
                  className="text-xs font-medium text-purple-400 hover:text-white transition-colors duration-300"
                >
                  Read More &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
