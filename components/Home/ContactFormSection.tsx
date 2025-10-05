"use client";

import React from "react";
import {
  Send,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown, // Used for select dropdown icon
} from "lucide-react";

// Social Icons Data
const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const ContactFormSection: React.FC = () => {
  // Common Tailwind style for input/select fields - Adjusted for better purple contrast
  const inputClasses =
    "w-full bg-transparent border-b border-purple-700 focus:border-purple-500 focus:ring-0 text-white placeholder-purple-400/70 py-3 px-0 transition duration-300 focus:outline-none";

  return (
    <section className="bg-[#0f001f] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl p-4 lg:p-10 border border-purple-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Info & Branding - Enhanced Purple/Dark Gradient */}
          <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-purple-900 to-gray-900 flex flex-col justify-center shadow-inner shadow-purple-900/50">
            {/* Logo Placeholder - Adjusted to fit the two-line abstract look */}
            <div className="mb-8">
              <svg
                className="w-16 h-auto text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 100 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Abstract M-like shape with purple strokes */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                  d="M10 50 L30 10 L50 50 M50 50 L70 10 L90 50"
                />
              </svg>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              Still Have A Questions?
            </h2>
            <p className="text-purple-300/80 mb-10">
              We're here to help. Reach out to us using the form or connect
              through our social channels.
            </p>

            {/* Social Icons - Kept original purple background */}
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 transition duration-200"
                >
                  <item.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-4 lg:p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className={inputClasses}
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Company Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    placeholder="Company Name"
                    className={inputClasses}
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Mobile/Phone Number"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Row 3: Service/Department Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <select
                    id="service"
                    className={`${inputClasses} appearance-none`}
                    defaultValue=""
                  >
                    <option
                      value=""
                      disabled
                      className="bg-gray-900 text-gray-500"
                    >
                      Choose Service...
                    </option>
                    <option
                      value="consulting"
                      className="bg-gray-900 text-white"
                    >
                      Consulting Services
                    </option>
                    <option
                      value="development"
                      className="bg-gray-900 text-white"
                    >
                      Web/App Development
                    </option>
                    <option value="support" className="bg-gray-900 text-white">
                      Technical Support
                    </option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <ChevronDown className="absolute right-0 top-3 w-5 h-5 text-purple-400 pointer-events-none" />
                </div>
                <div className="relative">
                  <select
                    id="team"
                    className={`${inputClasses} appearance-none`}
                    defaultValue=""
                  >
                    <option
                      value=""
                      disabled
                      className="bg-gray-900 text-gray-500"
                    >
                      Contact Team...
                    </option>
                    <option value="sales" className="bg-gray-900 text-white">
                      Sales Team
                    </option>
                    <option value="hr" className="bg-gray-900 text-white">
                      HR Department
                    </option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <ChevronDown className="absolute right-0 top-3 w-5 h-5 text-purple-400 pointer-events-none" />
                </div>
              </div>

              {/* Row 4: Subject/Priority */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  placeholder="Your Subject / Priority"
                  className={inputClasses}
                  required
                />
              </div>

              {/* Row 5: Message */}
              <div className="relative mt-8">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className={`${inputClasses} resize-none`}
                  required
                ></textarea>
              </div>

              {/* Submit Button - Bold Purple Gradient */}
              <button
                type="submit"
                className="w-full mt-10 p-4 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 transition duration-300 shadow-xl shadow-purple-500/50 flex items-center justify-center space-x-2"
              >
                <span>Send Your Message</span>
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
