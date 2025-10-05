"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const VideoPlayerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Add actual video play/pause logic here if needed
  };

  return (
    <section className="bg-[#0e0c24] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Video player container */}
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
          style={{ paddingTop: "40%" }}
        >
          {/* Thumbnail image without border */}
          <Image
            src="/works/VideoPlayer.png"
            alt="Team working in office"
            fill
            sizes="(max-width: 768px)"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       flex items-center justify-center w-20 h-20 rounded-full 
                       bg-purple-700/50 hover:bg-purple-700/70 shadow-lg backdrop-blur-sm z-10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="text-white w-8 h-8" />
            ) : (
              <Play className="text-white w-8 h-8" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayerSection;
