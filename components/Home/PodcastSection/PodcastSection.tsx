import React from "react";
import PodcastCard from "./PodcastCard"; // Import the card component

const PodcastSection: React.FC = () => {
  return (
    <section className="bg-[#0f001f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-20">
        <h2 className="text-4xl font-extrabold text-white text-center lg:text-left mb-6 lg:mb-0 lg:w-1/2">
          Did You Hear about Our Podcast?
        </h2>
        <p className="text-lg text-gray-400 text-center lg:text-left lg:w-1/2">
          Our podcast features insightful discussions, expert interviews, and
          the latest trends in our industry. Tune in to stay ahead.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Podcast Card 1 */}
          <PodcastCard
            imageSrc="/images/podcast-thumb-1.jpg" // Placeholder image path
            episodeTitle="Mastering Data Analytics for Business Growth"
            category="Data & AI"
            duration="45 min"
            isLive={false} // Set to true if it's a 'LIVE' or 'NEW' episode
          />

          {/* Podcast Card 2 */}
          <PodcastCard
            imageSrc="/images/podcast-thumb-2.jpg" // Placeholder image path
            episodeTitle="Future-Proofing Your Digital Strategy"
            category="Digital Marketing"
            duration="52 min"
            isLive={true} // Example of a live/new podcast
          />
        </div>

        {/* Pagination/Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-white transition"></button>
          <button className="w-3 h-3 rounded-full bg-purple-500"></button>
          <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-white transition"></button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
