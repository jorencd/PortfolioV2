import React from "react";

function ServiceCard({ image, title, description, index }) {
  return (
    <div className="relative h-55 w-full cursor-pointer"> {/* Adjusted height */}
      <img
        src={image}
        alt="Project"
        className={`object-cover rounded-lg w-full h-full transition-all duration-300`}
        loading="lazy"
      />
      <div className="absolute h-full bottom-0 rounded-lg left-0 right-0 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-left text-white">
            {title}
          </h3>
          <p className="text-xs font-light">{description}</p>
        </div>
        <div className="mt-auto">
          <p className="text-3xl font-light text-end">0{index}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
