import React from "react";
import { Icon } from "@iconify/react";

function ServiceCard({ image, title, description, index, icon }) {
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
          <h3 className="text-xl font-semibold text-left mb-2 text-white">
            {title}
          </h3>
          <p className="text-xs font-light text-white">{description}</p>
        </div>
        <div className="mt-auto flex justify-between items-center text-white">
          {/* Use the passed icon prop */}
          <Icon icon={icon} width="30" height="30" className="text-white" />
          <p className="text-3xl font-light text-end">0{index}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
