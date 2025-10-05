import React from "react";
// Import the split components
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogSection";

const TestimonialsAndBlog: React.FC = () => {
  return (
    <section className="bg-[#0f001f] text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* 1. Testimonial Section */}
      <TestimonialSection />

      {/* Divider */}
      <div className="w-full h-px bg-gray-800 my-20"></div>

      {/* 2. Blog and Case Study Section */}
      <BlogSection />
    </section>
  );
};

export default TestimonialsAndBlog;
