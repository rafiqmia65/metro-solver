"use client";

import React from "react";
import Image from "next/image";

const LatestWorksSection: React.FC = () => {
  // Portfolio data adjusted to match the screenshot's layout more closely
  // Using relative sizes for colSpan and rowSpan to make it responsive
  const portfolioItems = [
    // Top Row (5 items, some wider)
    { id: 1, src: "/works/image1.png", alt: "Work 1", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
    { id: 2, src: "/works/image2.png", alt: "Work 2", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
    { id: 3, src: "/works/image3.png", alt: "Work 3", colSpan: "col-span-2", rowSpan: "row-span-1" }, // Wider
    { id: 4, src: "/works/image4.png", alt: "Work 4", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
    { id: 5, src: "/works/image5.png", alt: "Work 5", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small

    // Middle Row (Tall and varied items)
    { id: 6, src: "/works/image6.png", alt: "Work 6", colSpan: "col-span-2", rowSpan: "row-span-2" }, // Tall & Wider
    { id: 7, src: "/works/image7.png", alt: "Work 7", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
    { id: 8, src: "/works/image8.png", alt: "Work 8", colSpan: "col-span-2", rowSpan: "row-span-2" }, // Tall & Wider
    { id: 9, src: "/works/image9.png", alt: "Work 9", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small

    // Bottom Row (More regular items)
    { id: 10, src: "/works/image10.png", alt: "Work 10", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
    { id: 11, src: "/works/image11.png", alt: "Work 11", colSpan: "col-span-2", rowSpan: "row-span-1" }, // Wider
    { id: 12, src: "/works/image12.png", alt: "Work 12", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
    { id: 13, src: "/works/image13.png", alt: "Work 13", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
    { id: 14, src: "/works/image14.png", alt: "Work 14", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Small
  ];

  return (
    <section className="bg-[#0e0c24] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title and subtitle */}
        <div className="flex justify-between items-end mb-12 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="text-left"> {/* Added a div for text alignment */}
            <h2 className="text-4xl font-extrabold text-white">
              Our Latest Works
            </h2>
            <p className="text-gray-400 mt-2 text-sm max-w-lg"> {/* Adjusted text size */}
              Check out our recent projects. We are constantly growing, learning, and improving.
            </p>
          </div>
          {/* Optional: See All Projects button */}
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-xl text-sm transition-colors shadow-lg">
            See All Projects
          </button>
        </div>

        {/* Portfolio grid container */}
        {/* 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6' for responsiveness */}
        {/* 'auto-rows-[150px]' sets a base row height, 'grid-flow-dense' helps fill gaps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[150px] grid-flow-dense">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              // Dynamically apply colSpan and rowSpan classes
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              {/* Image component */}
              <Image
                src={item.src}
                alt={item.alt}
                fill // Makes image fill the parent div
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw" // Optimized sizes for responsive images
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold border border-white py-1 px-4 rounded-full">
                  View Case
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWorksSection;
