"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Square, Minus, Plus } from "lucide-react";

// --- Data Structures ---

const serviceList = [
  "Digital Marketing",
  "Web & Software Development",
  "Graphic Design & Logo",
  "Multimedia & Video Editing",
  "Creative AR/VR Solutions",
  "E-Commerce Solutions",
  "Talent, Team & Control Systems",
  "Testing, Quality & Frameworks",
  "Support, Network & Enterprise Support",
];

const faqData = [
  {
    question: "What services do you offer in digital marketing?",
    answer:
      "We offer a full spectrum of digital marketing services including SEO, PPC (Pay-Per-Click) advertising, social media management, content creation, email marketing, and comprehensive analytics tracking to ensure maximum ROI.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing significantly boosts brand visibility, drives targeted traffic, generates high-quality leads, and ultimately increases sales. It allows for precise audience targeting and detailed performance measurement, which is crucial for scalable growth.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We measure success using key performance indicators (KPIs) relevant to your goals, such as conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), website traffic increase, and organic keyword rankings. We provide detailed monthly reports.",
  },
  {
    question: "Do you offer local SEO?",
    answer:
      "Yes, we specialize in local SEO strategies, including Google My Business optimization, local citation building, and geographic keyword targeting to help local businesses dominate search results in their service area.",
  },
];

// --- Sub-Component: Accordion Item ---

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-purple-800 py-4 cursor-pointer">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-white hover:text-purple-400 transition-colors duration-300"
        onClick={onClick}
      >
        <span className="pr-4">{question}</span>
        {/* Toggle Icon */}
        <span className="text-purple-400">
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </span>
      </button>

      {/* Answer Content - Uses Tailwind for smooth collapse/expand */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 text-sm leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

// --- Main Component ---

const FAQSection= () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Keeps the first item open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f001f] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Title and Service List */}
        <div className="lg:col-span-4">
          <h2 className="text-5xl font-extrabold mb-12 leading-tight">
            Got Questions? <br />
            Weve got Answers
          </h2>

          {/* Service List */}
          <div className="space-y-4">
            {serviceList.map((service, index) => (
              <div key={index} className="flex items-start">
                {/* Active Indicator (Digital Marketing) */}
                {index === 0 ? (
                  <Square className="w-2.5 h-2.5 mt-2 mr-3 text-yellow-500 fill-yellow-500/50" />
                ) : (
                  <Square className="w-2.5 h-2.5 mt-2 mr-3 text-purple-700 fill-purple-700/50" />
                )}

                <span
                  className={`text-lg font-medium ${
                    index === 0
                      ? "text-yellow-500"
                      : "text-gray-300 hover:text-purple-400 transition-colors"
                  }`}
                >
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Accordion/FAQ */}
        <div className="lg:col-span-8 lg:pl-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-2">
              Popular Questions
            </h3>
            <p className="text-gray-400">
              We compiled answers to the most common questions about our
              services.
            </p>
          </div>

          <div className="space-y-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
