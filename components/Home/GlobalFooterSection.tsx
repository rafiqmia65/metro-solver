"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    text: "info@metrosolver.com",
    href: "mailto:info@metrosolver.com",
  },
  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, text: "7901 4th St N, St. Petersburg, FL 33702", href: "#" },
];

const GlobalFooterSection = () => {
  return (
    <section className="bg-[#0f001f] text-white">
      {/* 🌍 Global Office Map Section */}
      <div className="w-full relative">
        <div className="relative w-full h-[450px] overflow-hidden border-t border-purple-800 shadow-2xl shadow-purple-900/40">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.562195046632!2d-82.6401103!3d27.8472081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e3b1db0b5e5f%3A0x4e6b0ff1dd8f50ed!2s7901%204th%20St%20N%2C%20St.%20Petersburg%2C%20FL%2033702%2C%20USA!5e0!3m2!1sen!2sus!4v1695678900000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* 📍 Contact Info Card */}
          <div
            className="absolute top-10 right-10 w-full max-w-sm bg-gray-900/85 backdrop-blur-sm rounded-xl p-6 border border-purple-700 shadow-xl shadow-purple-900/70 z-20
            max-lg:static max-lg:mt-6 max-lg:mx-auto max-lg:w-11/12"
          >
            <h3 className="text-lg font-semibold mb-4 text-purple-300 text-center lg:text-left">
              METRO SOLVER
            </h3>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start space-x-3 text-sm text-gray-300 hover:text-purple-200 transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="break-words">{item.text}</span>
                </a>
              ))}

              <div className="pt-4 text-sm text-gray-500">
                <span className="block">
                  Monday - Friday: 9:00 AM - 5:00 PM EST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFooterSection;
