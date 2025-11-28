import React from "react";

function WorkCard({ title, image, tech }) {
  return (
    <div>
      <div className="group  mt-4 w-full bg-white rounded overflow-hidden transition-all duration-300 cursor-pointer mx-2 border border-gray-200">
        {/* Image Container with fixed height */}
        <div className="h-78 overflow-hidden">
          <img
            src={image}
            alt="Project"
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
            loading="eager"
          />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-2">{title}</h1>
        <p className="text-sm text-gray-600">{tech}</p>
      </div>
    </div>
  );
}

export default WorkCard;
