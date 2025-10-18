import React, { useState } from 'react';

function ProjectCard({ image, title, onClick }) {
  const [isLoading, setIsLoading] = useState(true); // State to track image loading

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false once the image is loaded
  };

  return (
    <div className="relative w-full group cursor-pointer" onClick={onClick}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 animate-pulse"></div>
      )}

      {/* Image */}
      <img
        src={image}
        alt="Project"
        className={`object-cover w-full h-full transition-all duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        loading="lazy" // Lazy load the image
        onLoad={handleImageLoad} // Trigger loading state change when image is loaded
      />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-lg font-semibold text-left text-white opacity-100">{title}</h3>
        <p>Jorence Mendoza</p>
      </div>
    </div>
  );
}

export default ProjectCard;
