import React, { useState, useEffect } from 'react';

// Skeleton Loader component (defined here)
function SkeletonLoader() {
  return (
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
  );
}

// Loading Spinner component
function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
    </div>
  );
}

function ProjectCard({ image, title, onClick }) {
  const [isLoading, setIsLoading] = useState(true); // Track image loading
  const [skeletonDuration, setSkeletonDuration] = useState(1000); // Default skeleton duration (ms)

  // Adjust skeleton duration based on network speed
  useEffect(() => {
    if (navigator.connection) {
      const { effectiveType } = navigator.connection;
      setSkeletonDuration(
        effectiveType === "4g" ? 500 : effectiveType === "3g" ? 1500 : 3000
      );
    }
  }, []);

  // Handle image load
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false once the image is loaded
  };

  return (
    <div className="relative w-full group cursor-pointer" onClick={onClick}>
      {/* Skeleton loader - Full size loader that covers the image area */}
      {isLoading && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 animate-pulse rounded-lg"
          style={{ animationDuration: `${skeletonDuration}ms` }}
        >
          <SkeletonLoader />
        </div>
      )}

      {/* Image */}
      <img
        src={image}
        alt="Project"
        className={`object-cover rounded-lg w-full h-full transition-all duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        loading="lazy"
        onLoad={handleImageLoad} // Trigger loading state change when image is loaded
      />

      {/* Title and text */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-lg font-semibold text-left text-white">{title}</h3>
        <p className="text-xs font-light text-white">Jorence Mendoza</p>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
