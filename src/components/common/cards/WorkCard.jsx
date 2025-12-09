import React from "react";

function WorkCard({ title, image, tech, description, category, isLoading = false }) {

  const techArray = Array.isArray(tech) ? tech : (tech || '').split(',').map(t => t.trim());
  
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="group mt-4 bg-white rounded overflow-hidden transition-all duration-300 cursor-pointer mx-2 border border-gray-200">
          <div className="h-78 overflow-hidden relative">
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          </div>
          
          <div className="p-4">
      
            <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-3/4" />
      
            <div className="space-y-2 mb-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
            </div>

            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="h-6 w-16 bg-gray-200 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      <div className="group mt-4 bg-white rounded overflow-hidden transition-all duration-300 cursor-pointer mx-2 border border-gray-200 hover:shadow-lg hover:border-gray-300">
        <div className="h-78 overflow-hidden relative">
          <img
            src={image}
            alt={title || "Project"}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
            loading="lazy"
          />
          {category && (
            <span className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              {category}
            </span>
          )}
        </div>
        <div className="p-4">
          <h1 className="text-base font-semibold text-gray-900 mb-2">{title}</h1>
          {description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {techArray.map((techItem, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;