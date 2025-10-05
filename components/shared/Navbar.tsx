"use client";

import React, { useState } from "react";
import TopBanner from "./TopBanner";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Lucide icons
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "White label", href: "/white-label" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <div className="relative bg-[#0e0c24] overflow-hidden">
      {/* Top Banner */}
      <div className="hidden lg:block">
        <TopBanner />
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-40 bg-[#0e0c24] border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
          {/* Left: Menu Icon (mobile/tablet) */}
          <div className="flex items-center md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X className="text-white w-6 h-6" />
              ) : (
                <Menu className="text-white w-6 h-6" />
              )}
            </button>
          </div>

          {/* Center: Logo (mobile/tablet) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
            <Link href="/">
              <Image
                src="/Navbar/Frame.png"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-10 p-2 bg-[#1a1835] rounded-full shadow-lg z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm py-2 px-6 text-white rounded-full transition-all duration-300 whitespace-nowrap ${
                  pathname === item.href
                    ? "bg-[#1f1d3c] border border-purple-400"
                    : "hover:text-purple-400"
                } ${item.hasDropdown ? "flex items-center" : ""}`}
              >
                {item.name}
                {item.hasDropdown && <span className="ml-1 text-xs">▼</span>}
              </Link>
            ))}
          </div>

          {/* Right: Message/Cart/User Icons */}
          <div className="flex items-center space-x-4 ml-auto z-50">
            <button className="p-3 bg-[#1f1d3c] rounded-full cursor-pointer hover:bg-[#2a284c] transition-colors">
              <MessageCircle className="text-white w-6 h-6" />
            </button>
            <div className="w-10 h-10 hidden k rounded-full bg-orange-400 overflow-hidden cursor-pointer lg:flex items-center justify-center">
              <Image
                src="/Navbar/profileIcon.png"
                alt="profileIcon"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#1a1835] z-40 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <X className="text-white w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col mt-4 space-y-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-3 px-4 rounded-lg transition-all duration-300 text-left ${
                  pathname === item.href
                    ? "bg-purple-700 text-white"
                    : "text-white hover:bg-purple-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                {item.hasDropdown && <span className="ml-2 text-xs">▼</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
