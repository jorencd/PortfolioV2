import React from "react";
import { Icon } from "@iconify/react";

function CertificatePageSidebar({ selectedCategory, onCategoryChange }) {
  const categories = [
    "All",
    "Web Development",
    "Back End Development",
    "UI/UX Design",
  ];

  return (
    <div className="lg:flex hidden h-dvh md:flex flex-col gap-y-3 lg:w-50 md:w-50">
      <div className="lg:flex gap-x-3 md:flex hidden">
        <Icon icon="iconamoon:category-thin" width="20" height="20" />
        <p className="font-semibold mb-2">Categories</p>
      </div>
      {categories.map((category) => (
        <label
          key={category}
          className="flex items-center gap-x-2 text-sm text-neutral-800"
        >
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={() => onCategoryChange(category)}
            className={`text-blue-600 ${selectedCategory === category}`}
          />
          {category}
        </label>
      ))}
    </div>
  );
}

export default CertificatePageSidebar;
