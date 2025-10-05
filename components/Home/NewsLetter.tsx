import React from "react";
import { Send } from "lucide-react"; // For the Send icon on the button
import Link from "next/link";
import Image from "next/image";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-[#0f001f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-gray-900 to-[#1a0033] p-8 md:p-12 lg:p-16 shadow-2xl border border-purple-800">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Company Logo and Name */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/Navbar/Frame.png"
                alt="Logo"
                width={80}
                height={80}
                priority
              />
            </Link>

            {/* Text */}
            <div className="text-3xl font-extrabold tracking-widest leading-none">
              METRO SOLVER
              <p className="text-sm font-light tracking-normal text-purple-300/80 mt-1">
                YOUR #1 PARTNER
              </p>
            </div>
          </div>

          {/* Newsletter Subscription Content */}
          <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            {/* Left Side: Text Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-extrabold mb-3 leading-tight">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-purple-300/80 text-lg">
                Join the 25000+ clients in our company
              </p>
            </div>

            {/* Right Side: Subscription Form */}
            <div className="w-full flex justify-center lg:justify-end">
              <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full flex-grow p-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors shadow-inner"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 transition duration-300 shadow-xl shadow-purple-500/50 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
