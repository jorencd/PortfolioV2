import React, { useState, useEffect, useCallback } from 'react';

// Skeleton Loader component
function SkeletonLoader() {
  return (
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
  );
}

// Loading Spinner component
const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
  </div>
);

// ProjectCard component
const ProjectCard = ({ image, title, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [skeletonDuration, setSkeletonDuration] = useState(1000);

  // Adjust skeleton duration based on network speed
  useEffect(() => {
    if (navigator.connection) {
      const { effectiveType } = navigator.connection;
      setSkeletonDuration(getSkeletonDuration(effectiveType));
    }
  }, []);

  // Handle image load
  const handleImageLoad = useCallback(() => setIsLoading(false), []);

  const getSkeletonDuration = (connectionType) => {
    switch (connectionType) {
      case '4g':
        return 500;
      case '3g':
        return 1500;
      default:
        return 3000;
    }
  };

  return (
    <div className="relative w-full group cursor-pointer" onClick={onClick}>
      {/* Skeleton loader for image */}
      {isLoading && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 animate-pulse rounded-lg"
          style={{ animationDuration: `${skeletonDuration}ms` }}
        >
          <SkeletonLoader />
        </div>
      )}

      {/* Image element with opacity transition */}
      <img
        src={image}
        alt="Project"
        className={`object-cover rounded-lg w-full h-full transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="eager"
        onLoad={handleImageLoad}
      />

      {/* Skeleton loader for text */}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full h-full">
          <SkeletonLoader />
        </div>
      )}

      {/* Project Info - Text, hidden during loading */}
      <div className="absolute rounded-xl bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent lg:opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-lg font-semibold text-left text-white">{title}</h3>
        <p className="text-xs font-light text-white">Jorence Mendoza</p>
      </div>

      {/* Spinner during loading */}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default React.memo(ProjectCard);
