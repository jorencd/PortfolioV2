import React from 'react';
import WorkCategCard from '../../common/cards/WorkCategCard';
import { workCategories } from '../../../data/WorkCategData';

function WorkCateg({ onCategorySelect, selectedCategory }) {
  
  const allCategories = [
    { id: 0, title: 'All', alt: 'All works' },
    ...workCategories 
  ];

  const handleCategoryClick = (title) => {
    onCategorySelect(title);
  };

  return (
    <div className="work-categories">
      {/* Desktop View - Grid Layout */}
      <div className="hidden md:flex lg:flex w-full justify-center items-center gap-6">
        {allCategories.map((category) => (
          <div 
            key={category.id}
            onClick={() => handleCategoryClick(category.title)}
            className={`cursor-pointer transition-all w-full`}  
          >
            {/* For "All" category - simple text version */}
            {category.title === 'All' ? (
              <div className={`text-center px-4 py-4 rounded-lg transition-colors bg-neutral-800 text-white hover:bg-neutral-700`} >
                <p className="text-sm md:text-base font-medium">{category.title}</p>
              </div>
            ) : (
              <WorkCategCard 
                title={category.title}
                image={category.image}
                alt={category.alt}
                isSelected={selectedCategory === category.title}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-hide gap-4 py-4 px-4">
          {allCategories.map((category) => (
            <div 
              key={category.id} 
              onClick={() => handleCategoryClick(category.title)}
              className={`flex-shrink-0 w-[280px] cursor-pointer`}
            >
              {/* For "All" category - simple button on mobile */}
              {category.title === 'All' ? (
                <div className={`h-14 flex items-center justify-center rounded-lg transition-colors bg-neutral-800 text-white hover:bg-neutral-700`}>
                  <h3 className={`text-lg font-medium text-white`}>
                    All
                  </h3>
                </div>
              ) : (
                /* For other categories - with background images */
                <WorkCategCard 
                  title={category.title}
                  image={category.image}
                  alt={category.alt}
                  isSelected={selectedCategory === category.title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkCateg;