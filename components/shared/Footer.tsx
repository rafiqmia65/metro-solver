"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: ["Home", "About us", "Our Team", "User Profile", "White Labeling"],
  },
  {
    title: "About Us",
    links: ["Our Stories", "Career", "Send Message", "Blog"],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Contact Us",
      "Privacy Policy",
      "Terms and Conditions",
      "Start Earning",
    ],
  },
  {
    title: "Services",
    links: [
      "Digital Marketing",
      "Creative Writing Solution",
      "Web & Software Development",
      "E-Commerce Solution",
      "Graphic Design",
      "Multimedia & Video Editing",
      "Merchandise",
      "Premium Website",
      "Premium Domains",
      "Special Combo",
    ],
  },
];

const partnerLogos = [
  { name: "Meta Business Partner", src: "/logos/meta.svg" },
  { name: "Google Marketing Platform", src: "/logos/google-marketing.svg" },
  { name: "Microsoft Partner", src: "/logos/microsoft.svg" },
  { name: "AWS Partner", src: "/logos/aws.svg" },
  { name: "Google Partner", src: "/logos/google.svg" },
  { name: "Amazon SPN", src: "/logos/amazon.svg" },
  { name: "TikTok Marketing Partners", src: "/logos/tiktok.svg" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0033] text-white pt-16 pb-0 px-4 sm:px-6 lg:px-8 border-t border-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* ---------- Top Section ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              Got Questions? <br /> Call us!
            </h2>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                <p className="text-sm leading-relaxed">
                  Head office: Metro Solver Limited <br />
                  Grantham Road, London E12 5LK, United Kingdom
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <a
                  href="tel:+447956465466"
                  className="text-sm hover:text-purple-300 transition-colors"
                >
                  +44 7956 465466
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <a
                  href="mailto:office@metrosolver.com"
                  className="text-sm hover:text-purple-300 transition-colors"
                >
                  office@metrosolver.com
                </a>
              </div>
            </div>

            {/* Currency Dropdown */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                Country Currency
              </p>
              <div className="relative w-full max-w-xs">
                <select
                  className="w-full p-3 rounded-md bg-[#2a0d47] border border-purple-700 text-sm text-white appearance-none pr-10 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  defaultValue="GBP"
                >
                  <option value="GBP">GBP - British Pound</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((section, i) => (
              <div key={i}>
                <h4 className="text-lg font-bold mb-4 text-purple-300">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Partner Logos ---------- */}
        <div className="border-t border-purple-900 py-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-6 text-center md:text-left">
            Our Future Partners
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Bottom ---------- */}
        <div className="border-t border-purple-900/50 py-4 mt-4 text-center md:text-left text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            &copy; F-Metro Solver. All Rights Reserved{" "}
            {new Date().getFullYear()}.
          </p>
          <p>
            Metro Solver Limited is incorporated in England & Wales.
            Registration No 13792085
          </p>
        </div>
      </div>
    </footer>
  );
}
