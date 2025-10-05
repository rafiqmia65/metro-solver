"use client";

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    // Main section with dark background and linear gradient
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
            <Image src="/banner/ExpolreNowIcon.png" alt="icon" width={20} height={20}></Image>
            <span>Explore Now</span>
          </button>
        </div>

        {/* Graphical Elements (neon shapes similar to screenshot) */}
        <div className="md:w-1/2 relative h-96 mt-12 md:mt-0">
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Big glowing 'M' shaped boxes */}
            <div className="absolute w-full h-full">
              {/* First Shape */}
              <div className="absolute w-[450px] h-[450px] transform -rotate-12 translate-x-12 translate-y-8">
                <div className="w-full h-full border-4 border-purple-500 rounded-2xl opacity-30 neon-border-lg"></div>
              </div>

              {/* Second Shape */}
              <div className="absolute w-[350px] h-[350px] transform rotate-6 -translate-x-4 -translate-y-8">
                <div className="w-full h-full border-4 border-purple-500 rounded-2xl opacity-50 neon-border-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-right Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-xl shadow-purple-900/50 hover:bg-purple-700 transition-colors">
        <span className="text-white text-xl">🤖</span>
      </div>

      {/* Background gradient / blur glow effects */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-900 opacity-30 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-900 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      {/* Global CSS for neon glow effect */}
      <style jsx global>{`
        .neon-border-lg {
          box-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7;
          border-color: #a855f7;
        }
        .neon-border-md {
          box-shadow: 0 0 8px #a855f7, 0 0 15px #a855f7;
          border-color: #a855f7;
        }
      `}</style>
    </div>
  );
};

export default Banner;
