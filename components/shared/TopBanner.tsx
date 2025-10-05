import React from "react";

const TopBanner = () => {
  const features = [
    { text: "Budget friendly", isBanner: false },
    { text: "No. 1 in Europe", isBanner: false },
    { text: "On your first order", isBanner: false },
    { text: "30% OFF", isBanner: true },
    { text: "For all products buy now get the offer", isBanner: false },
    { text: "User Friendly", isBanner: false },
    { text: "24/7 Service", isBanner: false },
  ];

  return (
    <div className="flex justify-center items-center py-2 text-lg text-gray-400 bg-black/50">
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            {feature.isBanner ? (
              // Highlighted banner block
              <div className="bg-red-500 text-white font-semibold py-1 px-4 text-center rounded-lg tracking-wider whitespace-nowrap">
                {feature.text}
              </div>
            ) : (
              // Normal feature item with dot separator
              <span className="whitespace-nowrap flex items-center">
                {index > 0 && index !== 3 && <span className="mr-4">•</span>}
                <span>{feature.text}</span>
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
