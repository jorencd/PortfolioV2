import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SkeletonLoader() {
  return (
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg">
      {/* Skeleton placeholder */}
    </div>
  );
}

function ServiceCard({ image, title, description, index, icon }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);

  // Handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
    setTextLoaded(true);  // Ensure text is shown when image is loaded
  };

  return (
    <div className="relative h-55 w-full cursor-pointer"> {/* Adjusted height */}
      {/* Preload the image to ensure it loads right away */}
      <link rel="preload" href={image} as="image" />

      {/* Suspense wrapper for lazy loading */}
      <LazyLoadImage
        src={image}
        alt="Project"
        className={`object-cover rounded-lg w-full h-full transition-all duration-300`}
        loading="eager"  // Change lazy to eager for immediate loading
        onLoad={handleImageLoad}  // Set the imageLoaded state when the image is loaded
      />

      {/* Skeleton loader for both text and image until fully loaded */}
      <div
        className={`absolute h-full bottom-0 rounded-lg left-0 right-0 p-4 flex flex-col justify-between ${!imageLoaded ? 'bg-gray-300 animate-pulse' : ''}`}
      >
        {/* Image skeleton loader */}
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg">
            {/* Skeleton background */}
          </div>
        )}

        <div className={`absolute h-full backdrop-blur-xs bg-[#0000007a] bottom-0 rounded-lg left-0 right-0 p-4 flex flex-col justify-between ${imageLoaded ? '' : 'hidden'}`}>
          <div className="text-neutral-200">
            <h3 className="text-xl font-semibold text-left mb-2">
              {textLoaded ? title : <SkeletonLoader />}
            </h3>
            <p className="text-xs font-light">
              {textLoaded ? description : <SkeletonLoader />}
            </p>
          </div>
          <div className="mt-auto flex justify-between items-center text-white">
            {/* Icon is shown after text is loaded */}
            <Icon icon={icon} width="30" height="30" className="text-neutral-200" />
            <p className="text-3xl font-light text-neutral-200 text-end">
              {textLoaded ? `0${index}` : <SkeletonLoader />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
