import React from "react";
import Image from "next/image"; // For optimized images in Next.js
import { Play, Mic } from "lucide-react"; // Play icon for video, Mic for podcast

interface PodcastCardProps {
  imageSrc: string;
  episodeTitle: string;
  category: string;
  duration: string;
  isLive?: boolean; // Optional: if a podcast is live/new
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  imageSrc,
  episodeTitle,
  category,
  duration,
  isLive = false,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-900 group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]">
      {/* Thumbnail Image */}
      <div className="relative w-full h-56 md:h-64 lg:h-72">
        <Image
          src={imageSrc}
          alt={episodeTitle}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-80"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="w-16 h-16 text-white bg-purple-600 rounded-full p-3 hover:scale-110 transition-transform duration-200" />
        </div>

        {/* Top-left tags */}
        <div className="absolute top-4 left-4 flex space-x-2">
          {isLive && (
            <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
              <Mic className="w-3 h-3 mr-1" /> LIVE
            </span>
          )}
          <span className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
          {episodeTitle}
        </h3>
        <p className="text-gray-400 text-sm md:text-base">
          Episode 1 / {category}
        </p>
      </div>
    </div>
  );
};

export default PodcastCard;
