import React from "react";

function WorkCard({ title, image, tech }) {
  return (
    <div className="w-full">
      <div className="group mt-4 bg-white rounded overflow-hidden transition-all duration-300 cursor-pointer mx-2 border border-gray-200">
        <div className="h-78 overflow-hidden">
          <img
            src={image}
            alt="Project"
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
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
