import React, { useState } from 'react';

const SkeletonLoader = () => (
  <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
);

const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
  </div>
);

const ProjectCard = ({ image, title, onClick }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="relative w-full group cursor-pointer" onClick={onClick}>
      {!isImageLoaded && <SkeletonLoader />}

      <img
        src={image}
        alt="Project"
        className="object-cover rounded-lg w-full h-full transition-all duration-300"
        loading="eager"
        onLoad={handleImageLoad}
      />
      {isImageLoaded && (
        <div className="absolute rounded-xl bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent lg:opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-lg font-semibold text-left text-white">{title}</h3>
          <p className="text-xs font-light text-white">Jorence Mendoza</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProjectCard);
