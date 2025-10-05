"use client";

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Navigation bar (you can place <Navbar /> here) */}

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto pt-16 pb-24 px-4 relative z-10 md:flex md:items-center">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Expert to <br />
            Digitalise Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Growth
            </span>
          </h1>

          <p className="text-gray-400 mb-10 max-w-md text-sm">
            We are constantly growing, learning, and improving. Enter your
            personal real estate sanctuary, where finding the ideal home is easy
            and seamless.
          </p>

          <button className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-purple-900/50">
            <Image
              src="/banner/ExpolreNowIcon.png"
              alt="icon"
              width={20}
              height={20}
            />
            <span>Explore Now</span>
          </button>
        </div>

        {/* Video / Graphical Elements */}
        <div className="md:w-1/2 relative h-96 mt-12 md:mt-0 flex justify-center items-center">
          <video
            src="v.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-purple-900/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
