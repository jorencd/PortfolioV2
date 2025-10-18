import React from 'react';

function ProjectCard({ image, title, onClick }) {
  return (
    <div className="relative w-full group cursor-pointer" onClick={onClick}>
      <img
        src={image}
        alt="Project"
        className="object-cover w-full h-full transition-all duration-300"
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
