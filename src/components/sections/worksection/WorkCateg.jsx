import React from 'react'
import WorkCategCard from '../../common/cards/WorkCategCard'
import { workCategories } from '../../../data/WorkCategData';

function WorkCateg() {

  return (
    <div className="work-categories">
      {/* Desktop View - Grid Layout */}
      <div className="hidden md:flex lg:flex gap-6">
        {workCategories.map((category) => (
          <WorkCategCard 
            key={category.id}
            title={category.title}
            image={category.image}
            alt={category.alt}
          />
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-hide gap-4 py-4 px-4">
          {workCategories.map((category) => (
            <div key={category.id} className="flex-shrink-0 w-[280px]">
              <WorkCategCard 
                title={category.title}
                image={category.image}
                alt={category.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkCateg