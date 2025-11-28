import React from 'react'
import WorkCard from '../../common/cards/WorkCard'
import { works } from '../../../data/WorkCardData';

function Work() {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {works.map((works) => (
          <WorkCard 
            key={works.id}
            title={works.title}
            image={works.image}
            tech={works.tech}
          />
        ))}
      </div>
    </div>
  )
}

export default Work